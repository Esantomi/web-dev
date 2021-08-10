// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 4 [2021 UPDATE] LOGIN

// 4.0 Input Values
const loginForm = document.querySelector("#login-form");     // id를 가져올 때는 #을 붙여서 id임을 명시해 준다.
// const loginForm = document.getElementById("login-form");  // 원래 id를 가져오는 method이다.

// input과 button 가져오기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");