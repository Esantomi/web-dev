// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter7.html

// event 사용하기


/* node.js 는 이벤트 기반 비동기 방식의 서버 프레임워크다.
이벤트 처리는 node.js의 핵심이라 할 수 있는데, 아래 3가지 함수와 객체를 이용해 이벤트 처리를 한다.

- EventEmitter : node.js의 모든 이벤트 처리가 정의된 기본 객체이다.
  이벤트를 사용하기 위해서는 이 객체를 재정의해서 사용해야만 한다.

- on() : 이벤트를 연결하는 함수이다.
  이전 장에서 request 객체에 on() 함수를 이용해서 'data'라는 이벤트를 캐치해 사용했었는데
  모든 이벤트 처리는 이런 동일한 루틴을 거쳐서 사용하게 된다.

- emit() : 이벤트를 발생시키는 함수이다.
  위의 on() 함수에서 'data'라는 이벤트가 캐치되기 위해서는 emit('data')의 형태로 이벤트를 발생시켜야 한다. */


// custom_event.js
// 1. 이벤트가 정의돼 있는 events 모듈 생성. 이전 버전의 process.EventEmitter()는 deprecated!
var EventEmitter = require('events');  // 이벤트는 events라는 내장 모듈에 정의돼 있다.

// 2. 생성된 이벤트 모듈을 사용하기 위해 custom_object로 초기화
var custom_object = new EventEmitter();

// 3. events 모듈에 선언되어 있는 on() 함수를 재정의 하여 'call' 이벤트를 처리 
custom_object.on('call', ()=> {
    console.log('called events!');
});

// 4. call 이벤트를 강제로 발생
custom_object.emit('call');


// call_timer.js
// 매초 이벤트를 이용해서 콘솔상에 주기적으로 현재 시간을 출력하는 타이머 모듈 제작 및 사용

var module = require('./custom_module_timer');  // custom_module_timer.js 파일 import

// 1. module 내부에 선언된 timer 객체를 통해 tick 이벤트를 캐치하고, 이벤트 발생 시마다 현재 시간을 출력
module.timer.on('tick', function(time){
    var time = new Date();      // 2. 현재 시간을 가져오기 위한 Date 객체 생성
    console.log('now: '+time);  // now: Thu Jul 29 2021 15:41:44 GMT+0900 (대한민국 표준시)
});