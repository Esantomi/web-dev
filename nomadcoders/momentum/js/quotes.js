// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


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

// quotes array의 0~9 element를 무작위로 출력하는 함수
console.log(quotes[Math.floor(Math.random() * 10)]);

// 10을 쓴 건 소스 코드에 데이터를 직접 입력하는 '하드 코딩'이라 유지 보수가 번거롭다.