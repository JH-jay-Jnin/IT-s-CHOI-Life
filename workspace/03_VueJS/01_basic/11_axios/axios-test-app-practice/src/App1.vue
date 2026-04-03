// 이 부분이 심화문제 p.4 내용이다.

<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
import { C } from 'vue-router/dist/options-BErt5RTe.cjs';
// axios : 서버랑 데이터를 주고 받는 도구 =>  node_modles에 설치된 'axios'

// 전체 목록 조회 URL
const listUrl = '/api/todos';

// Promise 체인 방식 => 마지막에 가면 then이 많아서 복잡
// -> 결과를 다음으로 넘기면서 순서대로 실행하는 구조

// 4건의 목록을 조회한 후 첫 번째, 두 번째 할 일을 순차적으로 조회
const requestAPI = () => {
  let todoList = []; // 전체 목록을 담아둘 변수

  // 1. 전체 목록 조회
  axios
    .get(listUrl)

    // 1-1. 목로 조회 완료 후 실행
    .then((resp) => {
      // then을 줄줄이 이어 쓸 수 있기 때문에 "체인" 방식라고 한다.
      // resp.data : 서버에서 받은 실제 데이터
      todoList = resp.data;
      console.log('#TodoList :', todoList);

      // 다음 then으로 첫 번째 todo의 id 전달
      return todoList[0].id;
    }) //  .then 앞에 ; 이 있으면 체인이 끊겨서 에러가 발생한다.

    //2. 첫 번째 todo 상세 조회
    .then((id) => {
      // id를 이용해 상세 조회 API 호출
      return axios.get('/api/todos/1' + id); // 다음 then으로 조회 결과를 넘기려면 계속 return한다.
    })

    .then((response) => {
      console.log('## 첫 번째 Todo : ', response);

      // 두 번째 todo id를 다음 then으로 전달
      return todoList[1].id;
    })

    // 3. 두 번째 todo 상세 조회
    .then((id) => {
      axios.get('/api/tods/' + id).then((resp) => {
        console.log('## 두 번째 Todo : ', resp.data);
      });
    })

    // then은 여러 번 써도 되지만, catch는 반드시 한 번만 써야한다! (당연히 에러를 잡는거니깐 틀린 부분을 전체적으로 잡아준다)
    .catch((err) => {
      console.log(err);
    });
};

requestAPI(); // 함수 호출
</script>

<style scoped></style>
