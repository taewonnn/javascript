      // Array Destructuring
      

      // 일반적으로 배열에서 특정 index 가져올 때 -> []사용
      function getScores() {
        return [70, 80, 90];
      }

      var scores = getScores();
      console.log(scores);  // [70, 80, 90]
      console.log(scores[2])  // 90


      // Array Destructuring
      var [x, y, z] = getScores();
      console.log(x);  // 70
      console.log(y);  // 80
      console.log(z);  // 90

      // 실제 사용예시
      function getLocation() {
        return [123.12, 23.023];
      }

      var [latitude, longitude] = getLocation();
      console.log(latitude);  // 123.12
      console.log(longitude);  // 23.023
