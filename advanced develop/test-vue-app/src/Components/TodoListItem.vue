<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
    @click="$emit('toggle-todo', todoItem.id)"
  >
    <span :class="{ 'todo-done': todoItem.completed }"
      >{{ todoItem.todo }} - {{ todoItem.completed }}
      {{ todoItem.completed ? '(완료)' : '(미완료)' }}</span
    >
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="$emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
  <!-- 여기서 stop을 넣은 이유는, 버블링을 해결하기 위해서이다.-->
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoItem: { type: Object, required: true },
  },
};
</script>

<style scoped></style>
