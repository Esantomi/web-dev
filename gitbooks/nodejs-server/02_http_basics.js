// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter3.html/

// 서버 구축하기 - http basic


// 가. 서버 구축용 프로젝트 폴더 생성
// 나. server.js 파일 생성 (강의에서는 별도 파일을 만들었지만 여기는 그냥 파일 내에서 함)

// server.js
// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.) 
var http = require('http');  // require: 외부 모듈 import

// 2. http 모듈로 서버를 생성한다.
//    아래와 같이 작성하면 서버를 생성한 후, 사용자로부터 http 요청이 들어오면 function 블럭 내부의 코드를 실행해서 응답한다.
var server = http.createServer(function(request, response){ 

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello node.js!!');  // 포트 들어가면 뜨는 메시지

});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다.
// 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다.
server.listen(8080, function(){ 
    console.log('Server is running...');
});

// cmd에 node 02_http_basics로 실행 후 http://localhost:8080 접속