export interface Photo{
    "id": number,
    "sol":number,
    "camera":{
        "name":string,
        "rover_id":number,
    },
    "img_src":string,
    "earth_date":string,
    "rover":{
        "name":string,
    }
}