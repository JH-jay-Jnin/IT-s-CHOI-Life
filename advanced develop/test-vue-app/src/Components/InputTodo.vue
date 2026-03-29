<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
        <!-- 따로따로 해도 되지만, 함수 내에서 이루어지면 바뀐다 하더라도 손쉽게 바꿀 수 있다. -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return { todo: '' };
  },
  emits: ['todo'],
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        this.$emit('add-todo', this.todo);
        this.todo = '';
      }
    },
  },
};
</script>

<style scoped></style>
