// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/

// JavaScript 기초 문법


// 가. 변수의 선언 및 사용

//1. 변수는 앞에 타입에 대한 구분없이 var 로 선언한다
//2. 문장의 끝은 항상 ; (세미콜론)으로 끝낸다
var name1;

//3. = 을 사용해서 변수에 값을 입력하는데 문자열 입력시에는 앞뒤로 '(외따옴표) 또는 "(쌍따옴표)를 붙혀준다
name1 = '홍길동'; 

//4. 문자나 숫자 및 타입에 관계없이 변수는 var 로 선언한다
var num1;
num1 = 21;

//5. 변수의 선언과 동시에 값을 입력할 수 있다
var num2 = 3;

//6. 두 개의 변수를 더해서 다른 변수에 입력할 수 있다
var sum = num1 + num2;

//7. 숫자와 문자를 더할 경우 결과값은 문자가 된다. 아래 연산결과로 sum2 에는 "홍길동21"이 sum3에는 "이순신3"이 입력된다
var sum2 = name1 + num1;
var sum3 = '이순신' + 3;


// 나. 함수의 선언 및 사용

// 1. 세 개의 패러미터를 더한 후 결과값을 리턴하는 함수를 선언
function summ(param1, param2, param3){
    return param1 + param2 + param3;
}

// 2. 함수 실행 후 결과값을 result에 대입
var result = summ(1,2,3);

// 3. result 에 담긴 결과값을 출력
console.log('result='+result);  // result=6

// 4. 결과값이 없는 함수의 선언
function print(param1){
    console.log('param1='+param1);
}

// 5. 함수호출 : return 이 없는 함수는 로직을 자체적으로 처리하기 때문에 결과값 대입 불필요
print('출력 내용');  // param1=출력 내용


// 다. 조건문
// JavaScript에는 if와 switch가 있다.

var a = 10;

if (a > 11) {
    console.log('a가 11보다 큽니다'); 
} else if(a == 11) {
    console.log('a가 11과 같습니다');
} else {
    console.log('a가 11보다 작습니다');
}  // a가 11보다 작습니다
// console은 node.js 에서 콘솔 화면에 로그를 사용하기 위한 내장객체이고, 멤버변수인 log('내용')로 로그를 출력할 수 있다.


// 라. 반복문
// 반복문에는 for, while, do ~ while이 있다.

// 0부터 9까지 출력하는 while문
var i=0;
while(i < 10) {
    console.log("for : i의 값은="+i);
    i=i+1;
}


// 마. 클래스

/* JavaScript는 프로토타입 기반의 함수형 언어이므로 특별히 객체지향을 위한 class는 없다.
대신 함수형 언어는 함수 자체를 하나의 객체로 취급하므로 단일함수 또는 파일 자체를 하나의 class처럼 사용할 수 있다.
즉, JS에 class는 없지만 함수(function)와 new를 통해 클래스를 비스무리하게 흉내낼 수 있다. */


// JavaScript에서 함수를 사용해 객체화하는 방법

// class 선언 - 첫 번째 글자를 대문자(Camel case)로 함수를 하나 선언한다.
function Class1(msg){
    // 변수를 객체의 멤버로 사용하기 위해 this 예약어를 사용해서 정의한다.
    this.name = '클래스1임';
    this.message = msg;

    // this를 사용하지 않은 변수
    message2 = "this 안 쓴 변수 값임";
    // 멤버함수 선언
    this.print = function(){
        console.log(message2);
    };
}

// 객체를 생성
var myClass1 = new Class1('new class1로 객체 생성하기!');  // new 연산자를 통해 함수를 변수로 초기화함으로써 객체처럼 사용할 수 있다.
console.log(myClass1.name);     // 클래스1임
console.log(myClass1.message);  // new class1로 객체 생성하기!

// this를 사용하지 않은 message2 변수는 외부에서 참조할 수 없다.
console.log(myClass1.message2);  // undefined
// this로 선언된 함수를 통해 사용할 수 있다.
myClass1.print();  // this 안 쓴 변수 값임


// prototype 예약어를 이용해서 Class1 외부에서 함수를 추가하는 법
function Class2(msg){
    this.name = '클래스2임';
    this.message = msg;

    // this로 선언되지 않은 변수는 prototype으로 추가한 함수에서는 참조할 수 없다.
    message2 = "prototype으로 함수 추가해 보자!";
}

//Class2 객체의 prototype을 가져와서 message 값을 리턴하는 함수를 하나 추가한다.
Class2.prototype.getMessage = function(){
    return this.message;
}

Class2.prototype.getMessage2 = function(){
    return this.message2;
}

// 객체를 생성
var myClass2 = new Class2('class2는 prototype으로 message 리턴!');
console.log(myClass2.getMessage());  // class2는 prototype으로 message 리턴!
// 내부에 선언된 함수와는 다르게 prototype으로 선언한 함수는 값을 사용할 수 없다.
console.log(myClass2.getMessage2());  // undefined


// Node.js에서 객체를 사용하는 방법

/* Node.js에서는 require를 사용해서 파일 전체를 객체로 불러올 수 있다.
또한 파일 내부의 멤버들은 exports로 정의할 수도 있고,
JS에서처럼 this나 prototype으로 선언하고 module.exports 명령어로 한번에 처리할 수도 있다. */

// NodeClass 를 선언한다. 여기서 NodeClass 는 변수명이 아니라 class명 이므로 첫 글자를 대문자로 한다.
var NodeClass = require('./NodeClass');  // import해 올 NodeClass.js 파일

// new 연산자를 사용해서 NodeClass 클래스를 nodeClass 변수로 초기화한다.
var nodeClass = new NodeClass();

// setMessage 함수로 값을 입력한다.
nodeClass.setMessage('Node.js에서 파일을 객체로 써 봅시다.');

// 입력된 값을 출력한다.
console.log(nodeClass.getMessage());  // Node.js에서 파일을 객체로 써 봅시다.