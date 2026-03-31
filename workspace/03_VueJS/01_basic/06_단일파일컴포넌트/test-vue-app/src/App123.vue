<!-- 반드시 template에서는 요소 하나만 반환한다. 즉, 여러 개를 넣게 되면 문제가 생기니, 큰 거에 (div같은거) 감싸서 넣는다.-->
<template>
  <div>
    <ul>
      <CheckboxItem3
        v-for="idol in idols"
        :key="idol.id"
        :idol="idol"
        :name="idol.name"
        :checked="idol.checked"
        :id="idol.id"
      />
    </ul>
    <h2>App 데이터 : 홍길동</h2>
  </div>
</template>

<script>
import CheckboxItem3 from './Components/CheckboxItem3.vue';

export default {
  // 내보내는 컴포넌트의 이름
  // App.vue는 루트 컴포넌트! -> 이름 미지정 시 <Root> 태그로 렌더링
  name: 'App',

  // 지역 컴포넌트 등록
  components: { CheckboxItem3 },
  data() {
    return {
      // props로 전달할 부모 데이터
      idols: [
        { id: 1, name: 'NewJeans', checked: true },
        { id: 2, name: 'Fromis_9', checked: false },
        { id: 3, name: 'NMIX', checked: false },
        { id: 4, name: 'aespa', checked: false },
      ],
    };
  },
};
</script>
