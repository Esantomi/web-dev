// node.js 서버 구축하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter6.html

// module 사용하기


// require('모듈이름') : js 파일을 모듈화하기 위해 사용하는 내장 객체

/* require('모듈이름')으로 모듈을 호출하면 먼저 '모듈이름.js' 파일이 경로상에 있는지 검색한다.
없으면 '모듈이름'으로 된 폴더를 검색하고 해당 폴더 아래의 index.js 파일을 모듈로 가져와서 사용하게 된다. */

var module = require('./custom_module');  // custom_module 파일을 모듈로 import해서 module 변수에 할당

// 1. formatted 특수문자 %d를 사용해서 module.sum( )에서 리턴된 숫자 값을 출력
console.log('sum = %d' , module.sum(100));  // sum = 5050 (1부터 100까지의 합)

// 2. formatted 특수문자 %s를 사용해서 module.var1의 문자 값을 출력
console.log('var1 = %s' , module.var1);  // var1 = 다른 파일 모듈에 exports.var1로 할당해 둔 문자열 값임