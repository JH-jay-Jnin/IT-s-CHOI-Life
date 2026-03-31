let obj = { result: 0 };

obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner(); /* JS에서 일반 함수의 this는 호출 방식에 따라 결정됨 
              inner() 함수는 단독으로 호출 되었기 때문에 그 안에 있는
              this는 전역 객체 (브라우저에서는 window, Node.js에서는 Global)를 가리킨다. */
};
obj.add(3, 4);

console.log(obj);
console.log(result);

// 함수는 { } 내에서만 결과의 영향을 받는다.
// 따라서, console.log(obj); 는 inner()가 일반 함수 호출이라서
// this가 obj를 가리키지 못해 가장 맨처음에 선언했던 let obj = { result: 0 }; 0 그대로 나오고,
// console.log(result); 는 this.reuslt = x + y; 의 영향을 받아 7이라는 결과가 나온다.
