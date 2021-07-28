// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/

// JavaScript 기초문법


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

// 1. 세개의 파라미터를 더한 후 결과값을 리턴하는 함수를 선언
function sum(param1, param2, param3){
    return param1 + param2 + param3;
}

// 2. 함수 실행 후 결과값을 result 에 대입
var result = sum(1,2,3);

// 3. result 에 담긴 결과값을 출력
console.log('result='+result);

// 4. 결과값이 없는 함수의 선언
function print(param1){
    console.log('param1='+param1);
}

// 5. 함수호출 : return 이 없는 함수는 로직을 자체적으로 처리하기 때문에 결과값 대입 불필요
print('출력내용');