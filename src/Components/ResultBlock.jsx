import Box from "@mui/material/Box";
import SelectCity from "./ResultBlockTools/SelectCity";

// redux
import { useSelector } from "react-redux";

import useGetCityStation from "../hooks/useGetCityStation";

import "./ResultBlock.scss";

const ResultBlock = (props) => {
  const selectMode = useSelector((state) => state.main.selectMode);
  const cityStations = useGetCityStation();

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2 }} className="main">
      {selectMode.mode === "selectCity" && <SelectCity stations={cityStations}/>}
    </Box>
  );
};
export default ResultBlock;
