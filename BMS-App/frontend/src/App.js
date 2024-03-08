import './App.css';
import { CreateChord, DisplayChords } from './Components/add-chord.component.js';


function App() {
  return (
    <div className="App"> 
	  <CreateChord />
	  <DisplayChords />
    </div>
  );
}

export default App;
