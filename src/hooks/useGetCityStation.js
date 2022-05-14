import { useState, useEffect } from 'react';

import stationsDetail from "../JSON/stations.json"

const cities = ["基隆", "雙北", "桃園", "新竹", "苗栗", "臺中", "彰化", "南投", "雲林", "嘉義", "臺南", "高雄", "屏東", "臺東", "花蓮", "宜蘭"]

const deleteNum = (str) => {
    let reg = /[0-9]+/g;
    let str1 = str.replace(reg, "");
    return str1;
}

const filterStationsFromCity = (rawStations, city) => {
    const result = []
    rawStations.forEach(item => {
        let address = deleteNum(item.StationAddress)

        if (city === "雙北") {
            if (address.startsWith("臺北") || address.startsWith("新北")) {
                result.push(item.StationName.Zh_tw)
            }
        }
        else if (address.startsWith(city)) {
            result.push(item.StationName.Zh_tw)
        }
    })
    return result
}


const useGetCityStation = () => {
    const stations = stationsDetail.Stations
    const [cityStations, setcityStations] = useState([]);

    cities.forEach(city => {
        cityStations.push({
            city: city,
            stationName: filterStationsFromCity(stations, city)
        })
    })

    return cityStations;
}

export default useGetCityStation;