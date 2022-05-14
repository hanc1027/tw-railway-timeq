import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startStation: {
        "StationUID": "TRA-1000",
        "StationID": "1000",
        "StationName": {
            "Zh_tw": "臺北",
            "En": "Taipei"
        },
        "StationPosition": {
            "PositionLon": 121.51784,
            "PositionLat": 25.04771
        },
        "StationAddress": "100230臺北市中正區黎明里北平西路 3 號",
        "StationPhone": "02-23713558",
        "StationClass": "0",
        "StationURL": "http://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1000"
    },
    endStation: {
        "StationUID": "TRA-4400",
        "StationID": "4400",
        "StationName": {
            "Zh_tw": "高雄",
            "En": "Kaohsiung"
        },
        "StationPosition": {
            "PositionLon": 120.30313,
            "PositionLat": 22.63801
        },
        "StationAddress": "80750高雄市三民區港西里建國二路 318 號",
        "StationPhone": "07-2352376",
        "StationClass": "0",
        "StationURL": "http://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4400"
    },
    selectMode: {mode: "", startOrEnd: "start" },
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        modeHandler(state, action) {
            state.selectMode = action.payload
        },
        setStartStation(state, action) {
            state.startStation = action.payload

        },
        setEndStation(state, action) {
            state.endStation = action.payload
        }
    },
})

export const { modeHandler, setStartStation, setEndStation } = mainSlice.actions

export default mainSlice.reducer