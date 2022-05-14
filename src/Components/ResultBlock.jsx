import Box from "@mui/material/Box";
import SelectCity from "./ResultBlockTools/SelectCity";

// redux
import { useSelector } from "react-redux";

import "./ResultBlock.scss";

const ResultBlock = (props) => {
  const selectMode = useSelector((state) => state.main.selectMode);

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2 }} className="main">
      {selectMode === "selectCity" && <SelectCity />}
    </Box>
  );
};
export default ResultBlock;
