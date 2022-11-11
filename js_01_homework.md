# 01_JS_homework

## :star2: JavaScript 기초

### :ribbon:1. 아래의 설명을 읽고 T/F 여부를 작성하시오.
- document.createElement 메서드를 통해 HTML 요소를 생성할 수 있다. 
  - T :  eg.  `li = document.createElement('li')`
- EventTarget.addEventListener(type, listener)에서 listener에 작성되는 콜백 함수의 첫번째 매개변수는 발생한 이벤트를 설명하는 Event에 기반한 객체이다. T
  - The callback function itself has the same parameters and return value as the `handleEvent()` method; that is, the callback accepts a single parameter: an object based on [`Event`]describing the event that has occurred, and it returns nothing.
    - the callback accepts a single parameter: an object based on [`Event`]
- event.preventDefault 메서드를 통해 이벤트 동작을 취소할 수 있다.
  - T: 이벤트 자체(클릭 등)는 실행되지만 기본 동작(데이터 전송, 링크이동 등)을 중단한다.
- 부모 노드에서 자식 노드를 추가하는 유일한 방법은 append 메서드 뿐이다.
  - F : `.appendChild()` 메서드가 있다.



### :ribbon: 2. DOM Event에는 다양한 종류의 Event가 존재한다.
아래 제시된 Event들이 각각 어떤 시점에 발생하는지 다음 MDN 문서를 참고하여 간단하게 작성하시오.

 (https://developer.mozilla.org/ko/docs/Web/Events)

- click : 누를때
- mouseover : 커서가  엘리먼트의 위로 이동했을 때.
- mouseout : 커서가 엘리먼트의 밖으로 이동했을 때.
- keydown : 키가 눌렸을때
- keyup: 키를 눌렀다 뗐을때
- load : 리소스와 그 의존 리소스의 로딩이 끝났을때
- scroll :스크롤 할때
- change : `<input>`, `<select>`, `<textarea>` 엘리먼트의 값이 사용자에 의해 바뀌었을때
- input : 요소의 값이나 내용이 변경되었을때



### :ribbon: 3. 다음은 버튼을 클릭했을 때, 콘솔창을 통해 메시지를 확인하는 코드이다. 
(a), (b), (c)에 들어갈 코드를 작성하시오.

(a) : `querySelector` 

(b) :` addEventListener`

(c) : `'click'`

