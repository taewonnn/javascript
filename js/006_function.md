      function

      // function  -> 특정 기능을 수행하도록 작성된 코드 블록
      // function name(){
      //  코드
      //}

      // name();  -> 함수 호출 방법

      
      function calculateTax(profit){
        var vat = 0.1;
        var tax = profit * 0.1;
        // console.log(tax);
        
        return tax;
      }

      // profit = 10 일 때, 
      var tax = calculateTax(10);
      console.log(tax);

      function calculator(x1, x2, operator) {
        if(operator == "+"){
          return x1 + x2;
        }else if(operator == "-"){
          return x1 - x2;
        }
      }

      var plus = calculator(5, 7, "+")
      console.log(plus);

      var minus = calculator(5, 7, "-")
      console.log(minus);
