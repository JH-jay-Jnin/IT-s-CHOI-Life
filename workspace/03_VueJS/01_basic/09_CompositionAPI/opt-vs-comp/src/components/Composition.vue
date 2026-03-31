<template>
  <div>
    <h3>Composition API 적용</h3>
    <div>
      이름 :
      <input
        type="text"
        placeholder="입력 시 대문자로 변환"
        :value="name"
        @input="changeName($event.target.value)"
      />
    </div>
    <hr />

    <h5>계산하기</h5>
    <div>
      X: <input type="text" v-model.number="x" /><br />
      Y: <input type="text" v-model.number="y" /><br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>

      <p>X + Y = 더한 값 : {{ sum1 }}</p>
    </div>

    <div>
      A: <input type="text" v-model.number="a" /><br />
      B: <input type="text" v-model.number="b" /><br />
      <button @click="calculateSumAB(a, b, 2)">A + B</button>
      <p>A + B = 더한 값 : {{ sum2 }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'; //34번 ref() 함수를 가져옴
// 35번 ref () : 컴포넌트의 데이터를 정의하는 함수
// 36번 -> data() 함수의 역할을 대신함
// 37번 - .value 프로퍼티(=속성)를 이용해서 데이터를 조작함
export default {
  name: 'Options',
  // 38번 setup () : 컴포넌트의 로직을 작성하는 함수
  // 39번 컴포넌트 생명주기 중에서 beforeCreate, created 사이에서 실행됨
  // 42번 즉, setup() 내부에서 this 사용 불가
  // => 생성되기 전에 실행되므로, this를 사용할 수 없다.
  setup() {
    // name 관련된 로지막 모아둠
    // 32번 전부 다 지우고 setup으로 새로시작
    const name = ref('');
    const changeName = (inputName) => {
      console.log('이름 변경 함수 실행');
      // 40번 변수 선언하듯이 똑같이 하면 된다.
      name.value = inputName.toUpperCase(); // 41번 this.name 대신에 name.value를 하면 된다.
    }; // (메소드에 작성하던것을 쓸 필요 없이 익명함수로 작성하는 간단함)
    // setup()에서 템플릿에 사용할 모든 변수와 함수는 꼭 반환해야 한다.
    return { name, changeName, ...useCalc() }; // 43번 반드시 return으로 반환해줘야 한다.
  }, //47번 ... (spread 문법) : useCalc()가 반환하는 객체를 펼쳐서 넣는다.
}; // 33번

// 계산과 관련된 로직만 모아둠 + 재사용 가능한 함수 형태로 작성 (교안에 없음) #44번
// 47번 export
export const useCalc = () => {
  const x = ref(3);
  const y = ref(5);
  const sum1 = ref(0); // ref가 data를 대신하는 것이다. 참고로 요새는 통일성 때문에 ref 사용을 권장한다고 한다.

  const a = ref(4);
  const b = ref(5);
  const sum2 = ref(0);

  // 45번
  const calculateSum = (num1, num2, type) => {
    if (type === 1) {
      sum1.value = num1 + num2;
    } else {
      sum2.value = num1 + num2;
    }
  };
  // 46번 반드시 반환해줘야한다
  return { x, y, sum1, a, b, sum2, calculateSum };
};
</script>

<style scoped></style>
