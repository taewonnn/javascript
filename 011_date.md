      date
      
      
      var d = new Date();  // 현재 날짜와 시간을 알려줌
      console.log(d);  // Thu Oct 13 2022 19:57:57 GMT+0900 (한국 표준시)

      // month -> 월자는 0부터 시작해서 +1이 됨
      // day -> 일자는 정상적으로 
      var d = new Date(2022, 10, 13, 20, 00, 10);
      console.log(d);  // Sun Nov 13 2022 20:00:10 GMT+0900 (한국 표준시)

      // 년도
      var d = new Date();
      var year = d.getFullYear();
      console.log(year);  // 2022

      // 월
      var d = new Date();
      var month = d.getMonth();
      console.log(month)  // 9 -> 10월이 나와야 하지만 월은 0부터 시작이기에 -1이됨

      // 일
      var d = new Date();
      var date = d.getDate()
      console.log(day); // 13

      // 요일
      var d = new Date();
      var day = d.getDay()
      console.log(day); // 4 -> 목요일이니 4
      // 일요일 - 0 , 월요일 - 1, 화요일 - 2, 수요일 - 3

      // 시간
      var d = new Date();
      var hour = d.getHours();
      console.log(hour);  // 21

      // 분
      var d = new Date();
      var minute = d.getMinutes();
      console.log(minute);  // 4

      // 초
      var d = new Date();
      var second = d.getSeconds();
      console.log(second);  // 31


      // 타임존 -> 해외 이용자의 경우 해당 시간에 맞춰서 노출시켜야할 경우
      
      // 한국
      // 2021. 03. 30 12:23:33

      //해외
      // 2021. 03. 30 03:23:33

      // 시차 확인
      console.log(d.getTimezoneOffset());  // -540(분 단위) -> -9시간

      // 날짜 포맷 관련 오픈소스 사이트
      // https://momentjs.com/
      
      // ex) 
      // console.log(moment().format("MMM DD, YYY"))
