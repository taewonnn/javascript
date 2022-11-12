      array

      // array

      // toString()  -> 배열 안에 모든 문자를 , 기준으로 하나의 문자로 만들어줌
      var fruits = ["Banana", "Orange", "Apple"];
      console.log(fruits.toString());  // Banana,Orange,Apple


      // join()  -> ()안에 입력값을 넣어 하나로 만들어줌
      var fruits = ["Banana", "Orange", "Apple"];
      console.log(fruits.join(" * "));  // Banana * Orange * Apple

      // 실무에서 사용하는 예시 간단하게 아래와 같은 형식으로 표현

      // 아래와 같이하면 귀찮음
      // var txt2 = "Banana<br>";
      // txt2 += "Orange<br>";
      // txt2 += "Apple<br>";
      // document.getElementById("div1").innerHTML = txt2;
      
      // join활용하여 간단하게
      var arr = [];
      arr.push("Banana");
      arr.push("Orange");
      arr.push("Apple")

      document.getElementById("div1").innerHTML = arr.join("-");


      // pop()  -> 배열의 마지막 요소를 제거, pop()하면 제거된 요소를 리턴 함
      var fruits = ["Banana", "Orange", "Apple"];
      var str = fruits.pop();
      console.log(str);   // Apple
      console.log(fruits);  // ["Banana", "Orange"]   Apple은 pop으로 인해 제거됬음


      // push()  -> 배열의 마지막에 새로운 요소를 추가
      var fruits = ["Banana", "Orange", "Apple"];
      fruits.push("kiwi");
      console.log(fruits)   // ['Banana', 'Orange', 'Apple', 'kiwi']


      // shift()  -> 배열의 첫 번째 요소를 제거, shift()하면 제거된 요소를 리턴함
      var fruits = ["Banana", "Orange", "Apple"];
      var str = fruits.shift();
      console.log(fruits);   // ['Orange', 'Apple']


      // unshift()  -> 배열의 첫 번째에 새로운 요소를 추가
      var fruits = ["Banana", "Orange", "Apple"];
      fruits.unshift("Lemon");
      console.log(fruits);  // ['Lemon', 'Banana', 'Orange', 'Apple']

      // 배열 index로 값 변경하기
      fruits[0] = "Banana";
      console.log(fruits)  // ['Banana', 'Banana', 'Orange', 'Apple']

      fruits[fruits.length -1] = "Lemon";
      console.log(fruits);  // ['Banana', 'Banana', 'Orange', 'Lemon']


      // splice() -> splice(시작위치, 시작위치로부터 삭제할 요소의 수, 추가할 요소), 배열 중간에 삭제 / 추가할 때
      var fruits = ["Banana", "Orange", "Apple"];
      fruits.splice(1,0,"Lemon","Kiwi");
      console.log(fruits);  // ['Banana', 'Lemon', 'Kiwi', 'Orange', 'Apple']


      // concat()  -> 2개의 배열을 합쳐줌
      var myBoys = ["Eunhyeok"];
      var myGirls = ["Eunseo", "Eunsol"]
      var mychild = myBoys.concat(myGirls);
      console.log(mychild);  // ['Eunhyeok', 'Eunseo', 'Eunsol']

      
      // slice() -> slice(시작점, 끝점) , 선택한 것만 잘라서 가져온다!
      var fruits = ['Banana', 'Lemon', 'Kiwi', 'Orange', 'Apple']
      var fruits2 = fruits.slice(1, 3);
      console.log(fruits2)  // ['Lemon', 'Kiwi']


      // sort()  -> 배열을 오름차순 / 알파벳순으로 정렬해준다

      // 문자
      var fruits = ['Banana', 'Lemon', 'Kiwi', 'Orange', 'Apple'];
      console.log(fruits.sort());  // ['Apple', 'Banana', 'Kiwi', 'Lemon', 'Orange']

      // 숫자
      var points = [40, 100, 70, 21, 99];
      console.log(points.sort());  //  [100, 21, 40, 70, 99]

      // 숫자 제대로 정렬하기 - 방법1
      points.sort(function(a, b) {
        if(a > b) {
          return 1;
        } else if(a < b){
          return -1;
        } else {
          return 0;
        }
      });
        // [21, 40, 70, 99, 100]

      // 숫자 제대로 정렬하기 - 방법2
      points.sort(function(a, b) {
        return a-b;
        });
        // [21, 40, 70, 99, 100]


      // 배열 안에 object일 때, points 순으로 정렬하기
      var persons = [
        {name : "유재석", points: 78},
        {name : "김종국", points: 92},
        {name : "양세찬", points: 76},
        {name : "하하", points: 81}
      ]
      
      // 방법1
      persons.sort(function(a, b){
        if(a.points > b.points) {
          return 1;
        } else if(a.points < b.points) {
          return -1;
        } else {
          return 0;
        }
      });
      // 0: {name: '양세찬', points: 76}
      // 1: {name: '유재석', points: 78}
      // 2: {name: '하하', points: 81}
      // 3: {name: '김종국', points: 92}

      // 방법2 - 삼항연산자
      persons.sort(function(a, b){
        return a.points > b.points ? 1 : a.points < b.points ? -1 : 0;
      });
      // 0: {name: '양세찬', points: 76}
      // 1: {name: '유재석', points: 78}
      // 2: {name: '하하', points: 81}
      // 3: {name: '김종국', points: 92}



      // reverse()  -> 배열 안에 요소들 순서 반대로 뒤집기
      var scores = [100, 99, 70, 40, 21];
      console.log(scores.reverse());  // [21, 40, 70, 99, 100]


      // filter()  -> 조건에 맞는 배열만 리턴해줌
      var persons = [
        {name : "유재석", points: 78, city : "서울"},
        {name : "김종국", points: 92, city : "서울"},
        {name : "양세찬", points: 76, city : "제주"},
        {name : "하하", points: 81, city : "서울"}
      ]

      var pass = persons.filter(function(person) {
        return person.points > 80;
      })
      console.log(pass)
      // 0: {name: '김종국', points: 92}
      // 1: {name: '하하', points: 81}


      // 제주에 사는 사람 filter
      var jeju = persons.filter(function(person) {
        return person.city === "제주"
      }); 
      console.log(jeju);  //  {name: '양세찬', points: 76, city: '제주'}


      // reduce()   ->  확인 필요
      // accumulator - 누산기(계속 값이 누적됨)
      // currentValue - 배열을 읽으면서 현재값
      // 현재 읽고 있는 배열의 인덱스값  * 안써도 됨

      var arr1 = [1, 2, 3, 4];
      
      // for of문 활용하여 total값 구하기
      var total = 0;
      for(var x of arr1) {
        total += x;
      };  // 10

      // reduce 활용
      var total = arr1.reduce(function(a,c) {
        return a + c;
      })
      console.log(total);  // 10



      // map 
      var userlist = [
        {firstName: "재석",lastName: "유", email: "yu@gmail.com"},
        {firstName: "종국",lastName: "김", email: "kim@gmail.com"},
        {firstName: "세찬",lastName: "양", email: "yang@gmail.com"},
        {firstName: "석진",lastName: "지", email: "ji@gmail.com"}
      ]

      // fullname(last + first) 추가된 배열 map을 통해 만들기
      var userlist2 = userlist.map(function(user){
        return {fullname:user.lastName + user.firstName, firstName:user.firstName, lastName:user.lastName , email:user.email}
      })
      console.log(userlist2);
      // 0: {fullname: '유재석', firstName: '재석', lastName: '유', email: 'yu@gmail.com'}
      // 1: {fullname: '김종국', firstName: '종국', lastName: '김', email: 'kim@gmail.com'}
      // 2: {fullname: '양세찬', firstName: '세찬', lastName: '양', email: 'yang@gmail.com'}
      // 3: {fullname: '지석진', firstName: '석진', lastName: '지', email: 'ji@gmail.com'}
