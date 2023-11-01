import React, {useState} from 'react';
import { Helmet } from "react-helmet";
import List from './components/List.js'
import './App.css'

function App() {
  const [memos, setMemos] = useState([])
  const [inputVal, setInputVal] = useState('')
  const inputHandler = event => {
    setInputVal(event.target.value);
  }

  const buttonHandler = () => {
    setMemos([...memos, inputVal]);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>간단 메모 애플리케이션</title>
        <meta charset='UTF-8' />
        <link rel="stylesheet" href="src/styles.css" />
      </Helmet>
      <h1 id='title'>간단 메모 애플리케이션</h1>
      <input id="add-text" onChange={inputHandler} />
      <button id="add-button" onClick={buttonHandler}>추가</button>
      <div className='container'>
        <p>메모 목록</p>
        <ul id='memo-list'>
          {memos.map((memo, index) => (
            <List key={index} memo={memo}></List>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
