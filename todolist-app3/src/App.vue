<template>
  <div class="container">
    <div class="card card-body bg-light">
      <div class="title text-center fs-4 fw-bold">
        🕐 TodoList App(Composition API Version) 💻
      </div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 1. InputTodo: 할일 추가 이벤트를 받아서 addTodo 실행 -->
        <InputTodo @add-todo="addTodo" />

        <!-- 2. 통계 영역: computed로 자동 계산 -->
        <div class="row text-center mb-3">
          <div class="col">전체 todo 개수 : {{ totalCount }}</div>
          <div class="col text-success fw-bold">
            완료 todo 개수 : {{ completedCount }}
          </div>
          <div class="col text-danger fw-bold">
            미완료 todo 개수 : {{ incompleteCount }}
          </div>
        </div>

        <!-- 3. TodoList: 목록 출력 + 삭제/토글/전체삭제 이벤트 수신 -->
        <!--    전체삭제 이벤트(@delete-all)를 받아서 deleteAll 실행 -->
        <TodoList
          :todoList="todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
          @delete-all="deleteAll"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// 순서 1: 필요한 것들 import
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import { reactive, computed } from 'vue';

// 순서 2: 반응성 있는 todoList 데이터 생성 (reactive = 배열/객체용)
let ts = new Date().getTime();
const todoList = reactive([
  { id: ts, todo: '자전거 타기', completed: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
]);

// 순서 3: computed로 통계 자동 계산
// - todoList가 바뀔 때마다 자동으로 재계산됨
const totalCount = computed(() => todoList.length);
const completedCount = computed(
  () => todoList.filter((item) => item.completed).length,
);
const incompleteCount = computed(
  () => todoList.filter((item) => !item.completed).length,
);

// 순서 4: 할일 추가 함수
// - InputTodo에서 emit한 값을 받아서 todoList에 push
const addTodo = (todo) => {
  if (todo.length >= 3) {
    todoList.push({ id: new Date().getTime(), todo, completed: false });
  }
};

// 순서 5: 개별 삭제 함수
// - findIndex로 해당 id의 인덱스를 찾고 splice로 제거
const deleteTodo = (id) => {
  const index = todoList.findIndex((item) => id === item.id);
  todoList.splice(index, 1);
};

// 순서 6: 완료 토글 함수
// - 해당 항목의 completed를 반전(!)시킴
const toggleCompleted = (id) => {
  const index = todoList.findIndex((item) => id === item.id);
  todoList[index].completed = !todoList[index].completed;
};

// 순서 7: [신규] 전체 삭제 함수
// - confirm으로 사용자에게 확인 받은 후에만 삭제
// - splice(0)은 배열의 처음부터 전부 제거
const deleteAll = () => {
  if (confirm('정말로 삭제하시겠습니까?')) {
    todoList.splice(0);
  }
};
</script>
