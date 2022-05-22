import Grid from "@mui/material/Grid"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DirectionsTransitFilledTwoToneIcon from '@mui/icons-material/DirectionsTransitFilledTwoTone';

import "./TransList.scss"

const colorCodeOfCar = {
  "區間": { bgColor: "#0000cc", textColor: "white", borderColor: "rgb(243, 226, 127)" },
  "自強": { bgColor: "#ff8000", textColor: "white", borderColor: "rgb(243, 226, 127)" },
  "莒光": { bgColor: "#ffcc00", textColor: "rgb(10, 7, 43)", borderColor: "rgb(127, 175, 243)" },
  "普悠瑪": { bgColor: "#ff0000", textColor: "white", borderColor: "rgb(243, 226, 127)" },
  "太魯閣": { bgColor: "#a6a6a6", textColor: "rgb(10, 7, 43)", borderColor: "rgb(243, 226, 127)" },
}

const TransList = (props) => {

  const trainType = props.trainType
  const trainNo = props.trainNo
  const goTo = props.goTo
  const arrivalTimeOfStartStation = props.arrivalTimeOfStartStation
  const arrivalTimeOfEndStation = props.arrivalTimeOfEndStation


  return (<Grid
    item
    container
    xs={12}
    className="container"
  >
    <Grid item container  sm={5} md={4} lg={3}>
      <Grid item xs={4} className="car-type" sx={{ backgroundColor: colorCodeOfCar[trainType].bgColor, color: colorCodeOfCar[trainType].textColor, borderColor: colorCodeOfCar[trainType].borderColor }}>{trainType}
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>{trainNo} 車次</Grid>
    </Grid>

    <Grid item xs={12} className="content">
      <Grid item sm={5} md={4} lg={3} className="content-inner">
        {arrivalTimeOfStartStation} <DoubleArrowIcon sx={{ color: "#BB3D00", margin:"0px 5px" }} /> {arrivalTimeOfEndStation}
      </Grid>
      <Grid item sm={4} md={3} lg={2} className="content-inner">
        <DirectionsTransitFilledTwoToneIcon sx={{ color: colorCodeOfCar[trainType].bgColor }} /> {goTo}
      </Grid>
    </Grid>
  </Grid>)
}

export default TransList 