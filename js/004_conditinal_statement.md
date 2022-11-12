      conditional statement

      // 조건문 if / switch

      // if
      // if(조건) {
      // 실행문
      // }

      var age = 19;
      if(age > 18) {
        console.log("당신은 성인입니다.");
      }

      // if else
      var age = 15;
      if(age > 18) {
        console.log("당신은 성인입니다.");
      }else {
        console.log("당신은 성인이 아닙니다.");
      }


      //if else if
      var hour = 24;
      if(hour < 10) {
        console.log("Good morning");
      }else if(hour < 18){
        console.log("Good afternoon");
      }else if(hour < 21) {
        console.log("Good evening");
      }else {
        console.log("Good night");
      }


      //switch

      var d = new Date();
      var day = d.getDay();
      console.log(day);
      var dayname = "";

      switch (day) {
        case 0:
          dayName = "일요일";
          break;
        case 1:
          dayName = "월요일";
          break;
        case 2:
          dayName = "화요일";
          break;
        case 3:
          dayName = "수요일";
          break;

        default:
          dayName = "";
          break;
      }
      console.log(dayName);
