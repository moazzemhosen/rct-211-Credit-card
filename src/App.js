import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [cardvalue, setCardvalue] = useState("");
  return (
    <div className="App">
      <Card
        length={4}
        perBoxLength={4}
        cardvalueHandeller={(value) => {
          setCardvalue(value);
        }}
      ></Card>
      <h4> Cradit-card No is {cardvalue}</h4>
    </div>
  );
}

export default App;
