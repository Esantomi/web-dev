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
function deleteToDo1(e) {
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
function paintToDo1(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    // ❌ 버튼 클릭 리스너
    btn.addEventListener("click", deleteToDo);
    // HTML 항목 추가
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

// 하지만 저장을 하지 않으니 새로고침하면 사라지는 문제는 여전하다.


// 7.3 Saving ToDos
// const toDos = [];  // newToDo를 입력하면 입력 값을 toDos array에 push할 수 있어야 함
let toDos = [];       // const >> let. 업데이트 가능하게 변경

/* 새로 값을 넣어 주면 기존의 Value가 사라지는 문제가 있다.
이는 const toDos = [];로 toDos를 초기 설정해 줬기 때문에 생기는 문제다.

해결책은 const를 let으로 바꿔 값을 업데이트할 수 있게 바꿔 주고,
조건문에서 localStorage에 저장된 value를 toDos에 재할당해 주는 것이다. */ 

// 입력 값을 localStorage에 저장하는 함수
function saveToDos() {
    // localStorage.setItem("todos", toDos);               // "todos": key, toDos: value
    localStorage.setItem("todos", JSON.stringify(toDos));  // value를 ["a","b","c"] 형태로 저장 (중복도 가능)
}

// submit event에 대한 함수
function handleToDoSubmit1(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);                            // toDos로 newToDo로 들어온 값을 push
    // console.log(toDos);                          // (3) ["a", "b", "c"]
    paintToDo(newToDo);
    saveToDos();                                    // Key: todos, Value: a,b,c
    // console.log(localStorage.getItem("todos"));  // "a,b,c"
}

// localStorage의 value가 a,b,c 형태가 아니라 ["a","b","c"]처럼 array 형태로 들어가면 좋겠다.

/* 그런데 localStorage는 array를 저장하지 못하고 텍스트만 저장할 수 있다는 문제가 있다.
그렇다면 단순 text가 아닌 array를 원형 그대로 저장하는 방법은? >> JSON.stringify();

JSON.stringify(): JS의 object든 array든 뭐든 간에 string으로 변형
정확히는 Javascript 값이나 객체를 JSON 문자열로 변환하는 메서드이다.

JSON.parse(): string을 Javascript object로 parsing해 주는 메서드
가령 stringify로 문자열로 바꾼 array를 넣어 주면 다시 array가 된다. */


// 7.4 Loading ToDos part One
// localStorage에 있는 todos의 value들을 화면에 띄워 줄 수 있어야 한다.
const TODOS_KEY = "todos";  // 자주 써서 변수 할당

// JSON.stringify 메서드 예시
console.log(JSON.stringify([1, 2, 3, 4]));  // "[1,2,3,4]"

// JSON.parse 메서드 예시
console.log(JSON.parse("[1,2,3,4]"));  // (4) [1, 2, 3, 4]

// localStorage에서 "todos" key에 대응되는 value 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);  // ["a","b","c"]

// localStorage에 아무 값도 없는 경우 확인 (null인 경우)
if (savedToDos) {                                // if (savedToDos !== null)으로 쓸 수도 있다.
    const parsedToDos = JSON.parse(savedToDos);  // JS object로 parsing
    // console.log(parsedToDos);                 // (3) ["a", "b", "c"]

    // array의 item(element) 각각에 대해 function 실행
    parsedToDos.forEach(element => {                     // 이벤트 리스너가 event 인자를 제공해 주는 것처럼, JS는 처리 중인 item(element)을 제공해 준다.
        console.log("처리되는 요소는 이것 :", element);  // 처리되는 요소는 이것 : a ... b ... c ... 출력 
    });                                                  // parsedToDos.forEach(함수명); 형태도 가능하다.
}

/* 즉 parsedToDos에 있는 각각의 element에 대해 console.log를 실행한다.
=>는 화살표 함수(arrow function)이라고 한다. */


// 7.5 Loading ToDos part Two

// parsedToDos 각각의 요소를 paintToDo에 넣어 주기
if (savedToDos) {                                
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;             // localStorage에 저장된 Value가 있다면 toDos를 []이 아닌, 저장된 값으로 재할당 (let이라 가능)
    parsedToDos.forEach(paintToDo);  // 각각의 요소를 HTML span 태그의 innertext로 삽입
}

/* 새로 값을 넣어 주면 기존의 Value가 사라지는 문제가 있다.
이는 const toDos = [];로 toDos를 초기 설정해 줬기 때문에 생기는 문제다.

해결책은 const를 let으로 바꿔 값을 업데이트할 수 있게 바꿔 주고,
조건문에서 localStorage에 저장된 value를 toDos에 재할당해 주는 것이다. */ 

// 그런데 화면에서 X 버튼으로 값을 지워도 localStorage에는 여전히 남아 있어 새로고침을 하면 span 값을 계속 보여 주는 문제가 있다.


// 7.6 Deleting ToDos part One
/* localStorage는 데이터베이스는 아니며, 데이터베이스인 array를 복사해 두는 곳이다.
그런데 ["a", "b", "a"]처럼 중복 값이 들어가면 둘 중 어느 걸 지워야 할지 구분이 힘들다.
고로 [{id:1111, text:"a"}] 같은 형태로 element에 id를 부여하는데, Date.now()로 id를 주면 편하다. */

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    // 단순 텍스트가 아닌 object를 push
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    // toDos.push(newToDo);  // toDos로 newToDo로 들어온 값을 push
    toDos.push(newToDoObj);  // object를 toDos array에 push
    // paintToDo(newToDo);
    paintToDo(newToDoObj);  // paintToDo 함수에 텍스트 대신 object 전달. 하지만 브라우저에서 [object Object]로 보이는 문제가 있음
    saveToDos();
}

