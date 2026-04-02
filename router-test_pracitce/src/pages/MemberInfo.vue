<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <div>
      경로 패턴 : /members/:id<br />
      요청 경로 : {{ currrentRoute.fullPath }}<br />
      id값 : {{ currrentRoute.params.id }} <br />
    </div>
    // key:value 형식으로 들어가있음
  </div>

  <div className="mt-5">
    <img :src="member.photo" class="img" />
    <!-- : 안쓰고 src를 쓰면 문자열로 인식한다.-->
    <h4 class="mt-2">{{ member.name }} {{ member.role }}</h4>
    <p>{{ member.desc }}</p>
    <a class="fa fa-instagram m-1"></a>
    <a class="fa fa-facebook m-1"></a>
    <a class="fa fa-youtube m-1"></a>
    <br /><br />
    <router-link to="/members">멤버 목록으로</router-link>
    <!-- <router-link :to="{name : 'members'}">멤버 목록으로</router-link>-->
  </div>
</template>

<script setup>
// <script setup> => 코드를 좀 더 간결하게 쓸려고 하는 것이다. import 구문만 남기고 싹다 제거.
import { createRouter, useRoute } from 'vue-router';
import Members from './Members.vue';

const currrentRoute = useRoute();

const id = parseInt(currrentRoute.params.id, 10); // 10진법 숫자로 파싱한다.
console.log(id);

// 멤버 정보 조회
// 배열.find ( (요소) => 조건 ) : 조건이 true라면 해당 요소 반환 및 종료
//                                없다면 undefined 반환
const member = Members.find((member) => member.id === id);
console.log(member);
</script>

<style scoped></style>
