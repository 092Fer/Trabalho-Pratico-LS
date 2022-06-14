import logo from './logo.svg';
import './App.css';

import ControlPanel from './Components/ControlPanel';
import GamePanel from './Components/GamePanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlPanel/>
        <GamePanel/>
      </header>
    </div>
  );
}

export default App;
