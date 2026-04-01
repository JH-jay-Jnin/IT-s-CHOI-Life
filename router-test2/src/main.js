// import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 현재 위치에 있는 router를 지정하면 무조건 현재 파일 내에 있는 index.js를 import함

const app = createApp(App);

app.use(router); // router를 쓰겠다고 반드시 지정.

app.mount('#app');

// 근데 어차피 코드 자동생성되서 체크만 잘 하자
