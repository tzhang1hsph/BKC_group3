import pandas as pd
import numpy as np
import datetime
import plotly.express as px
import plotly.io as pio

TOTAL_DAYS = (datetime.date(2024, 1, 31) - datetime.date(2015, 1, 1)).days + 1
TOTAL_WEEKDAYS = TOTAL_DAYS * 5 / 7
TOTAL_WEEKENDS = TOTAL_DAYS * 2 / 7
HOURS_FORMATTED = [datetime.time(i).strftime('%-I %p') for i in range(24)]

trips = []
for i in range(1, 25):
    trips.append(pd.read_pickle(f'data/bluebikes/trips_combined_boston/{i}.pkl'))
combined_trips = pd.concat(trips)
stations = pd.read_csv('data/locations/bluebike_stations.csv')
open_spaces = pd.read_csv('nearest_bluebike_stations_k_20_d_0.5.csv')

def get_nearest_stations(space_name, d=0.5, verbose=False):
    station_names = []
    num_stations = open_spaces.loc[open_spaces['Name'] == space_name, 'num_objs'].iloc[0]
    for station_id in open_spaces.loc[open_spaces['Name'] == space_name, [f'obj{k}_id' for k in range(1, num_stations + 1)]].iloc[0]:
        station_names.append(stations.loc[stations['ID'] == station_id, 'Name'].iloc[0])
    if verbose:
        if num_stations == 0:
            print(f'No stations within {d} km of {space_name}')
        else:
            print(f'{num_stations} nearest station{"s" if num_stations > 1 else ""} to {space_name}: {", ".join(station_names)}')
    return station_names

def get_daily_roundtrips(space_name, na_val=0, verbose=False):
    station_names = get_nearest_stations(space_name, verbose=verbose)
    if station_names == []:
        return na_val
    selected_stations = stations.loc[stations['Name'].isin(station_names)]
    return np.sum(selected_stations['roundtrip_ratio'] * selected_stations['trips']) / TOTAL_DAYS

def get_weighted_roundtrip_ratio(space_name, na_val=0, verbose=False):
    station_names = get_nearest_stations(space_name, verbose=verbose)
    if station_names == []:
        return na_val
    selected_stations = stations.loc[stations['Name'].isin(station_names)]
    return np.average(selected_stations['roundtrip_ratio'], weights=selected_stations['trips'])

def generate_df_by_day_type(df_name, df, station_names):
    day_corrector = TOTAL_WEEKDAYS if df_name == 'weekdays' else TOTAL_WEEKENDS
    started = df.loc[df['start_station_name'].isin(station_names)]
    ended = df.loc[df['end_station_name'].isin(station_names)]

    departures = pd.DataFrame(columns=['Time', 'Trips', 'Day Type', 'Trip Type'])
    departures['Time'] = np.linspace(7.5, 352.5, 24)
    departures['Day Type'] = df_name.title()
    arrivals = departures.copy()

    b1 = np.histogram([t.hour for t in started['started_at'].dt.time], bins=range(25))[0] / day_corrector
    b2 = np.histogram([t.hour for t in ended['ended_at'].dt.time], bins=range(25))[0] / day_corrector
    departures['Trips'] = b1
    departures['Trip Type'] = 'Departures'
    arrivals['Trips'] = b2
    arrivals['Trip Type'] = 'Arrivals'
    return [departures, arrivals]

def plot_activity(space_name, show=False, verbose=False):
    station_names = get_nearest_stations(space_name, verbose=verbose)
    if len(station_names) == 0:
        return
    selected_stations = combined_trips.loc[(combined_trips['start_station_name'].isin(station_names)) | (combined_trips['end_station_name'].isin(station_names))]
    weekday = selected_stations.loc[selected_stations['ended_at'].dt.day_of_week < 5]
    weekend = selected_stations.loc[selected_stations['ended_at'].dt.day_of_week >= 5]
    
    temp_data = []
    for w in ['weekday', 'weekend']:
        temp_data.extend(generate_df_by_day_type(w, eval(w), station_names))
    
    fig = px.line_polar(pd.concat(temp_data), 'Trips', 'Time', 'Day Type', 'Trip Type', hover_data={
        'Trips': ':.2f',
        'Time': False
    }, line_close=True, start_angle=270, width=800, height=600)
    fig.update_layout(
        polar={
            'angularaxis': {
                'tickmode': 'array',
                'tickvals': np.linspace(0, 345, 24),
                'ticktext': HOURS_FORMATTED
            }
        },
        font={'family': 'arial', 'color': '#07455d'},
        legend_title_text=''
    )
    if show:
        fig.show()
    
    pio.write_json(fig, f'hourly_plots/{space_name.replace("/", "-")}.json')