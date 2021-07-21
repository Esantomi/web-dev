// 1. 변수 : 값이 저장된 메모리 공간의 주소를 가리키는 식별자(identifier)

var x; // 변수 선언
x = 6; // int 값 할당
var str = "Hello World!"; // string literal 값 할당



// 2. 값 : 프로그램에 의해 조작될 수 있는 대상
// 리터럴(literal) : 소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위

// 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', gender: 'male' }

// 배열 리터럴
[ 1, 2, 3 ]

// 정규표현식 리터럴
/ab+c/

// 함수 리터럴
function() {}


// 데이터 타입(Data Type) : 프로그래밍 언어에서 사용할 수 있는 값의 종류
  // 원시 타입 (primitive data type) : number, string, boolean, null, undefined, symbol (New in ECMAScript 6)
  // 객체 타입 (Object data type) : object
// 동적 타이핑 : js는 C나 Java와 달리 변수 선언 시 데이터 타입을 미리 지정하지 않는다.
  // 다시 말해, 변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정된다.

// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: 'Lee', gender: 'male' };

// Array
var array = [ 1, 2, 3 ];

// function
var foo = function() {};



// 3. 연산자(Operator) : 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다.
  // 이때 연산의 대상을 피연산자(Operand)라 한다.

// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)

// 암묵적 타입 강제 변환을 통한 연산
var foo = 1 + '10'; // '110'
var bar = 1 * '10'; // 10



// 4. 키워드(keyword) : 수행할 동작을 규정한 것
  // 예를 들어 var 키워드는 새로운 변수를 생성할 것을 지시한다.