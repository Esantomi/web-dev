// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// 6.0 Quotes
// quotes array 선언
const quotes = [
    {
        quote: "A fox knows many things, but a hedgehog knows one big thing.",
        author: "Archilochus"
    },
    {
        quote: "There is nothing permanent except change.",
        author: "Heraclitus"
    },
    {
        quote: "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist.",
        author: "Epicurus"
    },
    {
        quote: "Excess of grief for the dead is madness; for it is an injury to the living, and the dead know it not.",
        author: "Xenophon"
    },
    {
        quote: "Man: a being in search of meaning.",
        author: "Plato"
    },
    {
        quote: "I don't need a friend who changes when I change and who nods when I nod; my shadow does that much better.",
        author: "Plutarch"
    },
    {
        quote: "History is Philosophy teaching by examples.",
        author: "Thucydides"
    },
    {
        quote: "blank 1",
        author: "someone"
    },
    {
        quote: "blank 2",
        author: "someone"
    },
    {
        quote: "blank 3",
        author: "someone"
    }
]

// quote, author 선언
const quote = document.querySelector("#quote span:first-child");  // HTML id=quote의 첫 번째 span 가져오기
const author = document.querySelector("#quote span:last-child");  // HTML id=quote의 마지막 span 가져오기

// quote 출력
console.log(quotes[0]);       // 첫 번째 quote
console.log(quotes[10 - 1]);  // 마지막 quote


// Math 모듈 테스트
console.log(Math.PI);  // pi 값 출력

// Math.random()
console.log(Math.random());       // 0~1 사이의 숫자 무작위 반환
console.log(Math.random() * 10);  // 0~10 사이의 숫자 무작위 반환

// 소수점 뒷자리 제거용 함수
console.log(Math.round(1.5));   // 2. 반올림
console.log(Math.ceil(1.01));   // 2. 올림
console.log(Math.floor(2.9));   // 2. 버림

// 0부터 9 사이의 숫자를 무작위로 반환하는 함수
console.log(Math.floor(Math.random() * 10));

// quotes array의 0~9 element를 무작위로 출력
console.log(quotes[Math.floor(Math.random() * 10)]);  // 10을 쓴 건 소스 코드에 데이터를 직접 입력하는 '하드 코딩'이라 유지 보수가 번거롭다.

// [].length : array의 길이 반환
console.log([1,2,3,4,5,6,7].length);  // 7

// length를 활용해 10을 대체한 문장
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

// 0~quotes 길이 사이의 quotes array element를 무작위로 반환하는 문장을 변수에 할당
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// HTML에 quote, author 넣어 주기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// 6.1 Background
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);  // images 요소 셋 중 하나 출력

// document.createElement() : html element 생성
const bgImage = document.createElement("img");
// console.log(bgImage);  // img 객체(=== <img>) 출력 

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);  // <img src="img/*.jpg">

// appendChild() : html에 js로 작성한 html element 추가
document.body.appendChild(bgImage);


// 6.2 Recap
/* Array에서 random하게 element를 골라 내는 방법을 학습함

Math.random() : 0 이상 1 미만 무작위 값 반환
0과 어떤 수 사이의 랜덤한 값을 가져오고 싶다면, 그 '어떤 수'를 곱해 줌 (위에선 array.lengh)

Math.floor() : 소수점 뒷자리 버림

Javascript에서 html element 만드는 방법
document.createElement() : html element 생성
document.body.appendChild() : html body에 element 추가
document.body.prepend() : html body의 최상단에 element 추가 */

// document.body.prepend() : body 최상단에 element 추가
const prependTest = document.createElement("p");
prependTest.innerText = "a test of prepend() method";
document.body.prepend(prependTest);