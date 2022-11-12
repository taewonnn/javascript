      // rest parameter

      // 2개 더하는 함수
      function sum(x1, x2) {
        var y = x1 + x2;
        console.log(y);
        
        return y;
      }
      sum(5, 7);

      // 4개 더하는 함수
      function sum2(x1, x2, x3, x4) {
        var y = x1 + x2 + x3 + x4;
        console.log(y);
        
        return y;
      }
      sum2(5,7,3,9);  // 24


      // 파라미터에 몇 개가 들어오든 알아서 -> ...
      function sum3(...args) {
        var total = 0
        for(var x of args) {
          total += x;
        }
        console.log(total);
        return total;
      }

      sum3(3,2,5,7,4,23);  // 44
      sum3(2,4,5,23,234,42342,3242);  // 45852