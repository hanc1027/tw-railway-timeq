import Topbar from './Components/Topbar'
import SetBlock from './Components/SetBlock';
import ResultBlock from './Components/ResultBlock';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="content">
        <SetBlock />
        <ResultBlock />
      </div>
    </div>
  );
}

export default App;
