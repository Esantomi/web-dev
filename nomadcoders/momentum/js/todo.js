// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


// const toDoForm = document.querySelector("#todo-form");
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
// const toDoInput = document.querySelector("#todo-form input");  // 아래와 동일
const toDoInput = toDoForm.querySelector("input");

// js가 발생한 event를 함수의 첫 번째 인자로 넘겨 줌
function handleToDoSubmit(e) {
    e.preventDefault();
    console.log(toDoInput.value);  // 입력 값 출력
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 5:15부터 계속