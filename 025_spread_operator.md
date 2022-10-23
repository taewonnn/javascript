      // Spread Operator

      // 분해 기능

      // concat
      var arr1 = [4, 5, 6];
      var arr2 = [1, 2, 3];

      var arr3 = arr2.concat(arr1)  // 두 개 배열 합쳐서 arr3에 넣기
      console.log(arr3);  // [1,2,3,4,5,6]

    
      // spread  -> ...
      var ar1 = [4, 5, 6];
      var ar2 = [1, 2, 3];

      var ar3 = [1, 2, ...ar1, 3,];
      console.log(ar3);  // [1, 2, 4, 5, 6, 3]

      var ar4 = [...ar2, ...ar1]
      console.log(ar4);  // [1, 2, 3, 4, 5, 6]

      // 문자열도 분해하여 배열로 들어가게 가능!!
      var cd = "CD"
      var alphabet = ['A', 'B', ...cd];
      console.log(alphabet);  // ['A', 'B', 'C', 'D']