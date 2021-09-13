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
        quote: "One word brings another.",
        author: "Euripides, <Trojan Women>"
    },
    {
        quote: "How sweet is life when fortune is not envious.",
        author: "Menander"
    },
    {
        quote: "Better to die once and for all than to suffer pain for all my life.",
        author: "Aeschylus, <Prometheus Bound>"
    }
]

// quote, author 선언
const quote = document.querySelector("#quote span:first-child");  // HTML id=quote의 첫 번째 span 가져오기
const author = document.querySelector("#quote span:last-child");  // HTML id=quote의 마지막 span 가져오기

// 0~quotes 길이 사이의 quotes array element를 무작위로 반환하는 문장을 변수에 할당
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// HTML에 quote, author 넣어 주기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;