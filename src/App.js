import Topbar from './Components/Topbar'
import SetBlock from './Components/SetBlock';


import './App.scss';

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="content">

        <SetBlock />
      </div>
    </div>
  );
}

export default App;
