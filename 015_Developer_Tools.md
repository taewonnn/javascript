      // Developer Tools

      // 개발자도구에서 확인 방법
      console.log("Hello world");
      console.info("Hello world");  // 정보
      console.warn("Hello world");  // 경고
      console.error("Hello world");  // 오류

      
      // table -> 배열을 테이블로 정렬해서 보여줌
      var userList = [
        {firstName:"재석", lastname:"유", email:"yu@gmail.com"},
        {firstName:"종국", lastname:"김", email:"kim@gmail.com"},
        {firstName:"세찬", lastname:"양", email:"yang@gmail.com"},
        {firstName:"석진", lastname:"지", email:"ji@gmail.com"}
      ]
      
      console.table(userList); // 배열을 테이블 형태로 보여줌


      // time - timeEnd  -> 코드가 실행되는 시간을 측정해줌
      // function a() {
      //   console.time();
      //   // code
      //   console.timeEnd();
      // }


      // (%c , 적용 스타일)  -> 콘솔에 스타일 적용
      console.log("This is %cstyle message", "color: yellow; background-color: blue;");
