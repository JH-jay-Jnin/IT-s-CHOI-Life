<template>
  <div class="card card-body">
    <h2 class="m-4">이날치 그룹 Members</h2>
    <div class="container">
      <div class="row">
        <!-- 한 가로 줄에 컬럼을 지정할 수 있음. 최대크기에는 6개, 중간에는 3-4개, 최소 2개 이상 설정가능
        부트스트랩으로!! 가능
         -->
        <div
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
          v-for="m in members"
          :key="m.id"
        >
          <router-link :to="'/members/' + m.id">
            {{ m.id }} - {{ m.name }}
          </router-link>
          <!-- routerlink로 to를 쓰면 주소를 바로 쓰면 된다. 전체를 보내보자! -->
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 직접 부트스트랩을 쓴다고 한 것은 아님. 따라서, main.js에서 import하러가자
(교안 참고) -->

<script>
// 1. import한다
import members from '@/members.json';

export default {
  name: 'Members',
  // 2. setup과 return으로 members를 반환한다 = 그래야 사용 가능
  setup() {
    return { members };
  },
};
</script>

<style></style>
