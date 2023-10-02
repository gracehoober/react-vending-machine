import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import HotCheetos from "./HotCheetos";
import Funyuns from "./Funyuns";
import Doritos from "./Doritos";
import Snack from "./Snack";
import NavBar from './NavBar';

/** App: Specifies routes */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/:snack" element={<Snack />}></Route>
          <Route path="/HotCheetos" element={<HotCheetos />}></Route>
          <Route path="/Funyuns" element={<Funyuns />}></Route>
          <Route path="/Doritos" element={<Doritos />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
