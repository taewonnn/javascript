      window

      // window
      console.log(window); // window

      // window 내장 함수

      // window.alert -> 버튼 클릭 시 알림창 노출(단방향 메시지)
      alert("이것은 alert 창 입니다.");


      // window.confirm -> 버튼 클릭 시 선택(취소/확인)창 노출
      confirm("정말 삭제하시겠습니까?");
      // 확인 -> true , 취소 -> false

      // ex) 실제 사용 예시
      if(confirm("정말 삭제하시겠습니까?")) {
        console.log("삭제 실행");
      }


      // window.prompt -> input 박스로 값을 입력받을 수 있게 노출
      prompt("비밀번호를 입력하세요");
      
      // ex) 실제 사용 시
      vat txt = prompt("비밀번호를 입력하세요");
      
      if(txt = null) {

      }else if(txt ==""){

      } else if(txt != ""){
        console.log(txt);
      }


      // window.open()  -> 링크 연결
      window.open("https://naver.com");


      // window.print(); -> 인쇄 창


      // setTimeout() -> (함수, 시간(초)) 정해진 시간 이후 함수를 한 번 실행해줌
      setTimeout(function(){
        console.log("5초 후 프로그램 실행")
      }, 5000)


      // setInterval() -> (함수, 시간(초)) 정해진 시간 마다 함수를 계속 실행해줌
      setInterval(function(){
        console.log("3초마다 프로그램 실행")
      }, 3000);


      // clearInterval()  -> setInterval 종료 지정해줌
      var i = 0;
      var fnc = setInterval(function(){
        console.log("3초마다 프로그램 실행 - " + i);
        if(i == 3) {
          clearInterval(fnc);
        }
        i++;
      }, 3000);
