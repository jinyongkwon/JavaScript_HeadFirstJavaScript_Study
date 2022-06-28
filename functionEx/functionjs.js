var num1 = 10; // 지역 변수
var num2 = 50;

function add(n1, n2) {
    text = "이것은 함수내에서 처음 사용했지만 변수 선언을 안했기 때문에 지역변수 입니다"
    console.log(n1 + n2);
}

console.log("변수를 인자로 받은 더하기 값");
add(num1, num2);
console.log("인자를 3개 받은 더하기 값");
add(13, 16, 20); // 마지막 인자는 무시됨
console.log("인자를 1개 받은 더하기 값");
add(13); // 나머지 인자는 undefined라서 결과로 NaN이뜸

sub(20);
console.log("num1의 값은 바꼇을까 : " + num1); // 값을 복사하기 때문에 num1은 바뀌지 않음
num1 = sub(num2);
console.log("변수와 전역변수가 동일할 때의 빼기 값 : "+num1);
num1 = sub(35);
console.log("제대로 된  빼기 값 : "+num1);

console.log(text);

function sub(num2) { // 함수를 뒤에선언해도 가능, 하지만 함수를 모아두는것이 좋다.
    var num1 = 50; // 전역변수, 지역변수 명과 같아서 전역변수가 지역변수를 가림
    num1 = num1 - num2
    return num1; // return값
}