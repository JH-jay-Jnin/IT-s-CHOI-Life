<!-- props 속성 사용 (객체 전달) 
  - props 목적 : 자식 컴포넌트가 필요한 데이터를 전달 받아
                 UI 렌더링 하는 것 
-->

<template lang="">
  <li><input type="checkbox" :checked="checked" />{{ id }} - {{ name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem', // 컴포넌트 이름 정해주기
  // props: ['name', 'checked', 'id'],

  // 부모 -> 자식으로 넘어오는 데이터 규칙 정의
  // 유효하지 않은 경우 콘솔에 경고
  props: {
    id: [Number, String], // 타입(숫자, 문자열)만 정의
    name: String, // 문자열만 들어올 수 있도록 정의
    checked: {
      // 타입 + 옵션 정의
      type: Boolean,
      default: false,
      required: false, // 필수 일 때는 true, 아닐 때(옵션 일 때)는 false를 쓴다.
    }, // 설정까지 포함 할 때는 중괄호를 쓴다.
  },
};
</script>
