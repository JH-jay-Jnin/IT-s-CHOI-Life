// 수업 자료 ( Summary )
// 8. 새로운 객체 리터럴 ( ES6 객체 리터럴 )
// 8.2 ES6 객체 리터럴 메서드 정의 방법
let p1 = {
  name: '아이패드',
  price: 200000,
  quantity: 2,
  order: function () {
    // 기존 방법은 : 과 function을 썼어야만 했다.
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    console.log('주문금액 : ' + this.amount);
  },
  discount(rate) {
    // ES6의 메서드 선언이 된 새로운 방식은 : 과 function을 생략 가능하다!
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity;
    }
    console.log(100 * rate + '% 할인된 금액으로 구매합니다.');
  },
};
p1.discount(0.2);
p1.order();
