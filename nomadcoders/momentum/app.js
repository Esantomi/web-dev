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
loginForm.addEventListener("submit", onLoginSubmit);  // submit을 listen. loginForm은 위에서 정의했다.

function onLoginSubmit(event) {         // submit event 감지 후 실행
    event.preventDefault();             // event 안에 있는 default behavior 방지 함수 (submit의 경우는 새로고침)
    console.log(event);                 // 브라우저가 넘겨 주는 정보(함수 argument) 출력
    const username = loginInput.value;  // 입력 값을 username에 할당
    console.log(username);              // username을 콘솔 로그
}                                       // event가 발생하면 브라우저가 function을 (event object를 가진 채) 호출

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