import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";

function App() {
  return (
      <div style={{
          background: `linear-gradient(136deg,#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`,
          backgroundSize: "1200% 1200%",
      }} className="py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
          <div className="container py-5">
              <div id="stars"></div>
              <Container className="text-center">
                  <h1 className="display-1">
                      Michael Chambaud
                  </h1>
              </Container>
          </div>
      </div>
  );
}

export default App;
