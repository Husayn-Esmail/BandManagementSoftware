import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './Components/navbar.component.js';

function App() {
  return (
    <div className="App"> 
	  <NavBar />
    </div>
  );
}

export default App;
