import Navbar from './components/Navbar.js';
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="" element={ <Home/> }></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
