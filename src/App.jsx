import Routes from "./routes"

//Import style et outils
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

//Import des compartiment pages
import Nav from './pages/Nav';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Nav />
          </BrowserRouter>
    </div>
  );
}

export default App;
