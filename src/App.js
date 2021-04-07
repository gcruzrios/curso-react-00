import React from "react";
import "./App.css";
import { Button, Accordion, Card, Alert } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>

      <Button
        variant="primary"
        onClick={() => {
          console.log("Hola");
        }}
      >
        Click
      </Button>

      <Alert variant="danger">Peligro!!!</Alert>
     
    </div>
  );
}

export default App;
