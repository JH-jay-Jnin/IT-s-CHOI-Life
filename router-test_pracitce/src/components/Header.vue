<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNalChi)</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass">
      <!-- :class="navClass" -> navClass 변수에 들어있는 값을 class 속성값으로 사용-->
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- router-link : 라우터 링크 태그 (HTML로 따지면 a태그 역할), to 속성 : 이동할 경로 설정 (ex_ to="/" -> 홈으로 이동)
           -->
          <router-link class="nav-link" to="/">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/members">멤버</router-link>
          <!--<router-link>router-link class="nav-link" to="/members">멤버</router-link> -->
          <router-link class="nav-link" :to="{ name: 'members' }"
            >멤버</router-link
          >
          <!-- 위에 처럼 코드를 치면 유지보수에 매우매우 용의하다 => index.js에서 path만 바꾸면 되기 때문이다.-->
          <!-- :to="{ name: 'members' }" 
           -> 라우터 namedmf 사용하여 경로 지정하기 
           경로가 바뀌어도 이름은 그대로이기 때문에 코드 수정 안해도 됨
          -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/videos">영상</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({ isNavShow: false }); // isNavShow가 true면 메뉴가 보이고, false면 메뉴가 숨겨진다.
    // == reactive : 반응형 상태를 만드는 함수 -> 객체 형태로 상태를 관리할 수 있다.

    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse',
    );

    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };
    return {
      state,
      changeIsNavShow,
      navClass,
    };
  },
};
</script>

<style></style>
