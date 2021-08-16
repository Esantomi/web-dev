// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 4 [2021 UPDATE] LOGIN

// 4.0 Input Values
const loginForm = document.querySelector("#login-form");     // id를 가져올 때는 #을 붙여서 id임을 명시해 준다.
// const loginForm = document.getElementById("login-form");  // 원래 id를 가져오는 method이다.

// input과 button 가져오기: 방법1 (loginForm에서 input 가져오기)
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// input과 button 가져오기: 방법2 (document에서 login-form의 input 가져오기. 2줄로 가능)
const loginInput2 = document.querySelector("#login-form input");
const loginButton2 = document.querySelector("#login-form button");

// 로그인 버튼 handler 설정 (loginInput의 value 출력)
// function handleLoginBtnClick() {
//     // console.dir(loginInput);             // loginInput object의 속성(property)을 계층 구조로 출력
//     // console.log("눌렀다!");
//     console.log("안녕", loginInput.value);  // 기본적으로 value: ""임. 텍스트 박스에 입력하고 click하면 입력 값을 value로 출력
// }

// 로그인 버튼 listener 설정
loginButton.addEventListener("click", handleLoginBtnClick);


// 4.1 Form submission
function handleLoginBtnClick() {
    const username = loginInput.value;
    console.log("임시")
    // if (username === "") {
    //     alert("이름 입력하고 눌러 주세요.");
    // } else if (username.length > 15) {  // 문자열 길이
    //     alert("이름이 너무 길어요.");
    // }
}


// 4.2 Events
