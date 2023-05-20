import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      </BrowserRouter>
  );
}

export default App;
