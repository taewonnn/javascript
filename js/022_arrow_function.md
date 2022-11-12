      // Arrow Function

      // 일반적인 function 정의
      function hello() {
        console.log("Hello World");
        return "Hello World";
      }

      var hello2 = function() {
        return "Hello World";
      }

      // Arrow Function
      var hello3 = () => "Hello World";

      var hello4 = (firstname, lastname) => "Hello" + " " + firstname + " " + lastname;
      console.log(hello4("John", "Doe"))  //  Hello John Doe
