<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNaiChi)</span>
    <button class="navbar-toggler" type="button" @click="changeNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="navClass">
      <!-- :class="navClass" -> navClass 변수에 들어있는 값을 class 속성값으로 사용 -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <router-link class="nav-link" to="/">홈</router-link> -->
          <router-link class="nav-link" :to="{ name: 'Home' }">홈</router-link>
          <!-- router-link : 라우터 링크 태그 (a태그 역할), to 속성에 이동할 경로 지정  -->
          <!-- <router-link class="nav-link" to="/members">멤버</router-link> -->
          <router-link class="nav-link" :to="{ name: 'members' }"
            >멤버</router-link
          >
          <!-- 위에 처럼 코드를 치면 유지보수에 매우매우 용의하다 => index.js에서 path만 바꾸면 되기 때문이다.-->
          <!-- :to="{ name: 'members' }" 
           -> 라우터 namedmf 사용하여 경로 지정하기 
           경로가 바뀌어도 이름은 그대로이기 때문에 코드 수정 안해도 됨
          -->
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false }); // isNavShow가 true면 메뉴가 보이고, false면 메뉴가 숨겨진다.
// == reactive : 반응형 상태를 만드는 함수 -> 객체 형태로 상태를 관리할 수 있다.

const navClass = computed(
  () =>
    state.isNavShow
      ? 'collapse navbar-collapse show' // true면 메뉴를 보여주는 클래스 적용
      : 'collapse navbar-collapse', // false면 메뉴를 숨기는 클래스 적용
);

const changeNav = () => {
  state.isNavShow = !state.isNavShow;
  // 버튼을 누를 때마다 상태를 반대로 뒤집습니다 (Toggle).
};
</script>

<style></style>
