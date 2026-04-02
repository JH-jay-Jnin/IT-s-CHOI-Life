<template>
  <div class="container">
    <Header />
    <!-- RouterView 태그 : 라우터 화면 컴포넌트가 들어갈 자리 -->
    <router-view></router-view>
    <!-- 그냥 <RouterView />로 작성해도 된다.-->
  </div>
</template>

<
<script>
// 1. 라우터 설정이 적용된 컴포넌트를 가져온다. ( imoport 사용 )
import Header from '@/components/Header.vue'; // src라는 같은 폴더를 의미하는 별칭( alias ) 사용
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<!-- // setup을 사용하여 script 작성하기
<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
  setup() {
    // setup : 컴포넌트 로직을 작성하는 함수
    // 주의점 : 템플릿에서 사용할 데이터와 함수는 반환(return) 해야 한다!!
  },
};
</script> -->
<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
