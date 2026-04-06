<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

// 4건의 목록을 조회한 후 첫 번째, 두 번째 할일 순차적으로 조회
const requestAPI = async () => {
  // 비동기 함수 앞에 async = await 하겠다는 의미
  let todoList; // todo 목록을 담을 변수

  // 1. 전체 목록 조회
  // await : Promise가 끝날 때 까지 기다림 ( 서버에 요청이 오고 응답이 올때까지 기다린다. )
  let response = await axios.get(listUrl);
  //   console.log(response);
  todoList = response.data;
  console.log('## Todolist :', todoList);

  // 2. 첫 번째 Todo 조회
  response = await axios.get(todoUrlPrefix + todoList[0].id); // 위에서 resonse를 let으로 선언하고 이미  사용한 다음에 다시 사용하지 않기 때문에, 여기서 let 없이 재사용이 가능하다.
  console.log(response);
  // Promise(pending) : 아직 결과가 안 나온 상태 => await를 붙여줘야한다.
  console.log('## 첫 번째 Todo : ', response.data);

  // 3. 두 번째 Todo 조회
  response = await axios.get(todoUrlPrefix + todoList[1].id);
  console.log('## 두 번째 Todo : ', response.data);
};

requestAPI(); // 함수 호출
</script>
