// Vue Router 라이브러리에서 필요한 함수들을 가져옴
// createRouter : Vue 라우터 인스턴스를 생성하는 함수
// createWebHistory : HTML5 History API를 사용하여
//                    URL 경로를 관리하는 함수
// 위 규칙을 사용하여 경로를 관리하는 것이다. (일종의 자연스러운 Logic Flow)
import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 가져오기
// @ : src 폴더를 의미하는 별칭(alias)
// -> vite.config.js에 작성됨
import Home from '@/pages/Home.vue'; // '@'는 src 폴더를 의미하는 별칭 (절대경로) -> 상대경로로 작성해도 된다. (예: '../pages/About.vue')
import Members from '@/pages/Members.vue'; // import 부를 이름 from '파일 경로' (파일 경로는 상대경로 또는 절대경로 모두 가능)
import MembersLeft from '@/components/members/MembersLeft.vue';
import MembersFooter from '@/components/members/MembersFooter.vue';
import MemberInfo from '@/pages/MemberInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes : URL 주소와 컴포넌트를 연결해놓은 설정 목록
  routes: [
    {
      path: '/', // 해당 URL일 때 ==> 보통의 일반 메인화면은 '/' 이다.
      component: Home, // 보여줄 컴포넌트 (위에서 import해왔던)
      name: 'Home', // 라우터를 이름으로 부르기 위한 옵션
    },

    {
      path: '/members', // 해당 URL일 때
      components: {
        default: Members,
        left: MembersLeft,
        footer: MembersFooter,
      }, // 보여줄 컴포넌트 => 기본적으로(default)는 Members를 보여주고, 좌측에 MembersLetf.vue를 한다.
      name: 'members', // 라우터를 이름으로 부르기 위한 옵션
    },

    // 동적 라우트 패턴
    // -> URL에 따라 값이 바뀌는 라우트
    // (\\d+) : 숫자만 허용 (정규표현식)
    {
      path: '/members/:id(\\d+)',
      component: MemberInfo,
      name: 'members/id',
    },
  ],
});

export default router;
