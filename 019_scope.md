      // scope

      // scope -> 변수에 대한 접근성을 의미
      
      // local scope
      function myFunction() {
        var carName = "Hyundai"
        console.log(carName)
      }
      // console.log(carName);  // ReferenceError  함수 안에서 정의되어 있으므로 함수 안에서만 접근이 가능함
      myFunction();  // Hyundai   -> 함수를 호출하였으니 안에 정의된 값을 가져올 수 있음


      // global scope
      var carName2 = "KIA";

      function myFunction2() {
        console.log(carName2);
      }
      myFunction2();  // KIA   -> 함수 밖에서 정의된 것은 함수 안에서 불러올 수 있음



      // 참고사항
      // 아래 myFunction3이 에러 나는 이유 : 
      // 보통 함수를 먼저해석해서 함수의 위치가 밑에 있어도 에러가 나지 않지만 아래와 같이 함수를 변수에 담았을 경우라 먼저 읽히지 않음
      // myFunction3();

      // var myFunction3 = function() {
      //   console.log(carName2);
      // }
