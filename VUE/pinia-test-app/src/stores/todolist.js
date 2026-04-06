import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  // todoList라는 이름의 저장소 생성
  // states (공유하고 싶은 변수) == reactive 대신에 ref를 써도 상관없지만, 무조건 ref는 value를 붙여야하기 때문에 알아서 판단할 것
  const state = reactive({
    todoList: [
      { id: 1, todo: 'ES6학습', done: false },
      { id: 2, todo: 'React학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: true },
      { id: 4, todo: '야구경기 관람', done: false },
    ],
  });

  // actions (공유하고 싶은 함수)
  const addTodo = (todo) => {
    state.todoList.push({ id: new Date().getTime(), todo, done: false }); // 배열의 맨 마지막에 넣겠다. (push)
  };
  const deleteTodo = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList.splice(index, 1);
  };
  const toggleDone = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[index].done = !state.todoList[index].done;
  };

  //getters(미리 계산한 값을 다른 컴포넌트에서 가져다 쓰고 싶은 계산 결과값
  // = computed( ) 를 사용한다.

  // const todoList = computed(); // 미리 계산 () 안에 있는 것을 ==> 화살표함수가 들어간다.
  const todoList = computed(() => state.todoList);

  // 되도록이면 이 기능을 안  쓰고, states(변수)에 정의된 이름으로 return, 선언한 그대로 외부 컴포넌트에 갖다 쓰기!
  return state.todoList.filter((todoItem) => todoItem.done == true);
  // 배열명.filter(화살표함수) --> 배열에 있는 요소를 하나씩 꺼내서 화살표함수에 정의도니 조건이 true인 것만
  // 배열에 묶어준다. [{}]
  // 배열명.filter(화살표함수).length --> 배열의 개수 구해줌(1)
});
const donecount = computed(() => state.donecount);
return { state, todoList, doneCount, addTodo, deleteTodo, toggleDone };
