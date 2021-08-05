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

// 배열 생성
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(daysOfWeek);

// 배열 접근 방법 (zero-based index)
console.log(daysOfWeek[0]);  // Mon 출력
console.log(daysOfWeek[1]);  // Tue 출력
console.log(daysOfWeek[6]);  // undefined 출력

// item 추가: push()
daysOfWeek.push("Sun");      // 끝에 Sun 추가
console.log(daysOfWeek[6]);  // Sun 출력

// 배열 값 변경
daysOfWeek[0] = "월요일"            // Mon을 월요일로 변경
console.log(daysOfWeek[0] = "월");  // 출력과 동시에 변경 가능


// 2.6 Objects

/* object는 property를 가진 데이터를 저장하게 해 주며,
하나의 개체(entity)가 여러 특성(properties)을 가질 때 유용하다. {}를 써서 만든다. */

const player = {
    name: "kokam",
    points: 0,
    fat: false,
}

console.log(player);          // player object 전체 출력
console.log(player.name);     // kokam 출력
console.log(player["name"]);  // kokam 출력

// object의 property 값 변경
player.fat = true;   // fat이 true로 변경됨
player.points += 5;  // points가 5점 더해짐
console.log(player);

// object property 추가
player.hobby = "treadwheel"  // 새로운 property 추가
console.log(player);


// 2.7 - 2.8 Functions

/* function은 code를 capsulize해서 여러 번 실행할 수 있게 해 준다. 
argument는 function을 실행하는 동안 특정 정보를 function에 보낼 수 있게 해 준다. */

function sayHello(){
    console.log("Hello!");
}

sayHello();  // Hello! 출력

// parameter 받는 방법
/* () 안의 parameter는 실제 data(= argument)를 받으면 대체되는 place holder이다. */

function sayHelloTo(nameOfPerson, job){
    console.log("Hello, my name is " + nameOfPerson + " the " + job);
}

sayHelloTo('kokam', 'fool')   // Hello, my name is kokam the fool 출력
sayHelloTo('kamko', 'idiot')  // Hello, my name is kamko the idiot 출력

// 덧셈 계산기 만들기
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

plus(8, 11);  // 19

// 나눗셈 계산기 만들기
function divide(a, b){
    console.log(a / b);
}

divide(98, 20);  // 4.9

// object를 만들고 내부에 함수 정의
const pet = {
    name: "kokam",
    sayHello: function(){
        console.log("hello!");
    },
    sayHelloTo: function(otherPersonName){
        console.log("Hello, " + otherPersonName + ". I'm kokam.");
    }
}

// 객체.함수() 형태의 사용이 가능해진다.
console.log(pet.name);    // kokam
pet.sayHello();           // hello!
pet.sayHelloTo("dolbae")  // Hello, dolbae. I'm kokam.
pet.sayHelloTo("salome")  // Hello, salome. I'm kokam.


// 2.9 - 2.10 Recap

// console.log하는 calculator object 만들기
const calculatorLog = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    powerof: function(a, b){
        console.log(a ** b);
    }
}

calculatorLog.plus(12, 8);      // 20
calculatorLog.minus(12, 8);    // 4
calculatorLog.times(12, 8);    // 96
calculatorLog.divide(12, 8);   // 1.5
calculatorLog.powerof(12, 8);  // 429981696


// 2.11 Returns

// calculator 함수는 return이 없다.
console.log(calculatorLog.plus(12, 8));  // undefined

// 한국식 나이 계산기
const age = 96;
function calculateKrAge(ageOfForeigner){
    "it won't be returned."
    return ageOfForeigner + 2;  // return을 통해 함수 밖과 소통한다.
}

const krAge = calculateKrAge(age);
console.log(krAge);                // 98
console.log(calculateKrAge(age));  // 98

// Return하는 calculator object 만들기
const calculatorReturn = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    powerof: function(a, b){
        return a ** b;
    }
}

const plusResult = calculatorReturn.plus(2, 3);
console.log(plusResult);  // 5

const minusResult = calculatorReturn.minus(plusResult, 10);
const timesResult = calculatorReturn.times(10, minusResult);
const divideResult = calculatorReturn.divide(timesResult, plusResult);
const powerofResult = calculatorReturn.powerof(divideResult, minusResult);

console.log(minusResult);    // -5
console.log(timesResult);    // -50
console.log(divideResult);   // -10
console.log(powerofResult);  // -0.0000099999...


// 2.12 Recap

// function을 const, let 등으로 변수(variable)에 할당하면 그 변수는 function의 return을 갖게 된다.
// 한번 return을 하면 그 시점에서 function은 종료된다.
const calculatorTemp = {
    plus: function(a, b){
        console.log("you can see this.");
        return a + b;
        console.log("you can't see this.");
    },
}

const plusTemp = calculatorTemp.plus(3, 4);  // you can see this.만 보인다.
console.log(plusTemp);                       // 7


// 2.13 Conditionals

/*
const myAge = prompt("몇 살이야?");  // prompt는 CSS 적용이 불가해서 잘 사용하지 않는다.
console.log(myAge);                  // 사용자에게 값을 받아 console에 log한다. 취소를 누르면 null을 log한다.

// 사용자 입력 값의 type을 number로 변경
console.log(typeof myAge);            // string 출력. 즉 prompt는 값을 string으로 받는다.
console.log(typeof parseInt(myAge));  // number 출력. parseInt()는 정수로 바꿔 준다.
console.log(myAge, parseInt(myAge));  // '10살'을 입력하면 '10살'과 '10'이 출력된다. 문자열만 넣으면 후자는 NaN이 뜬다.
*/

// 
const myAge = parseInt(prompt("몇 살이야?"));
console.log(myAge);  // 문자열을 입력하면 NaN 반환


// 2.14 Conditionals part Two
console.log(isNaN(myAge));  // isNaN()은 argument가 NaN이면 true 반환

if(isNaN(myAge)){
    console.log("숫자를 입력해 주세요.");   // 입력 값이 숫자가 아닐 경우 출력
} else {
    console.log("나이 입력해 줘서 감사!");  // 입력 값이 숫자일 경우 출력
}


// 2.15 Conditionals part Three: else if
if (isNaN(myAge) || myAge < 0) {                   // OR operator
    console.log("숫자를 양수로 입력해 주세요.");   // 입력 값이 숫자가 아닐 경우 출력
} else if (myAge < 18) {
    console.log("너무 어려서 음주는 안 돼요.");  // 입력 값이 18 미만인 경우 출력
} else if (myAge >= 18 && age <= 50) {             // AND operator
    console.log("음주 가능한 나이예요.");    
} else if (myAge > 50 && myAge <= 80) {
    console.log("과음은 조심하셔야겠어요.");  // 위 조건이 모두 false인 경우 출력
} else if (myAge > 80) {
    console.log("위험한데요?");
}  // else는 안 써도 무방하다.

// AND(&&), OR(||)
true && true == true
true && false == false
false && true == false
false && false == false

true || true == true
false || true == true
true || false == true
false || false == false
