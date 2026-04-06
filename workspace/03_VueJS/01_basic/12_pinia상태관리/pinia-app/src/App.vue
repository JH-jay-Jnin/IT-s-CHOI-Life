<script setup>
import Like from '@/components/Like.vue';

// 01_basic
import { useLikeStore } from '@/stores/01_basic/like';

const likeStore = useLikeStore();
</script>

<template>
  <div>
    <h1>Pinia 상태 관리 예제</h1>
    <h2>좋아요 수 : {{ likeStore.like }}</h2>
    <h2>좋아요 수 5배 증가 : {{ likeStore.fivetimes }}</h2>
  </div>
  <Like />
  <!-- 이 좋아요 버튼을 누를 때마다 증가했으면 좋겠다.-->
</template>

<style scoped></style>
