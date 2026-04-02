<template>
  <div class="card card-body">
    <h2>Videos 영상리스트</h2>
    <ul class="list-group">
      <li v-for="v in videos" :key="v.id" class="list-group-item text-left">
        {{ v.title }}
        <!-- router-link태그는 router/index.js에 등록된 path로 호출시 (컴포넌트 변경) 사용
        :to = "path명" 또는 "name" 사용
        반드시 path, name은 index.js에 등록되어 있어야함.
        외부 사이트 연결은 일반적으로 a태그 사용, 내부 사이트 연결은 router-link태그 사용 
        -->
        <router-link :to="{ name: 'videos/id', params: { id: v.id } }">
          <span class="float-end badge bg-secondary">듣기</span>
        </router-link>
      </li>
    </ul>
    <!-- 중첩 되어서 들어갈 자리를 만들어 주어야 함.-->
    <router-view></router-view>
  </div>
</template>
// 직접 부트스트랩을 쓴다고 한 것은 아님. 따라서, main.js에서 import하러가자
(교안 참고)

<script>
import { inject } from 'vue';

export default {
  name: 'Videos',
  setup() {
    // App.vue에서 provide한 videos를 지정해서 가지고 와서 넣어주세요.
    // 주사하다. 주입하다.
    const videos = inject('videos');
    console.log(videos);

    return {
      videos,
    };
  },
};
</script>

<style scoped></style>
