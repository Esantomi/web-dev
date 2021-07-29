// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter5.html

// 클라이언트 요청(POST) 처리


/* GET의 경우는 주소의 끝에 ?(물음표)를 붙이고 뒤에 변수명=값 형태로 요청을 하지만,
POST는 주소만 요청하고 변수와 값을 주소가 아닌 요청 BODY에 담아서 서버 측에 요청한다. */

/* HTTP 프로토콜은 브라우저에서 서버로 요청(REQUEST)하거나 서버에서 브라우저로 응답(RESPONSE)할 때
서로 데이터를 주고받게 되는데 이 데이터의 구조는 요청에 대한 설정 정보가 담기는 HEADER와 실제 데이터가 담기는 BODY로 구성된다. */

// Request : 실제 자원 요청에 대한 정보가 저장되는 부분
// Request Header : 자원 요청에 대한 설정 정보, 요청하는 데이터 타입, 요청자의 브라우저 정보 등이 담긴다.
// Request Data : 실제 전달하고자 하는 데이터가 담긴다.
// POST는 가장 아래의 Request Data에 해당하는 BODY 부분에 데이터를 담아서 전달한다.


// server_request_post.js
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

  // 1. post로 전달된 데이터를 담을 변수를 선언
  var postdata = '';

  // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
  request.on('data', function (data) {
    // request 객체에서 data 이벤트가 발생하면 data 변수를 callback 함수에 담아서 내부 로직을 실행한다.

    // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
    postdata = postdata + data;
  });

  // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
  request.on('end', function() {
    // request 객체에서 end 이벤트가 발생하면 내부 로직을 실행한다. end 이벤트는 callback 시에 전달되는 값이 없다.

    // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
    var parsedQuery = querystring.parse(postdata);

    // 6. 객체화된 데이터를 로그로 출력
    console.log(parsedQuery);

    // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('var1의 값 = ' + result);
  });

});

server.listen(8080, function(){
    console.log('Server is running...');
});

// 실행 후, 브라우저에 'http://localhost:8080/?var1=newData&var2=153&var3=testdata2017' 복붙으로 서버에 요청