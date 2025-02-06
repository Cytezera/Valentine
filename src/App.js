import './App.css';
import	Land from './landing.js' ;
import ReactDOM from "react-dom";
import {Routes, Route } from "react-router-dom";
import Text from './text.js';
function App() {
  return (
	<Routes> 
		<Route path="/" element={<Land/>} />
		<Route path="/text" element={<Text/>} />
	</Routes>
  );
}

export default App;
