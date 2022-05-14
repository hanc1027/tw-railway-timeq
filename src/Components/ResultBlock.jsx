import Box from "@mui/material/Box";
import SelectCity from "./ResultBlockTools/SelectCity";
import StartPage from "./ResultBlockTools/StartPage";
import SelectStation from "./ResultBlockTools/SelectStation";
import ShowTimeQuery from "./ResultBlockTools/ShowTimeQuery";


// redux
import { useSelector } from "react-redux";

import useGetCityStation from "../hooks/useGetCityStation";

import "./ResultBlock.scss";

const ResultBlock = (props) => {
  const selectMode = useSelector((state) => state.main.selectMode);
  const selectedCity = useSelector((state) => state.main.selectedCity);
  const cityStations = useGetCityStation();

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2 }} className="main">
       {selectMode.mode === "" && <StartPage/>}
      {selectMode.mode === "selectCity" && <SelectCity stations={cityStations}/>}
      {selectMode.mode === "selectStation" && <SelectStation stations={cityStations} 
      city={selectedCity}/>}
      {selectMode.mode === "showTimeQuery" && <ShowTimeQuery/>}
    </Box>
  );
};
export default ResultBlock;
