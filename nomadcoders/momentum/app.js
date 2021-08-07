// 3.0 The Document Object


// index.html에서 <script src="app.js"></script>로 현재 파일(app.js)을 끌어 쓴다.

/* JS는 HTML과 상호 작용하기 위해 사용한다.
즉 JS를 통해 HTML의 element를 읽고 변경할 수 있다는 것이다. */

// document: 작성한 HTML 문서를 그대로 보여 주는 객체(object)다.
console.log(document);        // #document
console.log(document.title);  // Momentum 출력. HTML에서 정의한 title을 보여 준다.
console.log(document.body);   // <body>...</body>

// JS는 HTML에 접근해서 읽어 내는 것 말고, HTML 조작도 할 수 있다. 
document.title = "Hi";        // 상단 제목, Elements의 title이 Hi로 변경된다.

// console.dir(): dir 함수는 객체의 속성을 계층 구조로 출력한다.
console.dir(document);  // #document
