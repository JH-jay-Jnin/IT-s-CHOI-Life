<template>
  <div class="row">
    <div class="col">
      <!-- 순서 1: 헤더 영역 - 제목 + 전체삭제 버튼 -->
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span>할일 목록</span>

        <!-- 순서 2: v-if로 todoList가 2개 이상일 때만 버튼 표시 -->
        <!-- 버튼 클릭 시 부모(App.vue)로 delete-all 이벤트 방출 -->
        <span
          v-if="todoList.length >= 2"
          class="btn btn-danger btn-sm"
          @click="emit('delete-all')"
          >전체 삭제</span
        >
      </div>

      <!-- 순서 3: 할일 목록 렌더링 -->
      <!-- TodoListItem에 각 항목 전달 + 이벤트 경유(위로 올려보내기) -->
      <ul class="list-group">
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="emit('delete-todo', $event)"
          @toggle-completed="emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
// 순서 1: 자식 컴포넌트 import
import TodoListItem from './TodoListItem.vue';

// 순서 2: 부모에게서 받을 props 정의
// - todoList 배열을 받아서 v-for로 렌더링
defineProps({ todoList: { type: Array, required: true } });

// 순서 3: 부모로 올려보낼 이벤트 정의
// - delete-todo, toggle-completed: TodoListItem에서 올라온 이벤트를 경유
// - delete-all: 전체삭제 버튼 클릭 시 App.vue로 전달
const emit = defineEmits(['delete-todo', 'toggle-completed', 'delete-all']);
</script>
