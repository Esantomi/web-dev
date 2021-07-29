// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter9.html

// 파일 입출력


// file_write.js
var fs = require('fs');

// 1. 새로 생성할 파일에 입력될 문자열
var data = "My first data...\r\nhello there!";

// 2. 비동기 방식으로 파일을 생성. 함수의 인자는 앞에서부터 순서대로 파일명, 입력 데이터, 인코딩, 콜백 함수
fs.writeFile('file01_async.txt', data, 'utf-8', function(e){  // e는 error 객체
    if(e){
        // 3. 파일 생성 중 오류가 발생하면 오류 출력
        console.log(e);
    }else{
        // 4. 파일 생성 중 오류가 없으면 완료 문자열 출력
        console.log('01 비동기 WRITE DONE!');
    }
});

// 5. 동기 방식은 callback 함수를 통한 오류 처리를 할 수 없기 때문에 함수 전체를 try문으로 예외 처리
try{
    // 6. 동기 방식으로 파일을 생성. 함수의 인자는 앞에서부터 순서대로 파일명, 입력 데이터, 인코딩
    fs.writeFileSync('file02_sync.txt', data, 'utf-8');
    console.log('02 동기 WRITE DONE!');
}catch(e){
    console.log(e);
}

// 읽기와 마찬가지로 '02 WRITE DONE!' 로그가 먼저 출력된다.
// file01_async.txt 와 file02_sync.txt 두 개의 파일이 생성된다.