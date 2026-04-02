<template>
  <div class="modal">
    <div class="box">
      <div class="heading">
        // box 안에 제목을 넣는 div를 추가로 생성
        {{ videoInfo.video.title }} - {{ videoInfo.video.category }}
        <h2>Video Player</h2>
      </div>
      <div class="player">
        <YoutubeVue3
          :videoid="videoInfo.video.id"
          :autoplay="1"
          :controls="1"
        ></YoutubeVue3>
      </div>
    </div>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'; // 전달 받은 id 가져오기
import { reactive, ref, inject } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
export default {
  name: 'VideoPlayer',
  components: { YoutubeVue3 },
  setup() {
    // 위에 제목을 전달받은 id로 검색한 다음 제목 부분에 출력해줄 목적임.
    const videos = inject('videos'); // App.vue에서 provide한 videos를 지정해서 가지고 와서 넣는다.

    // 전달받은 id 받을 목적임
    const currentRoute = useRoute(); // 현재 라우터 정보 가져오기

    // 이전, 이후 버튼 눌렀을 때 해당하는 id로 다시 VideoPlayer 컴포넌트를 다시 라우팅하기 위함.
    // 이때 주소는 router/index.js에 있어야함.
    // router-link태그와 같은 역할, js에서 라우팅을 하는 경우는 useRouter()를 이용해서 router객체를 사용해서 라우터 정보를 가져옴.
    const router = useRouter(); // 라우터 정보 가져오기

    // 전달받은 파라메터인 id를 가지고 해당 video를 찾기. ( 해당하는 id의 제목을 가져와서 출력하기 위한 변수 )
    let videoInfo = reactive({
      video: videos.find((v) => v.id === currentRoute.params.id),
    }); // videoInfo는 객체이므로 reactive로 감싸준다.

    console.log(videoInfo.video);

    return { videoInfo };
  },
};
</script>

<style scoped>
/* (29) 모달 배경 */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* (30) 박스 */
.box {
  background-color: white;
  margin: 80px auto;
  max-width: 500px;
  min-height: 350px;
  padding: 10px;
}

/* (31) 헤더 */
.box .heading {
  background: #33a17f;
  color: white;
  padding: 10px;
}

/* (32) 클릭 커서 */
.pointer {
  cursor: pointer;
}
</style>
