// custom_module.timer.js
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter7.html

// 06_custom_event.js로 export하기 위한 용도의 js 파일


var EventEmitter = require('events');
// 1. setInterval 함수가 동작하는 interval 값을 설정한다. 1초에 한 번씩 호출
var sec = 1;

// 2. timer 변수를 EventEmitter로 초기화
exports.timer = new EventEmitter();

// 3. javascript 내장 함수인 setInterval을 사용해서 1초에 한 번씩 timer 객체에 tick 이벤트 발생
setInterval(function(){
    exports.timer.emit('tick');
}, sec*1000);