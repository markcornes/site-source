import gpxpy, json
import numpy as np
import matplotlib
matplotlib.use('TkAgg',force=True)
from matplotlib import pyplot as plt
print("Switched to:",matplotlib.get_backend())

def gpx_to_json(input_filename):
    """  
        Takes in name of gpx file to be parsed.
        Writes contents to output file as json with entries 
                {time: , latitude: , longitude: , elevation: }
        for each point.
    """
    with open(input_filename, 'r') as f:
        gpx_data = gpxpy.parse(f)

    points = gpx_data.tracks[0].segments[0].points

    coords_json = []

    for point in points:
        single_coord = [point.time.timestamp(), point.latitude, point.longitude, point.elevation]
        single_json = {}
        single_json['lat'], single_json['lng'] = single_coord[1], single_coord[2]
        coords_json.append(single_json)

    return coords_json
            
    
def jsons_to_file(names, output_filename="data.json"):
    json_array = []
    for name in names:
        json_array += gpx_to_json(name)

    with open(output_filename, 'w') as f:
            f.write(json.dumps(json_array, indent=2))

def main():
    names = ['data/' + str(a) + '.gpx' for a in range(1,29)] # + ['data/2b.gpx']
    jsons_to_file(names)