// 바닐라 JS로 크롬 앱 만들기
// #3 [2021 UPDATE] JAVASCRIPT ON THE BROWSER
// https://nomadcoders.co/javascript-for-beginners/lobby



// 3.0 The Document Object

// index.html에서 <script src="app.js"></script>로 현재 파일(app.js)을 끌어 쓴다.

/* JS는 HTML과 상호 작용하기 위해 사용한다.
즉 JS를 통해 HTML의 element를 읽고 변경할 수 있다는 것이다. */

// document: 작성한 HTML 문서를 보여 주는 객체(object)로, JS를 통해 HTML에 접근할 수 있게 해 준다.
console.log(document);        // #document 출력
console.log(document.title);  // Momentum 출력. HTML에서 정의한 title을 보여 준다.
console.log(document.body);   // <body>...</body> 출력

// JS는 HTML에 접근해서 읽어 내는 것 말고, HTML 조작도 할 수 있다. 
document.title = "Hi";        // 상단 제목, Elements의 title이 Hi로 변경된다.

// console.dir(): dir 함수는 객체의 속성을 계층 구조로 출력한다.
console.dir(document);  // #document 출력



// 3.1 HTML in Javascript
const titleId = document.getElementById("title");  // id로 element 가져오는 함수

console.log(titleId);  // <h1 id="title">id로 가져와 보자!</h1> 출력
console.dir(titleId);  // h1#title 출력. log에 비해 elements를 훨씬 자세히 보여 준다.

titleId.innerText = "id로 가져왔다!";  // innerText 값 변경
console.log(titleId.innerText);   // id로 가져왔다! 출력



// 3.2 Searching For Elements
// getElementsByClassName(): className으로 element 가져오는 함수. 한번에 여러 element를 array로 가져올 때 유용하다.
const titlesClassName = document.getElementsByClassName("titles");
console.log(titlesClassName);  // HTMLCollection(3) [h1.titles, h1.titles, h1.titles]


// getElementsByTagName(): div, anchor 등의 태그 이름으로 element를 가져오는 함수
const titlesTagName = document.getElementsByTagName("h1");
console.log(titlesTagName);  // h1 태그 값 전부 출력


// querySelector(): element를 CSS selector 방식으로 가져오는 함수
const titleQuerySelector = document.querySelector(".hello h1");  // hello 클래스의 h1 가져오기
// const titleQuerySelector = document.querySelector("div h1");  // div 안의 h1 가져오기
console.log(titleQuerySelector);                                 // <h1>querySelector로 가져와 보자! 1</h1> 출력

// querySelector("#id") === getElementById("Id")
const titleQuerySelectorId = document.querySelector("#title");   // id를 써서 querySelector로 가져오기
console.log(titleQuerySelectorId);                               // <h1 id="title">id로 가져왔다!</h1> 출력


// querySelectorAll: Selector 조건에 맞는 모든 element를 가져오는 함수 
const titleQuerySelectorAll = document.querySelectorAll(".hello h1");
console.log(titleQuerySelectorAll);  // NodeList(3) [h1, h1, h1] 출력



// 3.3 Events
const titleEvent = document.querySelector(".eventTest h1:first-child");  // hello 클래스 h1의 first-child
console.log(titleEvent);  // <h1>누르면 파란색으로 바뀌어요!</h1> 출력
console.dir(titleEvent);  // h1 출력

// titleEvent.style.color = "blue"  // hello 클래스 h1의 글자색을 파란색으로 변경

// event: 어떤 사건. 클릭, 엔터 등등. 이것을 listen하는 게 JS의 주요 작업이다.
function handleTitleClick(){
    console.log("click해서 색을 변경했습니다!");  // titleEvent를 누르면 'click해서 색을 변경했습니다!' 출력
    titleEvent.style.color = "blue";              // click 시 글자색 파란색으로 변경
}

// addEventListenr("event", callback_function): event 감지를 추가하는 함수
titleEvent.addEventListener("click", handleTitleClick);  // onclick property

/* click event를 감지하는 listener를 추가하는 함수.
JS에 function을 넘기고, 사용자가 click하면 JS가 function을 실행함 */



// 3.4 Events part Two

/* listen하고 싶은 event를 찾으려면 찾고 싶은 element(h1 등)를 구글에 검색한다.
MDN(Mozilla Developer Network)에 올라온 Web APIs 글을 참고하면 된다. */
// console.dir()를 통해 직접 내부의 properties를 찾아볼 수도 있다. on으로 시작하는 게 event listener이다.

// onmouseenter: 마우스 커서를 올리는 event를 감지
function handleMouseEnter(){
    titleEvent.innerText = "마우스 커서 올렸네요!";
}

// mouseleave: 마우스 커서를 내리는 event를 감지
function handleMouseLeave(){
    titleEvent.innerText = "마우스 커서 내렸네요!";
}

titleEvent.addEventListener("mouseenter", handleMouseEnter);
titleEvent.addEventListener("mouseleave", handleMouseLeave);

/* 즉 JS로 HTML element를 가져와서(querySelector) 거기에 eventlistener를 추가해 준 것이다.
그러면 특정 event가 발생하면 listener가 캐치해서 특정 function이 수행되게 해 준다. */