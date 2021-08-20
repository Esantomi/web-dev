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
// loginButton.addEventListener("click", handleLoginBtnClick);



// 4.1 Form submission
function handleLoginBtnClick() {
    const username = loginInput.value;
    console.log("임시");
    // if (username === "") {
    //     alert("이름 입력하고 눌러 주세요.");
    // } else if (username.length > 15) {  // 문자열 길이
    //     alert("이름이 너무 길어요.");
    // }
}

/* index.html에서 <form> 태그의 required, maxlength 등의 속성을 사용해 if문을 대신해 주었다.
하지만 submit이 되면 페이지가 새로고침이 되는 문제가 남아 있다. (브라우저는 새로고침 후 form을 submit함)
이후 이러한 default 새로고침이 발생되지 않게끔 예방해 줘야 한다. */



// 4.2 Events
// 버튼 click이 아닌, submit 자체를 listen할 수 있어야 한다. (submit은 click 말고 enter를 눌러도 발생함)

function onLoginSubmit_temp(event) {    // submit event 감지 후 실행
    event.preventDefault();             // event 안에 있는 default behavior 방지 함수 (submit의 경우는 새로고침)
    console.log(event);                 // 브라우저가 넘겨 주는 정보(함수 argument) 출력
    const username = loginInput.value;  // 입력 값을 username에 할당
    console.log(username);              // username을 콘솔 로그
}                                       // event가 발생하면 브라우저가 function을 (event object를 가진 채) 호출

// loginForm.addEventListener("submit", onLoginSubmit_temp);  // submit을 listen. loginForm은 위에서 정의했다.

/* 콘솔 로그 결과는 아래와 같다. (이는 방금 실행된 event에 대한 정보다.)
SubmitEvent {isTrusted: true, submitter: button, type: "submit", target: form#login-form, currentTarget: form#login-form, …}

이는 event라는 임의의(다른 이름 가능) argument를 설정해 두면 JS가 방금 일어난 event에 대한 정보를 argument에 할당하기 때문이다.
그러면 JS는 onLoginSubmit 함수를 실행시키는 동시에 함수의 첫 번째 argument에 event object를 할당해 주게 된다.
이 object를 통해 뭐가 클릭됐는지, 누가 submit했는지 등의 정보를 조회하고 이용할 수 있다. */



// 4.3 Events part Two
const link = document.querySelector("a");

// 링크 눌러도 페이지로 이동 안 되게 방지
function handleLinkClick(event) {
    event.preventDefault();  // event object의 defaultPrevented를 true로 변경
    console.log(event);      // PointerEvent 또는 MouseEvent 로그
    console.dir(event);      // event의 세부 내용 로그
    // alert("alert 덕에 멈추나 확인 누르면 default behavior 실행됨");
}

link.addEventListener("click", handleLinkClick);



// 4.4 Getting Username
const greeting = document.querySelector("#greeting");  // html의 id="greeting" 할당
const HIDDEN_CLASSNAME = "hidden";       // hidden class 할당. string만 포함된, 중요치 않은 변수는 대문자로 쓰는 관습. 

// submit되면 loginForm 숨기고 h1 드러내기
function onLoginSubmit_temp2(event) {
    event.preventDefault();                     // 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);  // loginForm에 CSS의 hidden class 추가

    const username = loginInput.value;          // 입력 값 받아서 저장
    // console.log(username);

    // greeting.innerText = "안녕하세요 " + username + " 님";  // 받은 입력 값(+ 텍스트)을 id="greeting" 내부 텍스트로 할당
    greeting.innerText = `안녕하세요 ${username} 님`;       // string과 변수를 합치는 더 편한 방법. ${변수명}
    greeting.classList.remove(HIDDEN_CLASSNAME);            // id="greeting" 요소의 hidden class 제거
}

// loginForm.addEventListener("submit", onLoginSubmit_temp2);



// 4.5 Saving Username

/* localStorage: 브라우저에 값을 저장하기 위한 API
개발자 도구 - Application - Storage - Local Storage로 접근이 가능하다.
API: https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage */

console.log(localStorage);                  // 이미 정의돼 있음
// localStorage.setItem("username", "kokam");  // 저장 (key, value)
// localStorage.getItem("username");           // 호출
// localStorage.removeItem("username");        // 제거
// local storage는 웹 환경의 미니 DB 같은 것이다.

// 사용자가 입력한 username을 local storage에 저장하기
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem("username", username);  // username 변수를 "username"을 key로 하여 저장

    // 이 부분은 반복되므로 4.6 부분에서 paintGreetings()로 함수화함
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);  // 아래 if문에서 listen



// 4.6 Loading Username
/* local storage가 비어 있으면 form을 보여 주고, user 정보가 이미 있으면 대신 h1을 보여 줘야 한다.
이때 새로고침 등을 하더라도 한번 입력한 user 정보가 계속 유지될 수 있어야 한다. */

// local storage 유저 정보 유무 확인
const USERNAME_KEY = "username"  // 반복해서 쓰는 문자열이므로 변수 할당. 단순 string이므로 변수명 대문자

// console.log(localStorage.getItem("username"));          // null 출력
const savedUsername = localStorage.getItem(USERNAME_KEY);  // string과 달리 변수명이 틀리면 JS console에서 알려줌
console.log(savedUsername);

// 4.5의 onLoginSubmit 함수와 아래 if문에서 반복되므로 함수화
function paintingGreetings(username) {
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 이때 html의 <form>과 <h1>이 모두 hidden class여야 한다.
if (savedUsername === null) {  // if (!savedUsername)으로 써도 된다.
    // user 정보가 없으므로 form 보이기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // user 정보가 있으므로 h2 보이기
    paintingGreetings(savedUsername);
}  // 새로고침해도 local storage에 username이 남아 있으므로 h1을 보여 준다.



// 4.7 Super Recap