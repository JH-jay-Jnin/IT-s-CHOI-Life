<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';

// 전체 목록을 조회한 후 한 건씩 순차적으로 순회(반복)하면서 조회하기.
const requestAPI = async () => {
  let todolist;
  todolist = response.data;

  // 2. 반복문을 이용해서 todo 하나씩 조회
  for (let index = 0; index < todolist.length; index++) {
    response = await axios.get(listUrl + '/' + todolist[index].id); // 값이 true면 기다렸다가 index를 담고 다시 출력하기에 async await 가 필요하다
    console.log(`## ${i + 1}번째 Todo  :`, response.data);
  }
};

requestAPI(); // 함수 호출
</script>
