import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// redux
import { useSelector, useDispatch } from "react-redux";
import { modeHandler,setSelectedCity } from "../../store/mainSlice";

const SelectCity = (props) => {
  const startOrEnd = useSelector((state) => state.main.selectMode.startOrEnd);
  const dispatch = useDispatch();

  const selectedCityHandler = (cityName)=>{
    dispatch(setSelectedCity({selectedCity:cityName}))
    dispatch(modeHandler({mode: "selectStation", startOrEnd: startOrEnd }))
  }

  return (
    <Grid container height="100%">
      <Grid
        item
        md={12}
        xs={12}
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
              xs={3}
              key={station + index}
              justifyContent="center"
              display="flex"
            >
              <Button onClick={()=>{
                selectedCityHandler(station.city)
              }}>{station.city}</Button>
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
        sx={{ margin: 2 , marginBottom: 0}}
      >
        <Button color="error" onClick={()=>{
          dispatch(modeHandler({ mode: "", startOrEnd: ""}));
        }}>取消</Button>
      </Grid>
    </Grid>
  );
};

export default SelectCity;
