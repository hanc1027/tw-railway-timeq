import Topbar from './Components/Topbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="content">

        <div className="from-to-station">
          <div className="start-label">
            <label>
              起站
            </label>
            <Typography variant="h6">
              臺北
            </Typography>
          </div>

          <Button className="arrow-btn">
            <ArrowBackIosNewIcon fontSize='small' /><ArrowForwardIosIcon fontSize='small' /></Button>

          <div className="end-label">
            <label>
              迄站
            </label>
            <Typography variant="h6">
              高雄
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
