import { Button, Divider, Typography, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LocalizationProvider,
  DesktopDateTimePicker,
} from "@mui/x-date-pickers";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import useGetStationsWithID from "../hooks/useGetStationsWithID"

// redux
import { useSelector, useDispatch } from "react-redux";
import { modeHandler, setDateTime } from "../store/mainSlice";

import "./SetBlock.scss";

import axios from "../_axios"


const SetBlock = (props) => {
  const startStation = useSelector(
    (state) => state.main.startStation
  );
  const endStation = useSelector((state) => state.main.endStation);
  const startOrEnd = useSelector((state) => state.main.selectMode.startOrEnd);
  const dateTime = useSelector((state) => state.main.dateTime);

  const dispatch = useDispatch();
  const SelectCity = (startOrEnd) => {
    dispatch(modeHandler({ mode: "selectCity", startOrEnd: startOrEnd }));
  };

  const stationsWithID = useGetStationsWithID()

  return (
    <div>
      <div className="from-to-station">
        <div className="start-label">
          <label>起站</label>
          <Typography
            variant="h6"
            className="station-selector"
            onClick={() => {
              SelectCity("start");
            }}
            sx={{ backgroundColor: `${startOrEnd === "start" && "rgba(220,218,123,0.6)"}`, borderRadius: 3 }}
          >
            {startStation}
          </Typography>
        </div>

        <Button className="arrow-btn">
          <ArrowBackIosNewIcon fontSize="small" />
          <ArrowForwardIosIcon fontSize="small" />
        </Button>

        <div className="end-label">
          <label>迄站</label>
          <Typography
            variant="h6"
            className="station-selector"
            onClick={() => {
              SelectCity("end");
            }}
            sx={{ backgroundColor: `${startOrEnd === "end" && "rgba(220,218,123,0.6)"}`, borderRadius: 3 }}
          >
            {endStation}
          </Typography>
        </div>
      </div>
      <Divider />

      <div className="date-selector">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDateTimePicker
            value={dateTime}
            onChange={(newValue) => {
              dispatch(setDateTime({ dateTimeValue: newValue }))
            }}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="yyyy/MM/dd hh:mm a"
          />
        </LocalizationProvider>
      </div>
      <Divider sx={{ marginTop: "8px" }} />

      <div className="query-btn">
        <Button variant="contained" onClick={()=>{
          let month = dateTime.getMonth()+1
          if(month<10) month = `0${month}`
          let date = dateTime.getDate()
          if(date<10) date = `0${date}`

          const queryDate = `${dateTime.getFullYear()}-${month}-${date}`
          console.log(queryDate)

          let startStationID = "", endStationID ="", isEnd = 0;
          
          stationsWithID.every(item=>{
            if(item.name ===  startStation){
              startStationID = item.id 
              isEnd++
            }

            if(item.name ===  endStation){
              endStationID = item.id 
              isEnd++
            }

            if(isEnd >= 2) return false;
          })

          // axios.get(`/DailyTrainTimetable/OD/Inclusive/${startStationID}/to/${endStationID}/${queryDate}?%24&%24format=JSON`,{
          //   headers:{
          //     'accept': 'application/json',
          //     'Authorization': 'hmac username="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF"'
          //   }
          // }).then(result=>{
          //   console.log("Result:",result)
          // })
        }}>查詢</Button>
      </div>
    </div>
  );
};

export default SetBlock;
