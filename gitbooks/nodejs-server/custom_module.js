// custom_module.js
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter6.html

// 05_custom_module.js로 export하기 위한 용도의 js 파일

/* exports 객체로 먼저 사용할 변수명을 선언하고 해당 변수에 함수, 값 또는 객체를 대입해서 사용할 수 있다.
함수형 언어에서 함수는 객체지향에서의 객체와 같이 각각의 함수가 객체처럼 포인터를 가진다.
따라서 아래 예제에서처럼 함수식 자체를 변수에 대입하는 게 가능하다. */

// 함수를 객체처럼 사용 : var 변수명 = function(파라미터) { 함수식 }


/* 1. exports 객체를 사용해서 sum이라는 변수를 만들고,
sum 변수에 function을 사용해서 하나의 패러미터를 가진 함수식을 대입 */
exports.sum = function(max) {    
    // 2. 입력된 값을 최대값으로 1부터 최대값까지 더해서 반환하는 로직
    return (max+1)*max/2;  // 1+2+3+...+n = n(n+1)/2
}

// 3. var1 변수에 'NEW VALUE 100' 입력
exports.var1 = '다른 파일 모듈에 exports.var1로 할당해 둔 문자열 값임';