function deleteToDo2(e) {
    const li = e.target.parentElement;  // 제거할 li 태그
    console.log(li.id);                 // X 버튼을 누른 시점을 id 형태로 출력
    li.remove();
}

// 브라우저에서 [object Object]로 보이는 문제 해결
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;  // li의 id로 newToDoObj의 id 할당. <li id="1630804307160">

    const span = document.createElement("span");

    // span.innerText = newToDo;
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


// 7.7 Deleting ToDos part Two
// 각각의 요소에 대해 true면 챙기고, false면 빼서 새롭게 array를 만드는 함수
function trueFilter() {return true;}

function falseFilter() {return false;}

function noThreeFilter(item) {
    return item !== 3
}

function noBananaFilter(food) {return food !== "banana"}

// Array.filter() : forEach와 유사하게, 매개변수로 갖는 함수를 Array 요소 각각에 적용해 준다.
console.log([1, 2, 3, 4].filter(trueFilter));     // (4) [1, 2, 3, 4]
console.log([1, 2, 3, 4].filter(falseFilter));    // []
console.log([1, 2, 3, 4].filter(noThreeFilter));  // (3) [1, 2, 4]
const foodArr = ["chicken", "banana", "pizza"];
console.log(foodArr.filter(noBananaFilter));      // (2) ["chicken", "pizza"]


// 7.8 Deleting ToDos part Three

// 함수 정의까지 arrow function으로 한번에 하기
console.log([1, 2, 3, 4].filter(item => item > 2));  // (2) [3, 4]

const testArr = [1, 2, 3, 4];                         // testArr는 그대로. 즉 filter는 원본 값 변화 X
const testArrNew = testArr.filter(item => item > 2);  // filter를 적용한 값을 새 변수에 할당

console.log(testArr);     // (4) [1, 2, 3, 4]
console.log(testArrNew);  // (2) [3, 4]

// ToDo 제거 함수에 filter 적용
function deleteToDo(e) {
    const li = e.target.parentElement;  // 제거할 li 태그
    li.remove();

    // X 버튼 클릭한 li.id와 다른 값들만 남김 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));  // string을 int로 변형
    saveToDos();

    // li.id는 string인데 toDo.id는 number이므로 string 출력
    // toDos = toDos.filter(toDo => toDo.id !== li.id);
    // console.log(typeof li.id);  // string
}