import Topbar from './Components/Topbar'
import SetBlock from './Components/SetBlock';
import ResultBlock from './Components/ResultBlock';
import MobileSetBlock from './Components/Mobile/SetBlock';


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
