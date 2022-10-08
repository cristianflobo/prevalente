import './App.css';
import {Routes,Route} from "react-router-dom";
//import Home from './components/Index';
import { Navbar } from './components/navbar/Index';
import {Home} from './components/home'

function App() {
  return (
    <Routes> 
      
      <Route path="/" element={<Home/>}/>   
    </Routes> 
  )
}

export default App;