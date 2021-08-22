// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// HTML에서 login-Form 가져오기
const loginForm = document.querySelector("#login-form");     // id를 가져올 때는 #을 붙여서 id임을 명시해 준다.
// const loginForm = document.getElementById("login-form");  // 원래 id를 가져오는 method이다.

// HTML에서 input 가져오기
const loginInput = loginForm.querySelector("input");                // loginForm에서 input 가져오기)
// const loginInput = document.querySelector("#login-form input");  // document에서 login-form의 input 가져오기)

// HTML에서 greeting 가져오기
const greeting = document.querySelector("#greeting");      // html의 id="greeting" 할당

// 반복 사용 문자열 변수 할당
const HIDDEN_CLASSNAME = "hidden";                         // hidden class 할당. string만 포함된, 중요치 않은 변수는 대문자로 쓰는 관습
const USERNAME_KEY = "username"                            // 반복해서 쓰는 문자열이므로 변수 할당. 단순 string이므로 변수명 대문자
const savedUsername = localStorage.getItem(USERNAME_KEY);  // string과 달리 변수명이 틀리면 JS console에서 알려줌

// login submission 관련 함수
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  // "username"을 할당한 변수를 key로 하여 local storage에 저장
    paintingGreetings(username);                   // 반복 부분 아래에서 paintGreetings()로 함수화
}

// 반복되는 부분 함수화: greeting 부분 내부 텍스트 넣고 hidden class 주는 함수
function paintingGreetings(username) {
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// user 정보 유무에 따른 별도 화면 출력
if (!savedUsername) {
    // user 정보가 없으므로 form 보이기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // user 정보가 있으므로 h2 보이기
    paintingGreetings(savedUsername);  // paintGreetings()는 input이 아닌 local storage에서 user 정보를 받는다.
}                                      // 새로고침해도 local storage에 username이 남아 있으므로 h1을 보여 준다.