/* App.js 소스 코드 전체 복붙
index.js의 ReactDOM.render()에 <Test /> 추가 */

import logo from './logo.svg';
import './App.css';

function Test() {  // App -> Test로 변경
  return (
    <div className="App">
      <header className="App-header">
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

export default Test;  // App -> Test로 변경
