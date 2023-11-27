import './App.css';
import Home from "./components/Home"
import Edit from "./components/Edit"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}> </Route>
      <Route path='/edit/:id' element = {<Edit/>}> </Route>

    </Routes>
    </>
  );
}

export default App;
