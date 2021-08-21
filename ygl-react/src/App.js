import React from 'react';
import logo from './logo.svg';
import './App.css';

// 테스트용 함수
function TestH1() {
  return (
    <h2>App.js의 TestH1 함수 리턴입니다.</h2>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* TestH1 함수 띄우기 */}
        <TestH1 />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
