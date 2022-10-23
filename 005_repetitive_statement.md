      repetitive statement

      // 반복문 -> 조건이 만족하는 동안 계속 실행해라
      // for(조건){
      //   코드
      // }

      for(var i = 0; i < 5; i++){
        console.log("The number is " + i);
      }

      console.log("--------------")
      for(var i = 0; i < 5; i++){
        if(i == 3){
          break;
        }
        console.log("The number is " + i);
      }

      console.log("---------------");

      var numbers = [43, 23, 5, 7];
      var len = numbers.length;

      for(var i = 0; i < len; i++ ){
        console.log(numbers[i]);
      }


      console.log("---------------");
      // for -in
      var numbers = [43, 23, 5, 7];

      for(var idx in numbers) {
        console.log(numbers[idx]);
      }

      console.log("---------------");
      var person = {
        firstName: "John",
        lastName: "Doe",
        age : 37
      };

      for(var X in person) {
        console.log(person[X]);
      }

      
      console.log("---------------");
      // for -of
      var cars = ["Hyundai", "KIA", "Volvo"];

      for(var car of cars) {
        console.log(car);
      }


      console.log("---------------");
      // while(조건){}
      var i = 1;
      var total = 0;

      while(i <= 10) {
        total = total + i;
        i++;
      }
      console.log(total);

      // do - while   -> 조건 확인 전에 무조건 한 번은 실행함
      var i = 11;
      var total = 0;
      do {
        total = total + i;
        i++;
      }while(i <= 10);
      console.log(total);









      

      




    </script>
</body>
</html>