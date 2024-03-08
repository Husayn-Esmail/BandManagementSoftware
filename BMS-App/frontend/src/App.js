import './App.css';
import { CreateChord, ChordsList } from './Components/add-chord.component.js';
import NavBar from './Components/navbar.component.js';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App"> 
	  <NavBar />
	  <CreateChord />
	  <ChordsList />
    </div>
  );
}

export default App;
