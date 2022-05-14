import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// redux
import { useSelector, useDispatch } from "react-redux";
import { modeHandler, setStartStation, setEndStation } from "../../store/mainSlice";

const SelectStation = (props) => {
  let stations = []
  props.stations.forEach(item => {
    if (item.city === props.city) {
      stations = item.stationName
    }
  })

  const startOrEnd = useSelector((state) => state.main.selectMode.startOrEnd);
  const dispatch = useDispatch();

  const setStationHandler = (stationName)=>{
    if(startOrEnd === "start"){
      dispatch(setStartStation({startStation:stationName}))
    }else{
      dispatch(setEndStation({endStation:stationName}))
    }
    dispatch(modeHandler({mode: "", startOrEnd: "" }))
  }


  return (<Grid container height="100%">
    <Grid
      item
      md={12}
      xs={12}
      justifyContent="center"
      display="flex"
      sx={{ margin: 2 }}
    >
      {startOrEnd === "start" && "請選擇起站車站"}
      {startOrEnd === "end" && "請選擇迄站車站"}
    </Grid>

    <Grid container>
      {stations.map((station, index) => {
        return (
          <Grid
            item
            md={3}
            xs={3}
            key={station + index}
            justifyContent="center"
            display="flex"
          >
            <Button onClick={()=>{
              setStationHandler(station)
            }}>{station}</Button>
          </Grid>
        );
      })}
    </Grid>

    <Grid
      item
      md={12}
      xs={12}
      justifyContent="center"
      display="flex"
      sx={{ margin: 2, marginBottom: 0 }}
    >
      <Button color="error" onClick={() => {
        dispatch(modeHandler({ mode: "selectCity", startOrEnd: startOrEnd }));
      }}>取消</Button>
    </Grid>
  </Grid>);
};
export default SelectStation;
