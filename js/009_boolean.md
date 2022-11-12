      boolean

      // boolean

      var x = true;
      var y = new Boolean(true);

      console.log(x);  // boolean
      console.log(y);  // object
      console.log(x == y);  // true
      console.log(x === y);  // false  * 타입이 boolean과 object이기 때문에


      console.log(10 > 9);   //  true, boolean
      console.log(Boolean(10 > 9));  // true, object


      var x = 0;
      console.log(x);   // 0
      console.log(Boolean(x));  // false

      var x = 1;
      console.log(x);   // 1
      console.log(Boolean(x));  // true


      var x = "";
      console.log(x); 
      console.log(Boolean(x));   // false
