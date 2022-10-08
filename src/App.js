import './App.css';
import {Routes,Route} from "react-router-dom";
import { Navbar } from './components/navbar/Index';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Navbar/>}/>   
    </Routes> 
  )
}

export default App;