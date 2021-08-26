// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 5.0 Intervals
// Interval: 일정 간격으로 발생

// HTML에서 clock 가져오기
const clock = document.querySelector("h2#clock");  // 그냥 #clock도 가능

// 예제용 함수
function sayHello() {
    console.log("Hello");
}

// interval 설정 (반복할 함수명, 시간 간격(ms))
setInterval(sayHello, 5000);  // 5초마다 콘솔에 Hello 출력


// 5.1 Timemouts and Dates
// Timeout : 특정 시각 이후 발생

// Timeout 설정 (반복할 함수명, 시간 간격(ms))
setTimeout(sayHello, 5000);  // 5초 후에 콘솔에 Hello 1번 출력

// Date object
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log(Date);        // Date object 출력 : ƒ Date() { [native code] }
console.log(new Date());  // 한국 표준시 기준 현재 연월일시 출력

const date = new Date();          // Date 객체 생성
// console.log(date.getDate());      // 23
// console.log(date.getDay());       // 1 (월요일)
// console.log(date.getFullYear());  // 2021
// console.log(date.getHours());     // 19 (시)
// console.log(date.getMinutes());   // 53 (분)
// console.log(date.getSeconds());   // 29 (초)

// 새 Date object를 만들고, 새 object의 시, 분, 초를 출력하는 함수
function getClockPrototype() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// getClockPrototype();                   // 페이지 열자마자 함수 호출
// setInterval(getClockPrototype, 1000);  // interval 설정 : 1초 간격


// 5.2 PadStart
// padStart() : 특정 string(= padding)을 붙여 전체 string의 길이를 맞춰 주는 함수
console.log("1".padStart(2, "0"));   // "1"을 2자리로, 앞에 "0"을 넣어서 맞춤
console.log("12".padStart(2, "0"));  // 이미 2자리이므로 12 출력

// padEnd() : padding을 맨 뒤에 붙여 주는 함수
console.log("1".padEnd(2, "0"));       // 10 출력
console.log("hello".padEnd(20, "X"));  // helloXXXXXXXXXXXXXXX 출력

// padding을 붙여 개선한 getClock 함수
function getClock() {
    const date = new Date();

    // Date의 properties는 number이므로 padStart를 그대로 사용할 수 없다.
    const hours = String(date.getHours()).padStart(2, "0");  // 따라서 string으로 만든 뒤 padding을 붙인다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


// 5.3 Recap
