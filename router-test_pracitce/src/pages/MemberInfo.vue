<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <div>
      경로 패턴 : /members/:id<br />
      요청 경로 : {{}}<br />
      id값 : {{}} <br />
    </div>
  </div>

  <div className="mt-5">
    <img src="https://placehold.co/120x120" class="img" />
    <h4 class="mt-2">지민(메인보컬)</h4>
    <p>보컬, 댄스, 가수</p>
    <a class="fa fa-instagram m-1"></a>
    <a class="fa fa-facebook m-1"></a>
    <a class="fa fa-youtube m-1"></a>
    <br /><br />
    <div>멤버 목록으로</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'MemberInfo',
  setup() {
    // 동적 파라미터 id를 얻어 해당 멤버의 정보 찾기
    return {};
  },
};
</script>

<style scoped></style>
