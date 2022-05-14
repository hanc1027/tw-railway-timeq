import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";

const SelectCity = (props) => {
  const startOrEnd = useSelector((state) => state.main.selectMode.startOrEnd);

  return (
    <Grid container height="100%">
      <Grid
        item
        md={12}
        justifyContent="center"
        display="flex"
        sx={{ margin: 2 }}
      >
        {startOrEnd === "start" && "請選擇起站地區"}
        {startOrEnd === "end" && "請選擇迄站地區"}
      </Grid>

      <Grid container>
        {props.stations.map((station, index) => {
          return (
            <Grid
              item
              md={3}
              key={station + index}
              justifyContent="center"
              display="flex"
            >
              <Button>{station.city}</Button>
            </Grid>
          );
        })}
      </Grid>

      <Grid
        item
        md={12}
        justifyContent="center"
        display="flex"
        sx={{ margin: 2 , marginBottom: 0}}
      >
        <Button color="error">取消</Button>
      </Grid>
    </Grid>
  );
};

export default SelectCity;
