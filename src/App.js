import Topbar from './Components/Topbar'
import SetBlock from './Components/SetBlock';
import ResultBlock from './Components/ResultBlock';

import useRWD from './hooks/useRWD'

import './App.scss';

function App() {

  const device=useRWD();

    if(device==="desktop")
      return(  <h1 style={{color:"#354458",fontFamily:"Microsoft JhengHei"}}>{device}電腦</h1>  );
    else if(device==="tablet")
      return(  <h1 style={{color:"#3a9ad9",fontFamily:"Microsoft JhengHei"}}>{device}平板</h1>  );
    else
      return(  <h1 style={{color:"#29aba4",fontFamily:"Microsoft JhengHei"}}>{device}手機</h1>  );


  // return (
  //   <div className="App">
  //     <Topbar />

  //     <div className="content">
  //       <SetBlock />
  //       <ResultBlock />
  //     </div>
  //   </div>
  // );
}

export default App;
