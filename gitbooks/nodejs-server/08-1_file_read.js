// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter9.html

// 파일 입출력


// file_read.js

// 1. fs(파일시스템) 모듈 사용
var fs = require('fs');

// 2. 비동기 방식의 파일 읽기. 파일을 읽은 후 마지막 패러미터에 넘긴 callback 함수가 호출
fs.readFile('/home/esantomi/mygit/WebDev/gitbooks/nodejs-server/05_custom_module.js', 'utf-8', function(error, data) {
    console.log('01 readAsync: %s', data);
});

// 3. 동기 방식의 파일 읽기. 파일을 읽은 후 data 변수에 저장
var data = fs.readFileSync('/home/esantomi/mygit/WebDev/gitbooks/nodejs-server/05_custom_module.js', 'utf-8');
console.log('02 readSync: %s', data);

/* 비동기 방식으로 파일을 읽는 함수가 다른 thread에 의해서 실행되기 때문에
로그는 두 번째 함수인 '02 readSync: ...'이 먼저 출력된다. */

// 강의에서는 상대경로로 넣어 줘도 문제 없었는데 이제 절대경로로만 받는 듯하다.