// 수업 자료 ( Summary )
// 8. 새로운 객체 리터럴 ( ES6 객체 리터럴 )
// 8.1 ES6 객체 리터럴 속성 정의 방법

let name = '홍길동';
let age = 20;
let email = 'gdhong@test.com';
// 기존 문법 : let obj = { "name" : name, "age" : age, "email" : email } ;
let obj = { name, age, email }; // ES6 객체 리터럴 정의에서는 속성명과 변수명이 같으면 한 번만 써도 된다! ( 축약 문법이 생김 )
console.log(obj);
