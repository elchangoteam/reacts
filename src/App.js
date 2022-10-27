import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
  
    <div>
      <NavBar/>
      <ItemListContainer/> 
    </div>

  );
}

export default App;
