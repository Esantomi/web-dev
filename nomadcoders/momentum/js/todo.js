// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";  // 자주 써서 변수 할당
const savedToDos = localStorage.getItem(TODOS_KEY);

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;             // li의 id로 newToDoObj의 id 할당. <li id="1630804307160">
    const span = document.createElement("span");
    span.innerText = newToDo.text;  // newToDo로 들어온 newToDoObj는 id와 text key로 구성돼 있음
    const btn = document.createElement("button");
    btn.innerText = "❌";
    // ❌ 버튼 클릭 리스너
    btn.addEventListener("click", deleteToDo);
    // HTML 항목 추가
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));  // value를 ["a","b","c"] 형태로 저장 (중복도 가능)
}

function deleteToDo(e) {
    const li = e.target.parentElement;  // 제거할 li 태그
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));  // string을 int로 변형
    saveToDos();
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    // 단순 텍스트가 아닌 object를 push
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    toDos.push(newToDoObj);  // object를 toDos array에 push
    paintToDo(newToDoObj);  // paintToDo 함수에 텍스트 대신 object 전달. 하지만 브라우저에서 [object Object]로 보이는 문제가 있음
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// parsedToDos 각각의 요소를 paintToDo에 넣어 주기
if (savedToDos) {                                
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;             // localStorage에 저장된 Value가 있다면 toDos를 []이 아닌, 저장된 값으로 재할당 (let이라 가능)
    parsedToDos.forEach(paintToDo);  // 각각의 요소를 HTML span 태그의 innertext로 삽입
}