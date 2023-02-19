import Routes from "./router/index"

//Import style et outils
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import { BrowserRouter } from "react-router-dom";


//Import des compartiment pages
import  Navi  from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Navi/>
              <Routes />
              <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;
