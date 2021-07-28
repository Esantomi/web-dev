// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter4.html

// 클라이언트 요청(GET) 처리


/* GET 요청 : HTTP request method의 하나로 주소값을 이용해 요청하는 방식
서버로 값을 전달하기 위해 서버 측 주소 끝에 ?를 붙이고 키1=값1&키2=값2의 형태로 요청한다. */

/* 쿼리 스트링(Query String) : 실제 주소값 뒤에 붙어 가는 값 */


// server_request_get.js
var http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring'); 

var server = http.createServer(function(request,response){
    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);
    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('Server is running...');
});