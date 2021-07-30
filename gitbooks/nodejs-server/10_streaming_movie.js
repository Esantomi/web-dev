// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter11.html

// Streaming 서비스


// node.js는 이벤트 Loop 기반의 비동기 처리를 지원하기 때문에 대용량 파일을 구간별로 작게 나누어서 처리하는 작업에 강점을 갖는다.
// 데이터 전체를 다 읽거나 쓰지 않아도 중간에 처리할 수 있도록 해 주는 것이 stream이다.