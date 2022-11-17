// 정규표현식

// includes -> 'abc' 여기에 'a'가 있는지 확인
'abc'.includes('a')

// a로 끝나냐, 숫자가 1회 출현하냐, 영어가 들어 있냐? 등등은 제한되어 정규식을 사용함!


// 정규식 - 문자를 검사할 수 있는 식
// /검사하고싶은 문자/.test('검사당할 문자')

// ex
/a/.test('abcde') // true

// [a-z] -> a부터 z 중 아무 글자 1개
/[a-zA-z]/.test('abcde')

/[ㄱ-ㅎ가-힣]/.test('안녕')

/[0-9]/.test('156165')

\S -> 아무 글자 하나
/\S/.test('zzzz')

^a  -> a로 시작하냐?
/^a/.test('abfdfd')

a$  -> a로 끝나냐?
/a$/.test('fdfsa')

a|b -> a또는 b 있냐?
/a|b/.test('cdscb')