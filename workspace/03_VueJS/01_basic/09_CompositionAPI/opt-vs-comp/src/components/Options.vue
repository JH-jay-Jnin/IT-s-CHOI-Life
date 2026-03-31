<template>
  <div>
    <h3>Options API 적용</h3>
    <div>
      이름 :
      <input
        type="text"
        placeholder="입력 시 대문자로 변환"
        :value="name"
        @input="changeName($event.target.value)"
      />
    </div>

    <!-- 5번/  @input="changeName()" 이게 6번 / :value="name"이 7번 : 
     즉 내가 입력한 6번을 7번의 event.target 객체를 통해서
      methods를 작성해서 console에 출력한다.
      10번이 .value 붙이기 -->
    <hr />
    <!-- 16번. 아래 </p> 까지 작성하기-->
    <h5>계산하기</h5>
    <div>
      X: <input type="text" v-model.number="x" /><br />
      <!-- 17번 내가 입력한 값이 화면에서도 보이고 바뀐다 => V-model에 
           data에 있는 x라는 애랑 바인딩하겠다. 즉 data에 작성하러가자-->
      Y: <input type="text" v-model.number="y" /><br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>
      <!-- 27번 x랑 y를 넘길때 1을 줄게-->
      <!-- 19번 클릭을 하면 x+y가 실행될 수 있도록 @click 구현-->

      <p>X + Y = 더한 값 : {{ sum }}</p>
      <!-- 22번 sum으로 바꾸기-->
    </div>

    <!-- 24번 위의 내용을 그대로 복사해서 A와 B로 다시 실습해보자. => 완료함-->
    <div>
      A: <input type="text" v-model.number="a" /><br />
      B: <input type="text" v-model.number="b" /><br />
      <button @click="calculateSum(a, b, 2)">A + B</button>
      <!-- 25번 같은 함수로 지정했을 때, 언제는 x + y 값, 언제는 a + b 값을 줄 수 있을까?-->
      <!-- 28번 a랑 b를 넘길때 2를 줄게-->
      <p>A + B = 더한 값 : {{ sumAB }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',

  data() {
    return {
      name: '',
      // 14번에 대한 해결책 => data에 담아야 한다.
      // 18번 v-model에서 적은 input 값에 대해 x랑 y를 선언한다
      x: 3,
      y: 5,
      a: 2,
      b: 4,
      sum: 0,
      sumAB: 0,
      // 21번 함수가 화면에서 기능하려면 이렇게 정의가 되어있어야한다.
    };
  },
  methods: {
    changeName(inputName) {
      // 11번. e 대신 inputName
      // console.log(e); -> 콘솔 확인 후 주석
      // 문자열.toUpperCase() : 대문자로 변환
      // console.log(inputName.toUpperCase()); //13번 => 화면에서는 대문자로 잘 나오는데, 왜 devtools에는?
      this.name = inputName.toUpperCase();
      // 12번 / 15번 OptionsAPI 방식에선 this.name을 쓰기
    },
    // 20번 calculatesum 이라는 함수를 만들어야지 19번의 문제를 해결할 수 있다.
    // 화면에 보이는 것들은 data에서 정의하는 것이다. 따라서, data안에다가 변수를 만들어야한다.
    // 계산용 메소드
    // 29번 메소드 변경
    calculateSum(num1, num2, type) {
      console.log(type);
      console.log(x);
      console.log(y);
      // 26번 if 문 만들기 ==> 그렇다면 인자로 넘겨줘서 x, y, a, b를 구분할 수 있게
      if (type === 1) {
        // 30번 if에서 구분하기 위한 type을 지정해줌
        // x + y 버튼 클릭시
        this.sum = num1 + num2; // 23번 sum에 대한 함수 정의 // 31번 this.sum 메소드 고치기
      } else {
        // a + b 버튼 클릭시
        this.sumAB = num1 + num2; //32번 this.sumAB 메솓 고치기
      }
    },
    // calculateSumAB(a, b) {
    //   console.log(a);
    //   console.log(b);
    //   this.sumAB = a + b;
    // },
  },
};
</script>
<!-- name 작성이 6번 / name: 'Options'가  8번 / changeName이 9번 
    즉, $event.target은 이벤트가 발생한 요소이다.
 -->

<style scoped></style>
