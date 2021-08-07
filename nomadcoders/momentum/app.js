// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 3.0 The Document Object

// index.html에서 <script src="app.js"></script>로 현재 파일(app.js)을 끌어 쓴다.

/* JS는 HTML과 상호 작용하기 위해 사용한다.
즉 JS를 통해 HTML의 element를 읽고 변경할 수 있다는 것이다. */

// document: 작성한 HTML 문서를 보여 주는 객체(object)로, JS를 통해 HTML에 접근할 수 있게 해 준다.
console.log(document);        // #document
console.log(document.title);  // Momentum 출력. HTML에서 정의한 title을 보여 준다.
console.log(document.body);   // <body>...</body>

// JS는 HTML에 접근해서 읽어 내는 것 말고, HTML 조작도 할 수 있다. 
document.title = "Hi";        // 상단 제목, Elements의 title이 Hi로 변경된다.

// console.dir(): dir 함수는 객체의 속성을 계층 구조로 출력한다.
console.dir(document);  // #document


// 3.1 HTML in Javascript
const title = document.getElementById("title");  // id로 element 가져오는 함수

console.log(title);  // <h1 id="title">id로 가져와 보자!</h1>
console.dir(title);  // h1#title 출력. log에 비해 elements를 훨씬 자세히 보여 준다.

title.innerText = "가져왔다!";  // innerText 값 변경
console.log(title.innerText);   // 가져왔다!