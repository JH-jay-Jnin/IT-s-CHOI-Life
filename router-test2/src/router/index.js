import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
// 컴포넌트가 있는 것만 import 가능, 없는 것을 지정하면 실행 에러!!!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 요청주소 경로(path) 하나 당, 컴포넌트 하나 설정, {path: '경로', component: 랜더링할 컴포넌트 이름}
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'), // 위에다 component를 안쓰고 익명함수를 이용해서 import를 지정할 수 있다.
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/members/:id', //
      name: 'members/id',
      component: MemberInfo, // 여기 먼저 쓰고 import 쓰러가면 이미 알아서 다 만들어져 있음 == Members.vue가 만들어져있고 확장팩이 있기 때문
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
  ],
});

export default router;
