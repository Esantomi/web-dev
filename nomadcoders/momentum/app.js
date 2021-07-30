// 2.0 Your First JS Project
alert("hi")
// index.html에서 <script src="app.js"></script>로 이 파일(app.js)을 끌어 쓴다.


// 2.1 Basic Data Types
1         // int
1.1       // float
"string"  // string


// 2.2 Variables
console.log(2.2);
console.log("Variables");

// 5를 일괄적으로 다른 값으로 바꿔 주려면 번거롭다.
console.log(5 + 2);  // 7
console.log(5 * 2);  // 10
console.log(5 / 2);  // 2.5

// 변수를 만들면 일을 덜해도 된다!
const a = 5;
const b = 2;
const petName = "kokam";  // JS에서는 주로 Camel case, Python에서는 주로 Snake case를 쓴다.

console.log(a + b);  // 7
console.log(a * b);  // 10
console.log(a / b);  // 2.5
console.log("Hi, " + petName)