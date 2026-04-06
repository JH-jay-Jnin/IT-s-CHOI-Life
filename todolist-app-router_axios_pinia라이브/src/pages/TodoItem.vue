<template>
  <li>
    <span @click="useTodoListStore.toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span
      :class="todoItem.done ? 'todo-done pointer' : 'pointer'"
      @click="toggleDone(todoItem.id)"
    >
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="router.push(`/todos/edit/${todoItem.id}`)"
    >
      편집</span
    >
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="deleteTodo(todoItem.id)"
    >
      삭제</span
    >
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';

defineProps({
  todoItem: { Type: Object, required: true },
});
const router = useRouter();
const todoListStore = useTodoListStore();
const { deleteTodo, toggleDone } = todoListStore;
</script>
