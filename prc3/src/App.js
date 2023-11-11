import React, { useState } from "react";
import "./App.css";
import { ColoredMessage } from "./components/ColoredMessage.jsx";

function App() {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prevNum) => prevNum + 1);
    setNum((prevNum) => prevNum + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  );
}

export default App;
