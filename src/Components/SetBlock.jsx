import { useState } from "react";
import { Button, Divider, Typography, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LocalizationProvider,
  DesktopDateTimePicker,
} from "@mui/x-date-pickers";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// redux
import { useDispatch } from "react-redux";
import { modeHandler } from "../store/mainSlice";

import "./SetBlock.scss";

const SetBlock = (props) => {
  const [dateValue, setdateValue] = useState(new Date());
  const [startStation, setstartStation] = useState({
    StationUID: "TRA-1000",
    StationID: "1000",
    StationName: {
      Zh_tw: "臺北",
      En: "Taipei",
    },
    StationPosition: {
      PositionLon: 121.51784,
      PositionLat: 25.04771,
    },
    StationAddress: "100230臺北市中正區黎明里北平西路 3 號",
    StationPhone: "02-23713558",
    StationClass: "0",
    StationURL:
      "http://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1000",
  });
  const [endStation, setendStation] = useState({
    StationUID: "TRA-4400",
    StationID: "4400",
    StationName: {
      Zh_tw: "高雄",
      En: "Kaohsiung",
    },
    StationPosition: {
      PositionLon: 120.30313,
      PositionLat: 22.63801,
    },
    StationAddress: "80750高雄市三民區港西里建國二路 318 號",
    StationPhone: "07-2352376",
    StationClass: "0",
    StationURL:
      "http://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4400",
  });

  const dispatch = useDispatch();
  const SelectCity = () => {
    dispatch(modeHandler({ mode: "selectCity" }));
  };

  return (
    <div>
      <div className="from-to-station">
        <div className="start-label">
          <label>起站</label>
          <Typography
            variant="h6"
            className="station-selector"
            onClick={SelectCity}
          >
            {startStation.StationName.Zh_tw}
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
            onClick={SelectCity}
          >
            {endStation.StationName.Zh_tw}
          </Typography>
        </div>
      </div>
      <Divider />

      <div className="date-selector">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDateTimePicker
            value={dateValue}
            onChange={(newValue) => {
              setdateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="yyyy/MM/dd hh:mm a"
          />
        </LocalizationProvider>
      </div>
      <Divider sx={{ marginTop: "8px" }} />

      <div className="query-btn">
        <Button variant="contained">查詢</Button>
      </div>
    </div>
  );
};

export default SetBlock;
