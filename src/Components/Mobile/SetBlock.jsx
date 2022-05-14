import { useState } from "react";
import { Button, Divider, Typography, TextField, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./SetBlock.scss";

const SetBlock = (props) => {
  const [dateValue, setdateValue] = useState(new Date());

  return (
    <div>
      <div className="from-to-station">
        <div className="start-label">
          <label>起站</label>
          <Typography variant="h6">臺北</Typography>
        </div>

        <Button className="arrow-btn">
          <ArrowBackIosNewIcon fontSize="small" />
          <ArrowForwardIosIcon fontSize="small" />
        </Button>

        <div className="end-label">
          <label>迄站</label>
          <Typography variant="h6">高雄</Typography>
        </div>
      </div>
      <Divider />

      <div className="date-selector">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateTimePicker
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
