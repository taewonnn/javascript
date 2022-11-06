// 조건문 Conditional Statement

// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

let day = 10; // 0:월요일, 1: 화요일... 6: 일요일
let dayName;

// if 사용할 시 ...
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}

// Switch 사용 시 간편하게
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(dayName);



let condition = 'bad'; // okay, good  -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
    // else 와 비슷하게 해당하는게 없을 경우 디폴트 값으로 실행해라!
    default :
    console.log('해당하는 요일이 없음')
}
console.log(text);
