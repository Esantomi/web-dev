// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter4.html

// 클라이언트 요청(GET) 처리


/* GET 요청 : HTTP request method의 하나로 주소값을 이용해 요청하는 방식
서버로 값을 전달하기 위해 서버 측 주소 끝에 ?를 붙이고 키1=값1&키2=값2의 형태로 요청한다. */

/* 쿼리 스트링(Query String) : 실제 주소값 뒤에 붙어 가는 값 */


// server_request_get.js
// 가. GET 요청 처리
var http = require('http');  // http 모듈 임포트

// 1. 요청한 url을 객체로 만들기 위해 url 모듈 사용
var url = require('url');  // url 모듈 임포트

// 2. 요청한 url 중에 Query String을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');  // querystring 모듈 임포트

var server = http.createServer(function(request,response){

    // 3. 콘솔 화면에 로그 시작 부분을 출력
    console.log('--- 로그 시작 ---');

    // 4. 브라우저에서 요청한 주소를 parsing하여 객체화 후 출력
    var parsedUrl = new URL('http://localhost:8080/'+request.url);
    // var parsedUrl = url.parse(request.url);  // deprecated
    console.log(parsedUrl);

    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);

    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- 로그 종료 ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('Server is running...');
});


// 나. 브라우저에서 GET 요청
// 실행 후, 브라우저에 'http://localhost:8080/?var1=newData&var2=153&var3=testdata2017' 복붙으로 서버에 요청
// Hello node.js!! 출력


// 다. 로그 분석
// 강의에 나와 있는 것과는 다르게 출력된다.

/* --- 로그 시작 ---

// 1. 이 부분이 var parsedUrl = url.parse(주소) 함수로 주소값을 객체화한 부분이다.
// 객체화되기 때문에 parsedUrl.search 형태로 객체 내부의 변수 값을 사용할 수 있다.
// 아래에서는 객체 내부의 query라는 변수 값을 가져와서 다시 객체화한다.

URL {
  href:
   'http://localhost:8080//?var1=newData&var2=153&var3=testdata2017',
  origin: 'http://localhost:8080',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8080',
  hostname: 'localhost',
  port: '8080',
  pathname: '//',

  // 2. 이 부분이 var parsedQuery = querystring.parse(parsedUrl.query,'&','=')
  // 역시 위의 parsedUrl 객체에서 query라는 변수 값을 다시 querystring으로 parsing하여 객체화하였다.
  // 해당 객체는 parsedQuery.var1 형태로 객체 내부의 값을 사용할 수 있게 된다. 

  search: '?var1=newData&var2=153&var3=testdata2017',
  searchParams:
   URLSearchParams {
  'var1' => 'newData',
  'var2' => '153',
  'var3' => 'testdata2017' },
  hash: '' }
[Object: null prototype] {}
--- 로그 종료 --- */