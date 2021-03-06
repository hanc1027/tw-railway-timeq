import stationsDetail from "../JSON/stations.json"


const useGetStationsWithID = () => {
    const stations = stationsDetail.Stations
    const stationsWithID = stations.map(item=>{
        return{
            "id":item.StationID,
            "name":item.StationName.Zh_tw
        }
    })
   
    return stationsWithID;
}

export default useGetStationsWithID;