// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


//7.0 Setup
// const toDoForm = document.querySelector("#todo-form");
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
// const toDoInput = document.querySelector("#todo-form input");  // 아래와 동일
const toDoInput = toDoForm.querySelector("input");

// js가 발생한 event를 함수의 첫 번째 인자로 넘겨 줌
function handleToDoSubmit1(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;        // 입력 값 변수 할당
    toDoInput.value = "";                   // 이후 input 칸 비우기
    // console.log(newToDo, toDoInput.value);  // 입력 값 출력 (후자는 안 보임)
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 7.1 Adding ToDos
function paintToDo1(newToDo) {
    // console.log("이걸 그릴 거야:", newToDo);  // 테스트용
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);  // li 안에 span 넣기
    span.innerText = newToDo;
    // console.log(li);  // <li><span>입력 값</span></li>
    toDoList.appendChild(li);
}

// 삭제가 불가하다는 것과 새로고침하면 ToDos가 사라진다는 문제점이 있음


// 7.2 Deleting ToDos
// 버튼 누르면 li 태그 제거하는 함수
function deleteToDo(e) {
    // console.log(e);  // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …} 출력

    // 어떤 버튼이 눌렸는지 파악하기 위해 event의 path 사용
    // target : 이벤트가 발생한 요소를 반환
    // parentElement : 이벤트가 발생한 요소의 부모를 반환 (parentNode와 동일)

    // console.dir(e.target);                          // button 출력
    // console.dir(e.target.parentElement);            // li 출력
    // console.log(e.target.parentElement);            // <li>...</li>
    // console.dir(e.target.parentElement.innerText);  // 입력 값 출력

    const li = e.target.parentElement;  // 제거할 li 태그
    li.remove();
    
    /* 버튼 click 시 event를 얻음. event는 target(= 누가 click됐는지. 여기서는 버튼) 속성을 가짐.
    이때 버튼은 부모(= li)를 갖는데, parentElement를 통해 파악이 가능함 */
}

// 입력 값을 li 태그로 넣어 주는 함수
function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    // 클릭 리스너
    btn.addEventListener("click", deleteToDo);
    // HTML 항목 추가
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

// 하지만 저장을 하지 않으니 새로고침하면 사라지는 문제는 여전하다.


// 7.3 Saving ToDos
const toDos = [];  // newToDo를 입력하면 입력 값을 toDos array에 push할 수 있어야 함

// 입력 값을 localStorage에 저장하는 함수
function saveToDos() {
    // localStorage.setItem("todos", toDos);               // "todos": key, toDos: value
    localStorage.setItem("todos", JSON.stringify(toDos));  // value를 ["a","b","c"] 형태로 저장 (중복도 가능)
}

/* localStorage는 array를 저장하지 못하고 텍스트만 저장할 수 있다는 문제가 있다.
그렇다면 단순 text가 아닌 array 형태로 저장하는 방법은?

JSON.stringify(): JS의 object든 array든 뭐든 간에 string으로 변형
정확히는 Javascript 값이나 객체를 JSON 문자열로 변환하는 메서드이다. */

// submit event에 대한 함수
function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);                            // toDos로 newToDo로 들어온 값을 push
    // console.log(toDos);                          // (3) ["a", "b", "c"]
    paintToDo(newToDo);
    saveToDos();                                    // Key: todos, Value: a,b,c
    // console.log(localStorage.getItem("todos"));  // "a,b,c"
}

// value가 a,b,c 형태가 아니라 ["a","b","c"]처럼 array 형태로 들어가면 좋겠다. (saveToDos 함수 참고)