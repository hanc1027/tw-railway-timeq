import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startStation: "臺北",
    endStation: "高雄",
    selectMode: {mode: "", startOrEnd: "" },
    selectedCity:"",
    dateTime:new Date(),
    queryResult: null,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        modeHandler(state, action) {
            state.selectMode = action.payload
        },
        setStartStation(state, action) {
            state.startStation = action.payload.startStation
        },
        setEndStation(state, action) {
            state.endStation = action.payload.endStation
        },
        setSelectedCity(state, action) {
            state.selectedCity = action.payload.selectedCity
        },
        setDateTime(state, action){
            state.dateTime = action.payload.dateTimeValue
        },
        setQueryResult(state, action){
            state.queryResult = action.payload.result
        }
    },
})

export const { modeHandler, setStartStation, setEndStation, setSelectedCity, setDateTime, setQueryResult } = mainSlice.actions

export default mainSlice.reducer