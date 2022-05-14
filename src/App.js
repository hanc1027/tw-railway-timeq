import Topbar from './Components/Topbar'
import SetBlock from './Components/SetBlock';
import ResultBlock from './Components/ResultBlock';
import MobileSetBlock from './Components/Mobile/SetBlock';
import ptxLogo from "./assets/PTX_LOGO/PTX_logo.png"


import useRWD from './hooks/useRWD'

import './App.scss';

function App() {

  const device = useRWD();

  if (device === "desktop")
    return (<div className="desktop-body">
      <Topbar />

      <div className="desktop-content">
        <SetBlock />
        <ResultBlock />
      </div>

      <div className="ptx-logo">
        開放資料來源<br/><img src={ptxLogo} alt="ptxLogo" style={{width:"150px"}}/>
      </div>

    </div>);
  else // tablet & mobile
    return (<div className="mobile-body">
      <Topbar />

      <div className="mobile-content">
        <MobileSetBlock />
      </div>
    </div>);

}

export default App;
