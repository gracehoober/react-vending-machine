
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/HotCheetos" element={<HotCheetos />}></Route>
          <Route path="/Funyuns" element={<Funyuns />}></Route>
          <Route path="/Doritos" element={<Doritos />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
