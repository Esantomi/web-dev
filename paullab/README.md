# Jeju Coding Basecamp

- [제주 코딩 베이스캠프 홈페이지](http://paullab.co.kr/)
- [30분 요약 강좌 GitHub](https://github.com/paullabkorea/tutorialproject)
- [30분 요약 강좌 YouTube](https://www.youtube.com/playlist?list=PLkfUwwo13dlUhRuBra9j6YCypYRdifd2O)

## HTML
- 용도에 맞게 HTML 태그를 사용하는 semantic한 HTML 코드 작성이 중요하다.
- HTML 자세히 알기
  - [HTML element 참고서](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
  - [HTML Living Standard](https://html.spec.whatwg.org/)

### Emmet
- 강력한 자동 완성 기능 등으로 HTML 작성 속도를 크게 향상시켜 주는 플러그인 (vscode는 자동 지원)
  - 예시
    - `h1`만 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김
      ```
      `<h1></h1>`
      ```
    - `h1+p`를 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김
      ```
      <h1></h1>
      <p></p>
      ```
    - `h1*3`을 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김
      ```
      <h1></h1>
      <h1></h1>
      <h1></h1>
      ```
    - `h$*6`을 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김
      ```
      <h1></h1>
      <h2></h2>
      <h3></h3>
      <h4></h4>
      <h5></h5>
      <h6></h6>
      ```
    - `h${hello world}*6`을 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김
      ```
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <h4>hello world</h4>
      <h5>hello world</h5>
      <h6>hello world</h6>
      ```
    - `p`를 치고 enter를 눌러 `<p></p>` 구조를 만든 뒤, `<p>` 태그 안에서 `l`을 눌러 위로 한 칸만 이동하면 `lorem` 선택 가능
      ```
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam expedita quasi quos ab tenetur omnis temporibus error consequuntur animi, vero natus aliquid perferendis minima pariatur autem, recusandae delectus assumenda!
      </p>
      ```
    - `dl>dt+dd`를 치고 enter를 누르면 자동으로 아래와 같은 구조가 생김 (definition list 안의 definition term, definition description)
      ```
      <dl>
          <dt></dt>
          <dd></dd>
      </dl>
      ```
      - `<dl>` 태그는 용어(term)와 그에 대한 설명(description)을 리스트 형식으로 정의할 때 사용한다.
      - `<dl>` 요소는 용어(term)나 이름(name)을 나타내는 `<dt>` 요소와 해당 용어에 대한 설명을 나타내는 `<dd>` 요소로 구성된다.
        - `<dl>` 태그는 `key:value` 쌍 표현에 유용하다.
          ```
          <dl>
              <dt>호박</dt>
              <dd>- 박과의 한해살이 덩굴성 채소</dd>
              <dt>상추</dt>
              <dd>- 국화과의 한해살이 또는 두해살이풀</dd>
          </dl>
          ```
  - 자세한 것은 아래 경로 참고
    - [tutorialproject/Tutorial_HTML/1강/emmet 사용법.html](https://github.com/Esantomi/web-dev/blob/main/paullab/tutorialproject/Tutorial_HTML/1%EA%B0%95/emmet%20%EC%82%AC%EC%9A%A9%EB%B2%95.html) 
      - [emmet cheat-sheet](https://docs.emmet.io/cheat-sheet/)
    - [깃허브 블로그 : Emmet 사용법](https://nachwon.github.io/How_to_use_emmet/)

### 
