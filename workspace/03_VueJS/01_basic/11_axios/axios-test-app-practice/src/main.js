import './assets/main.css';

import { createApp } from 'vue';
// import App from './App.vue' // 프록시 서버
// import App from './App1.vue' //  Promise
// import App from './App2.vue'; // async await
// import App from './App3.vue'; // for 반복문 활용
// import App from './App4.vue'; // 데이터 추가
// import App from './App5.vue'; // 에러 내용 찾기

import App from './App6.vue';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
