import pandas as pd
import numpy as np

def get_nearest_stations(open_space, d=0.3, verbose=False):
    stations = pd.read_csv('data/locations/bluebike_stations.csv')
    open_spaces = pd.read_csv('open_spaces_nearest_stations_k_10_d_0.3.csv')
    station_names = []
    num_stations = open_spaces.loc[open_spaces['Name'] == open_space, 'NUM STATIONS'].iloc[0]
    for station_id in open_spaces.loc[open_spaces['Name'] == open_space, [f'Station {k}' for k in range(1, num_stations + 1)]].iloc[0]:
        station_names.append(stations.loc[stations['Number'] == station_id, 'Name'].iloc[0])
    if verbose:
        if num_stations == 0:
            print(f'No stations within {d} km of {open_space}')
        else:
            print(f'{num_stations} nearest station{"s" if num_stations > 1 else ""} to {open_space}: {", ".join(station_names)}')
    return station_names

def get_weighted_roundtrip_ratio(open_space, na_val=0, verbose=False):
    stations = pd.read_csv('data/locations/bluebike_stations.csv')
    open_spaces = pd.read_csv('open_spaces_nearest_stations_k_10_d_0.3.csv')
    station_names = get_nearest_stations(open_space, verbose=verbose)
    if station_names == []:
        return na_val
    selected_stations = stations.loc[stations['Name'].isin(station_names)]
    return np.average(selected_stations['roundtrip_ratio'], weights=selected_stations['trips'])