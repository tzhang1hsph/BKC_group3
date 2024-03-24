import geopy.distance
import numpy as np

def get_one_distance(row, space):
        stat = (row['Latitude'], row['Longitude'])
        distance = geopy.distance.geodesic(space, stat).km
        return (row['ID'], distance) # standardize the ID column name

def get_distances(row, peripheral_df, k):
    space = (row["Avg. Lat"], row["Avg. Long"])
    dists = peripheral_df.apply(get_one_distance, space=space, axis=1)
    return sorted(dists, key=lambda x: x[1])[0:k]

def find_nearest(open_spaces_df, peripheral_df, k=10, d=0.5):
    k = min(k, len(peripheral_df))
    meta_dists = open_spaces_df.apply(get_distances, peripheral_df=peripheral_df, k=k, axis=1)
    
    nearest = open_spaces_df[['SPACEID', 'Name', 'Avg. Lat', 'Avg. Long']].copy()
    nearest['num_objs'] = [len(list(filter(lambda x: x[1] < d, m))) for m in meta_dists]

    for i in range(k):
        nearest[[f"obj{i+1}_id", f"obj{i+1}_dist"]] = 0
    nearest.loc[:, 'obj1_id':] = [np.array(m).flatten() for m in meta_dists]
    
    return nearest
