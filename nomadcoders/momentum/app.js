// 2.0 Your First JS Project
alert("hi")  // index.html에서 <script src="app.js"></script>로 이 파일(app.js)을 끌어 쓴다.


// 2.1 Basic Data Types
1         // int
1.1       // float
"string"  // string


// 2.2 Variables
console.log(2.2 + " variables");

// 5를 일괄적으로 다른 값으로 바꿔 주려면 번거롭다.
console.log(5 + 2);  // 7
console.log(5 * 2);  // 10
console.log(5 / 2);  // 2.5

// 변수를 만들면 일을 덜해도 된다!
const a = 5;
const b = 2;
const petNameConst = "kokam";  // JS에서는 주로 Camel case, Python에서는 주로 Snake case를 쓴다.

console.log(a + b);  // 7
console.log(a * b);  // 10
console.log(a / b);  // 2.5
console.log("Hi, " + petNameConst)


// 2.3 const and let

/*
const: 이렇게 지정한 constant(상수)는 값이 바뀔 수 없다.
let: 새로운 변수를 만들 때 사용하며, 값 재할당이 가능하다.

보통 default로 const를 쓰고, 값을 바꿔 줄 필요가 있으면 let을 쓴다.

과거에는 const와 let이 없었고, var만 있었다. (지금은 사용 권장 X)
var은 어디서나 재할당이 가능하지만, 재할당 사항을 알려주지는 않는다.
실수로 값을 변경하는 경우를 방지하기 위해 const와 let을 만든 것이다.
*/

let petNameLet = "temp";
petNameLet = "dolbae";  // 값 업데이트

console.log("we changed his name from kokam to " + petNameLet)


// 2.4 Booleans
true
false

null       // 해당 변수에 아무 값도 없음. 단순히 빈 게 아니라 아무것도 없는 상태가 채워진 것. 없다는 걸 확실히 하기 위해 사용함. 파이썬의 None과 같음.
undefined  // 값이 할당되지 않음

const isKokamFat = true;
const kokamStack = null;
let something;            // 변수 만들고 할당 X
console.log(isKokamFat);  // true
console.log(kokamStack)   // null
console.log(something);   // undefined


// 2.5 Arrays

//배열 생성
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(daysOfWeek);

//배열 접근 방법 (zero-based index)
console.log(daysOfWeek[0]);  // Mon 출력
console.log(daysOfWeek[1]);  // Tue 출력
console.log(daysOfWeek[6]);  // undefined 출력

// item 추가
daysOfWeek.push("Sun");      // 끝에 Sun 추가
console.log(daysOfWeek[6]);  // Sun 출력

//배열 값 변경
daysOfWeek[0] = "월요일"            // Mon을 월요일로 변경
console.log(daysOfWeek[0] = "월");  // 출력과 동시에 변경 가능