<template>
  <div class="container">
    <Header />

    <!-- RouterView 태그 : 라우터 화면 컴포넌트가 들어갈 자리 -->
    <!-- <RouterView></RouterView> -->
    <div class="card card-body border-0 pl-3 pr-3 pt-0">
      <div class="row">
        <div class="col-md-3 border">
          <!-- 사이드 메뉴 영역 : 자주 쓰이는 것들은 comonent로 분리해서 관리. 멤버랑 관련된 사이드 메뉴만 사용-->
          <!-- named view : 이름이 맞는 RouterView 위치에 컴포넌트 넣기 -->
          <RouterView name="left"></RouterView>
        </div>
        <div class="col-md-9 border">
          <!-- 메인 화면 -->
          <!-- name이 없는 경우 default-->
          <RouterView></RouterView>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 border">
          <!-- footer 영역 : 사이드메뉴와 마찬가지로 멤버랑 관련된 footer만 사용-->
          <RouterView name="footer"></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script setup>
import Header from '@/components/Header.vue';
</script> -->

<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
  setup() {
    // setup : 컴포넌트 로직을 작성하는 함수
    // 템플릿에서 사용할 데이터와 함수는 반환(return)해야 한다!!
  },
};
</script>
<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
