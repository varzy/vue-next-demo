<template>
  <div class="todo">
    <div class="left">
      <div class="list">
        <todo-item
          v-for="todo in calcSortedTodos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :is-active="todo.id === activeId"
          :is-done="todo.isDone"
          @click="onClickTodo(todo.id)"
          @status-change="handleTodoStatusChanged"
        ></todo-item>
      </div>
    </div>

    <div class="right">
      <div class="active" v-if="activeId > 0">
        <h2 class="active-header">
          <input class="active-header-checkbox" type="checkbox" v-model="activeTodo.isDone" />
          <div class="active-header-title">{{ activeTodo.title }}</div>
        </h2>
        <div class="active-content">{{ activeTodo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onBeforeMount, toRefs } from 'vue';
import TodoItem from './TodoItem';
import { reqFetchTodos } from '../../api/todo';

function useTodo() {
  const state = reactive({
    todos: [],
    activeId: 0
  });

  const activeTodo = computed(() => state.todos.find(todo => todo.id === state.activeId));
  const calcUndoneTodos = computed(() => state.todos.filter(todo => !todo.isDone));
  const calcDoneTodos = computed(() => state.todos.filter(todo => todo.isDone));
  const calcSortedTodos = computed(() => [...calcUndoneTodos.value, ...calcDoneTodos.value]);

  const getTodos = async () => {
    const { data } = await reqFetchTodos();
    state.todos = data;
  };
  const onClickTodo = id => {
    state.activeId = id;
  };
  const handleTodoStatusChanged = (id, status) => {
    state.todos.find(todo => todo.id === id).isDone = status;
  };

  return {
    ...toRefs(state),
    onClickTodo,
    handleTodoStatusChanged,
    calcUndoneTodos,
    calcDoneTodos,
    activeTodo,
    calcSortedTodos,
    getTodos
  };
}

export default {
  name: 'Todo',

  components: { TodoItem },

  setup() {
    const { getTodos, ...otherTodoEffect } = useTodo();

    onBeforeMount(async () => {
      await getTodos();
    });

    return { ...otherTodoEffect };
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  height: 100%;

  .left {
    width: 256px;
    flex-shrink: 0;

    .list {
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  }

  .right {
    flex: 1;

    .active {
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-left: 24px;
      padding: 24px;

      &-header {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

        &-title {
          margin-left: 8px;
          font-size: 24px;
        }
      }

      &-content {
        margin-top: 16px;
      }
    }
  }
}
</style>
