<template>
  <li
    class="list-group-item d-flex align-items-center"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <!-- 체크박스 -->
    <input
      class="form-check-input me-2"
      type="checkbox"
      :checked="todoItem.completed"
      @change="emit('toggle-completed', todoItem.id)"
    />
    <!-- 텍스트 -->
    <span :class="{ 'todo-done text-decoration-line-through': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>
    <!-- 삭제 버튼 -->
    <span
      class="float-end badge bg-secondary ms-auto"
      style="cursor:pointer"
      @click.stop="emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
defineProps({
  todoItem: { type: Object, required: true },
});
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
<style></style>
