<template>
  <div class="card card-body">
    <h2>Members</h2>
    <p>요청 경로(fullPath) : {{ currentRoute.fullPath }}</p>
    <p>요청 경로(path) : {{ currentRoute.path }}</p>
    <!-- fullPath : 쿼리(?k=v)까지 포함된 전체 경로 -->
    <!-- path : 쿼리를 제외한 경로-->
  </div>

  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="member in members"
          :key="member.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <!-- 동적 라우트 : 라우트 경로에 변수를 포함시키는 방식 
              예) /members/1, /members/2, ... 
          -->

          <!-- <router-link :to="`/members/` + member.id"> -->\
          <!-- params :{ id: member.id } 
                -> index.js에 작성된 path의 변수명(:id)과 params의 키 값(id)이 일치해야 함 -->
          <!----><router-link
            :to="{ name: 'members/id', params: { id: member.id } }"
          >
            <!-- :을 안 쓰면, to="/members/1" -> 항상 1번 멤버의 정보로 이동 //
            그런데 우리 멤버별로 바뀌어야함./ :to="`/members/${member.id}`"->
            멤버마다 id가 바뀐다!-->

            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="member.photo"
            />
            <!-- :속성 = JS 표현식 넣기 -->
            <br />
            <h6 class="display-7">{{ member.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// members.json 파일에서 멤버 정보 가져오기
// -> json 파일 정보(문자열인데도)를 읽어와서 자동으로 JS객체로 변환시켜줌
// 원래는 json 파일을 읽어와서 JSON.parse() 함수를 사용하여 JS 객체로 변환해야
// 하지만, Vite에서는 import를 통해 json 파일을 가져오면 자동으로 JS 객체로 변환해준다.
import members from '@/members.json';

// useRoute : 현재 라우트와 관련된 세부정보를 얻어오기 위한 함수
// -> URL 경로, Parmas, Query fullpath, ...등의 현재 상태를 읽을 때 사용.

// useRouter : 라우터 인스턴스를 가져오는 함수
// -> 페이지 이동/변경을 담당하는 함수
// -> push() : 페이지 이동 함수, replace() : 현재 페이지를 새로운 페이지로 대체하는 함수
//    back() : 이전 페이지로 이동하는 함수, ...등으로 라우팅 제어 가능

import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'Members',
  setup() {
    const currentRoute = useRoute();
    const router = useRouter();

    console.log('currentRoute', currentRoute);
    console.log('router', router);

    return { members, currentRoute, router };
  },
};
</script>

<style scoped></style>
