      JSON

      // json(JavaScript Object Notation) -> 데이터를 저장하고 전송하기 위한 데이터 포멧
      // 서버로부터 웹페이지로 데이터를 전송할 때 / 웹페이지에서 서버로 데이터를 전송할 때 자주 사용
      
      // json 포멧
      var data = {
        "employees" : [
          {"firstName": "John", "lastName": "fdsfs"},
          {"firstName": "abc", "lastName": "ZZZ"},
          {"firstName": "John", "lastName": "fdsfs"}
        ]
      }

      // jSON.stringify -> 배열을 문자열로 바꿔줌
      console.log(data);
      // employees : (3) [{…}, {…}, {…}]

      console.log(JSON.stringify(data));
      // {"employees":[{"firstName":"John","lastName":"fdsfs"},{"firstName":"abc","lastName":"ZZZ"},{"firstName":"John","lastName":"fdsfs"}]}


      // JSON.parse -> 문자열을 object로 만들어줌

      var txt = '{ "employees" : [' +
      '{"firstName":"John", "lastName":"Doe"},' +
      '{"firstName":"Anna", "lastName":"Smith"},' +
      '{"firstName":"Peter", "lastName":"Jones"} ]}';
      // '{ "employees" : [{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"} ]}'

      console.log(JSON.parse(txt));
      //employees : (3) [{…}, {…}, {…}]
