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
import { modeHandler, setDateTime, setTimeQueryResult, setTicketQueryResult } from "../store/mainSlice";

import "./SetBlock.scss";

import CryptoJS from 'crypto-js';
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

  const generateAuthorization = () => {

    var AppKey = process.env.REACT_APP_APP_Key
    var AppID = process.env.REACT_APP_APP_ID

    var GMTString = new Date().toGMTString();
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA1, AppKey);
    hmac.update('x-date: ' + GMTString);
    var hash = hmac.finalize();
    var hash64 = hash.toString(CryptoJS.enc.Base64);
    var Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${hash64}"`;

    return { Authorization, GMTString }
  }

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
        <Button variant="contained" onClick={() => {
          let month = dateTime.getMonth() + 1
          if (month < 10) month = `0${month}`
          let date = dateTime.getDate()
          if (date < 10) date = `0${date}`

          const queryDate = `${dateTime.getFullYear()}-${month}-${date}`

          let startStationID = "", endStationID = "", isEnd = 0;

          stationsWithID.every(item => {
            if (item.name === startStation) {
              startStationID = item.id
              isEnd++
            }

            if (item.name === endStation) {
              endStationID = item.id
              isEnd++
            }

            if (isEnd >= 2) return false;

            return true
          })

          var Authorization, GMTString = generateAuthorization()

          // Get time from start station to end station
          var time_config = {
            method: 'get',
            url: `/DailyTrainTimetable/OD/Inclusive/${startStationID}/to/${endStationID}/${queryDate}?%24&%24format=JSON`,
            headers: {
              'Authorization': Authorization,
              'x-date': GMTString
            }
          };

          // TODO: Will remove comment
          //*
          axios(time_config)
            .then(function (response) {
              if(response.data.TrainTimetables.length === 0){
                dispatch(modeHandler({ mode: "notFound", startOrEnd: "" }));
                return false
              }else{
                dispatch(setTimeQueryResult({ result: response.data }))
              }

              // Get ticket fee from start station to end station
              var ticket_config = {
                method: 'get',
                url: `/ODFare/${startStationID}/to/${endStationID}?%24format=JSON`,
                headers: {
                  'Authorization': Authorization,
                  'x-date': GMTString
                }
              };
              axios(ticket_config)
                .then(function (response) {
                  dispatch(setTicketQueryResult({ ticket: response.data }))
                  dispatch(modeHandler({ mode: "showTimeQuery", startOrEnd: "" }));
                })
                .catch(function (error) {
                  console.log(error);
                });

            })
            .catch(function (error) {
              console.log(error);
            });
          //*/


        }}>查詢</Button>
      </div>
    </div>
  );
};

export default SetBlock;
