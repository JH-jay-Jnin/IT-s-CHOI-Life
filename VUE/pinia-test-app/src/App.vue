<template>
  <div>
    <h2>TodoList 테스트(Composition API)</h2>
    <hr />
    할일 추가 : <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
//중앙저장소를 import해주어야함.
import { computed, ref } from 'vue';
import { useTodoListStore } from './stores/todoList.todoListStore';

//중앙저장소에서 불러와서 쓰자.
const todoListStore = useTodoListStore();

//불러와서 쓰는 방법 여러가지임.
//1. 하나씩 내가 원하는 이름의 변수에 넣어서 사용해도 됨.
// const addTodo = useTodoListStore.addTodo; ==> 내가 원하는 이름으로 직접 가져올 수 도 있고

//2. 여러개를 가지고 와서 원하는 이름의 변수에 넣어서 사용해도 됨. { 리턴한이름, 리턴한이름 }
//const { addTodo }; // 중괄호 써서 묶어서 기능별로 사용해도 괜찮다.
const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;

//3. 템플릿에서 직접 store이름을 명시해도 됨.
// --> 에러없이 제일 편함. 단점은 어떤 pinia에서 가져다썼는지 잘안보임
//<button @click="useTodoListStore.deleteTodo(todoItem.id)">삭제</button>

const doneCount = computed(() => todoListStore.doneCount);

const todo = ref('');

const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>
