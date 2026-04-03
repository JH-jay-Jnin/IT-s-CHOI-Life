<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>
<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';
import axios from 'axios';

const states = reactive({
  todoList: [],
});

const BASEURI = '/api/todos';

//1. 컴포넌트 초기화될 때 json-server로 연결해서 전체 목록 가지고 와야함.
//2.  백엔드 서버로 부터 가지고 온 목록을 todoList에 넣어 주어야함.
//3. 화면에 todoList목록을 보일 것임.

const fetchTodoList = async () => {
  // axios 필요함. --> import 필요함.
  try {
    let response = await axios.get(BASEURI); //http통신 ( 요청을 보냄 ) --> http 응답을 받음
    if (response.status == 200) {
      console.log(response.data); // 콘솔에 찍어 넣어 주는 습관이 좋다.
      //states.todoList에 데이터를 넣어주어야 화면에 나타남.
      states.todoList = response.data; // response.data가 배열이기 때문에 따로 코드를 추가적으로 안쓰고 그대로 대입.
    } else {
      console.log('데이터 전체 조회 실패');
    }
  } catch (e) {
    console.log('예상치 못한 에러가 발생함. 에러 정보는 ' + e);
  }
};

fetchTodoList(); //시작하자 함수를 호출하고 싶으면 바로 써주기.

const addTodo = ({ todo, desc }) => {
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};
const updateTodo = ({ id, todo, desc, done }) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index] = { id, todo, desc, done };
};
const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList.splice(index, 1);
};
const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index].done = !states.todoList[index].done;
};
provide(
  'todoList',
  computed(() => states.todoList),
);
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>
