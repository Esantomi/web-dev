// custom_module.js
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter6.html

// 05_custon_module.js로 export하기 위한 용도의 js 파일


/* 1. exports 객체를 사용해서 sum이라는 변수를 만들고,
sum 변수에 function을 사용해서 하나의 패러미터를 가진 함수식을 대입 */
exports.sum = function(max) {    
    // 2. 입력된 값을 최대값으로 1부터 최대값까지 더해서 반환하는 로직
    return (max+1)*max/2;  // 1+2+3+...+n = n(n+1)/2
}

// 3. var1 변수에 'NEW VALUE 100' 입력
exports.var1 = '다른 파일 모듈에 exports.var1로 할당해 둔 문자열 값임';