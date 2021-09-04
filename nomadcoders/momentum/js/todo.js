// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


//7.0 Setup
// const toDoForm = document.querySelector("#todo-form");
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
// const toDoInput = document.querySelector("#todo-form input");  // 아래와 동일
const toDoInput = toDoForm.querySelector("input");

// js가 발생한 event를 함수의 첫 번째 인자로 넘겨 줌
function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;        // 입력 값 변수 할당
    toDoInput.value = "";                   // 이후 input 칸 비우기
    // console.log(newToDo, toDoInput.value);  // 입력 값 출력 (후자는 안 보임)
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 7.1 Adding ToDos
function paintToDo(newToDo) {
    // console.log("이걸 그릴 거야:", newToDo);  // 테스트용
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);  // li 안에 span 넣기
    span.innerText = newToDo;
    // console.log(li);  // <li><span>입력 값</span></li>
    toDoList.appendChild(li);
}

// 삭제가 불가하다는 것과 새로고침하면 ToDos가 사라진다는 문제점이 있음
