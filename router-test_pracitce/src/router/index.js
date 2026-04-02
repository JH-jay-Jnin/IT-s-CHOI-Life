// 'Vue-Router' 라이브러리에서 필요한 함수들 (createRouter, createWebHistory)을 가져온다.
// createRouter : Vue 라우터 인스턴스를 생성하는 함수
// createWebHistory : HTML5 History API를 사용하여 라우터의 히스토리 모드를 설정하는 함수 = URL 경로를 관리하는 함수

// 위 규칙을 사용하여 경로를 관리하는 것이다. (일종의 자연스러운 Logic Flow)

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue'; // '@'는 src 폴더를 의미하는 별칭 (절대경로) -> 상대경로로 작성해도 된다. (예: '../pages/About.vue')
import Members from '@/pages/Members.vue'; // import 부를 이름 from '파일 경로' (파일 경로는 상대경로 또는 절대경로 모두 가능)
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';

// 페이지 컴포넌트 가져오기 -> import 한 컴포넌트들을 라우터 설정에 등록한다. (라우터 인스턴스 생성)
// @: src 폴더를 의미하는 별칭 (alias)
// -> vite.config.js 파일에서 설정한 별칭을 사용하여 컴포넌트를 가져올 수 있다.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes : URL 주소와 컴포넌트를 연결해 놓은 설정 목록
  routes: [
    {
      path: '/', // 해당 URL일 때, 라우터가 보여줄 컴포넌트 설정
      name: 'home', // 해당 라우터를 이름으로 부르기 위한 옵션 == 없어도 되지만, 있으면 편리
      component: Home, // Home 컴포넌트를 보여준다. ( 위 쪽에서 import 한 컴포넌트 )
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },

    // 동적 라우트 패턴
    {
      path: '/members/:id',
      name: '/member:id',
      component: MemberInfo,
    },
  ],
});

export default router;
