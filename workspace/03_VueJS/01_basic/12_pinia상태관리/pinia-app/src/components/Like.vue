<template>
  <div>
    <button @click="increase">좋아요 누르기</button>
    <!-- 누를때마다 증가 -->
  </div>
</template>

<script setup>
// 01_basic
import { useLikeStore } from '@/stores/01_basic/like';
const { increase } = useLikeStore();
// store 안에서 increase만 꺼내서 담기
</script>
