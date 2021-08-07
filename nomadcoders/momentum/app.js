// 바닐라 JS로 크롬 앱 만들기
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
// getElementsByTagName(): div, anchor 등의 태그 이름으로 element를 가져오는 함수
const titlesClassName = document.getElementsByClassName("titles");
console.log(titlesClassName);  // HTMLCollection(3) [h1.titles, h1.titles, h1.titles]


// querySelector(): element를 CSS selector 방식으로 가져오는 함수
const titleQuerySelector = document.querySelector(".hello h1");  // hello 클래스의 h1 가져오기
// const titleQuerySelector = document.querySelector("div h1");  // div 안의 h1 가져오기
console.log(titleQuerySelector);                                 // querySelector로 가져와 보자! 1 출력

// querySelector("#id") === getElementById("Id")
const titleQuerySelectorId = document.querySelector("#title");   // id를 써서 querySelector로 가져오기
console.log(titleQuerySelectorId);                               // <h1 id="title">id로 가져왔다!</h1> 출력


// querySelectorAll: Selector 조건에 맞는 모든 element를 가져오는 함수 
const titleQuerySelectorAll = document.querySelectorAll(".hello h1");
console.log(titleQuerySelectorAll);  // NodeList(3) [h1, h1, h1]