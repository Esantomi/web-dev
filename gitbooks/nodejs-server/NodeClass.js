// 01_basic_syntax.js에 export하기 위한 js 파일
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter2.html 참고


function Clazz(){
    this.name = 'export할 class 이름임';
    this.message;
}

// message 변수에 값을 입력하는 함수
Clazz.prototype.setMessage = function(msg){
    this.message = msg;
}
// message 변수의 값을 가져오는 함수
Clazz.prototype.getMessage = function(){
    return this.message;
}

// exports 명령어를 사용함으로써 다른 파일에서 require 예약어를 이용해 Clazz 객체를 사용할 수 있게 된다.
// exports 명령어의 위치는 파일의 어떤 곳에 위치해도 동일하게 동작한다.
module.exports = Clazz;