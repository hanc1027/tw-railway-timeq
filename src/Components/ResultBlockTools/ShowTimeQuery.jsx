import Grid from "@mui/material/Grid"

import TransList from "./ShowTimeQ_Components/TransList"

import { useSelector } from "react-redux"

import fake_data from "../../JSON/Fake_transition_data.json"

const ShowTimeQuery = (props) => {

  const srcUpdateTime = fake_data.SrcUpdateTime
  const trainTimetables = fake_data.TrainTimetables
  // const srcUpdateTime = useSelector(state=> state.main.queryResult.SrcUpdateTime)
  // const trainTimetables = useSelector(state=> state.main.queryResult.TrainTimetables)


  return (<Grid container height="100%" sx={{padding: "10px"}}>

    {trainTimetables.map((station, index) => {

      return (
        <TransList
          key={station + index}
          trainType={station.TrainInfo.TrainTypeName.Zh_tw.slice(0, 2)}
          trainNo={station.TrainInfo.TrainNo}
          goTo={station.TrainInfo.TripHeadSign}
          arrivalTimeOfStartStation={station.StopTimes[0].ArrivalTime}
          arrivalTimeOfEndStation={station.StopTimes[station.StopTimes.length - 1].ArrivalTime}
          srcUpdateTime={srcUpdateTime}
        />

      );
    })}

  </Grid>)
}

export default ShowTimeQuery