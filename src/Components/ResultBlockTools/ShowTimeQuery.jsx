
import Grid from "@mui/material/Grid"

import { useSelector } from "react-redux"

const ShowTimeQuery = (props) =>{
  const trainTimetables = useSelector(state=> state.main.queryResult)

    return (<Grid container height="100%">
   
      {trainTimetables.map((station, index) => {

          const trainType = station.TrainInfo.TrainTypeName.Zh_tw.slice(0,2)
          const trainNo = station.TrainInfo.TrainNo
          const goTo = station.TrainInfo.TripHeadSign
          const arrivalTimeOfStartStation = station.StopTimes[0].ArrivalTime
          const arrivalTimeOfEndStation = station.StopTimes[station.StopTimes.length - 1].ArrivalTime

        return (
          <Grid
            item
            md={12}
            xs={12}
            key={station + index}
            display="flex"
          >
              {trainType} / {trainNo}車次 / 開往：{goTo} / 抵達起站時間：{arrivalTimeOfStartStation} / 抵達迄站時間： {arrivalTimeOfEndStation}
           </Grid>
        );
      })}
      
  </Grid>)
}

export default ShowTimeQuery