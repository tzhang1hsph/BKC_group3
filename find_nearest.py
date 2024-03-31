import geopandas as gpd

def get_distances(space, peripheral_df, k, d):
    nearest_to_space = peripheral_df['Geometry'].distance(space['Geometry']).sort_values()[:k] / 1000
    return [
        (nearest_to_space < d).sum(),
        *peripheral_df.loc[nearest_to_space.index, 'ID'],
        *nearest_to_space
    ]

def find_nearest(open_spaces_df, peripheral_df, k=10, d=0.5):
    k = min(k, len(peripheral_df))
    nearest = open_spaces_df[['SPACEID', 'Name', 'Avg. Lat', 'Avg. Long']].copy()
    nearest[['num_objs', *[f"obj{i+1}_id" for i in range(k)], *[f"obj{i+1}_dist" for i in range(k)]]] = open_spaces_df.apply(
        get_distances, peripheral_df=peripheral_df, k=k, d=d,axis=1, result_type='expand'
    )
    
    return nearest
