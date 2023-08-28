// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  UI from "./component/Ui.jsx";
import Man from "./component/Man"
import Jewelery from './component/Jewelery';




function App() {
  return(
  <> 
  <Routes>
   {/* <Jewelery/> */}

  <Route path='/' Component={UI}></Route>
  <Route path='/Jewelery' Component={Jewelery}></Route>
  <Route path='/Man' Component={Man}></Route>

</Routes>
</>)
}




export default App;
