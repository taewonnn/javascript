      // Object Literal Syntax Extension

      var firstName = "Jhon";
      var lastName = "Doe";

      var person = {
        firstName: firstName,
        lastName: lastName
      };


      // object의 키를 동적으로 잡게 해주는 것..

      var type = "student";
      
      var score = {
        // student: "John"
        [type]: "John",
        score: 95,
      };
      console.log(score.student);  // John 
      

      var type2 = "grade"
      score[type2] = 1;
      console.log(score);
