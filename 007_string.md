      string

        
      // string 내장 함수

      var txt = "ABCDEFGHIJKLMN";
      
      // .length  ->   문자열의 길이 확인 
      console.log(txt.length);   // 14

      // indexOf  -> 가장 처음에 있는 원하는 값의 인덱스값을 확인
      var str = "Please locate where 'locate'";
      console.log(str.indexOf("locate"));   // 7
      console.log(str.indexOf("Jhon"));   //  john은 없으니 -1로 return


      // 문자 안에 있는지 없는지 확인하기 위해 -1을 활용!
      if(str.indexOf("Jhon") > -1){
          console.log("locate문자 발견");
      }


      // lastIndexOf
      console.log(str.lastIndexOf("locate"))  // 21  여러 개 중 마지막의 위치를 알려줌


      // search
      console.log(str.search("locate"));  //  7 , indexof와 동일

      //slice
      var str = "Apple, Banana, Kiwi";
      //slice(시작점, 끝점)
      console.log(str.slice(7, 13));   // Banana  * 13은 -1하여 a까지 가져옴
      //slice(시작점)
      console.log(str.slice(7));  // Banana, Kiwi  * 끝을 정해주지 않아 시작점 기준 모두 가져옴
      //slice(-,-)
      console.log(str.slice(-12, -6))   // Banana   * -는 끝에서 앞 순으로 계산
      //slice(-)
      console.log(str.slice(-4));   // Kiwi


      // substring
      var str = "Apple, Banana, Kiwi";
      // substring(시작점, 끝점)
      console.log(str.substring(7, 13));  // Banana    * slice와 동일


      //substr
      var birthday = "940325"
      //substr(시작점, 시작점으로부터 몇 개를 가져올 지)
      console.log(birthday.substr(0, 2));   // 94
      console.log(birthday.substr(2, 2));   // 03


      var birthday = "1994-03-25";
      console.log(birthday.substring(0,birthday.indexOf("-")));    // 1994


      //replace
      var str = "Please Visit here"
      var str2 = str.replace("here","there")
      console.log(str2);   // Please Visit there

      var str3 = "Please Visit here here here"
      var str4 = str3.replace("here","there")
      console.log(str4);  // Please Visit there here here


      var str5 = str3.replace(/here/g, "there");
      console.log(str5);  // Please Visist there there there
      

      // uppercase  -> 대문자로 바꾸기
      var str = "Please Visit here"
      console.log(str.toUpperCase());

      // lowercase -> 소문자로 바꾸기
      var str = "Please Visit here"
      console.log(str.toLowerCase());


      // concat -> 합치기
      var txt1 = "Hello";
      var txt2 = "world";
      var txt3 = txt1 + " " + txt2;
      console.log(txt3);   // Hello world
      
      var txt4 = txt1.concat(txt2);
      console.log(txt4);  // Helloworld

      var txt5 = txt1.concat(" ", txt2);
      console.log(txt5);  // Hello world

      
      // trim  -> 앞 뒤 공백 삭제
      var str = "     Hello world!      "
      console.log(str.trim());  // Hello wolrd
      

      // PadStart() -> PadStart(몇 개 , 무엇을 넣어줄지)
      var str = "5";
      console.log(str.padStart(4,0));   // 0005

      
      // padEnd() -> padEnd(몇개, 무엇을 넣어줄지)
      console.log(str.padEnd(4,0));  // 5000


      // charAt()   -> 몇 번 째 문자 한 개만 가져올 때
      var str = "Hello world"

      console.log(str.charAt(0));  // H

      
      // split()   -> () 기준으로 잘라서 나눠줌(배열로 나눠줌)
      var tags = "키보드, 기계식, 블루투스";
      var arr = tags.split(",");
      console.log(arr);  // [ 0: "키보드" , 1: "기계식", 2:"블루투스"]


      var birthday = "1994-03-25"
      var arr2 = birthday.split("-");
      console.log(arr2);   // [0: "1994", 1: "03", 2: "25" ]
