      numbers

      // numbers

      
      // toString() -> 숫자를 문자로 변환해줌
      var x = 123;
      console.log(x.toString());   // 123


      // toFixed()  -> ()지정된 소수점 자리수까지 반올림으로 표기
      var x = 9.563243;
      console.log(x.toFixed(2));   // 9.56


      // toPrecision()   -> 정수까지 포함하여 ()자릿수로 반올림하여 표기
      var x = 9.565;
      console.log(x.toPrecision(2));  // 9.6


      // Number()   -> 숫자형태로 변경
      var x = Number("10");
      console.log(x);   // 숫자 10

      var x = Number(true);    // 1   true는 1로 변환이 됨
      var y = Number(false);   // 0  false는 0으로 변한됨

      console.log(Number("   10  "))  // 숫자 10  * 공백은 자동으로 예외 처리
      console.log(Numver("3.14"));   // 숫자 3.14
      console.log(Numver("10.33"));   // 숫자 10.33
      console.log(Number("10,33"));   // Nan    * Not a Number의 약자  ,있어서 숫자로 인식 X
      console.log(Number("10 33"));   // Nan    * 띄어쓰기가 있어서 숫자로 인식X

      
      // parseInt()   -> 문자열을 숫자로 변경(정수형으로 변환!!)
      console.log(parseInt("3"))   // 숫자 3으로 변환
      console.log(parseInt("5.14"))   // 숫자 5로 변환!!
      console.log(parseInt("10 33"));  // 숫자 10으로 변환!    * 뒤에 띄어쓰기와 33은 무시 앞에 10만 인식
      console.log(parseInt("12 years"));  // 숫자 12로 변환!    * 뒤에 문자는 무시
      console.log(parseInt("years 13"));  // NaN    * 맨 앞에 문자있어서 Nan

      
      // parseFloat()  -> 문자열을 숫자로 변경(소숫점까지 변환!)
      console.log(parseFloat("10"));  // 숫자 10
      console.log(parseFloat("13.9"));  // 숫자 13.9
      console.log(parseFloat("13.9aa"));  // 숫자 13.9
