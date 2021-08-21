import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Test';
import Table from './Components/Table/Table';  // Table.js 가져오기
import Example from './Example';               // Example.js 가져오기
import Image from './Components/Image/Image';  // Image.js 가져오기

// 렌더링
ReactDOM.render(
  <React.StrictMode>
    {/* Test, Table, Example, Image 추가 */}
    <div>
      <Test />
      <Table />
      <Table />
      <Example />
      <Image />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
