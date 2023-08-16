// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  UI from "./component/Ui.jsx";
import Man from "./component/Man"




function App() {
  return(
  <> 
   <Man/>
  <Routes>

  <Route path='/' Component={UI}></Route>
  <Route path='/Man' Component={Man}></Route>

</Routes>
</>)
}



 




//   const [first, setfirst] = useState(0);

// function update(params) {
//   setfirst(first + 1)
// }
//   return (
//     <><h1>number {first}</h1>
//     <button onClick={update}>Click</button></>

//   );




export default App;
