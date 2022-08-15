import logo from './logo.svg';
import './App.css';
import Reg from "./Pages/Reg";
import Aut from "./Pages/Aut";
import 'bootstrap/dist/css/bootstrap.min.css';
import NovaPoshta from "./NovaPoshta/NovaPoshta";

function App() {
  return (
      <div className="container-sm">
          <div className="row">
              <Reg></Reg>
              <Aut></Aut>
              <NovaPoshta></NovaPoshta>
          </div>
      </div>
  );
}

export default App;
