import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';
// router import
import router from './router';

const app = createApp(App);

// 라우터 인스턴스를 애플리케이션에 등록
app.use(router);

app.mount('#app');
