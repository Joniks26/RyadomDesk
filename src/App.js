import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Ryadom from "./components/Ryadom/Ryadom";
import Logika from "./components/Logika/Logika";


const App = () => {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
      <div>
        <Route path='/ryadom' component={Ryadom}/>
        <Route path='/logika' component={Logika}/>
      </div>
    </div>
      </BrowserRouter>);
}

export default App;
