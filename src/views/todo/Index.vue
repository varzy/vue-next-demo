<template>
  <div class="todo">
    <div class="left">
      <div class="list">
        <todo-item
          v-for="todo in calcSortedTodos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :is-active="todo.id === stateTodo.activeId"
          :is-done="todo.isDone"
          @click="onClickTodo(todo.id)"
          @status-change="handleTodoStatusChanged"
        ></todo-item>
      </div>
    </div>

    <div class="right">
      <div class="active" v-if="stateTodo.activeId > 0">
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
import { reactive, computed, watchEffect } from 'vue';
import TodoItem from './TodoItem';

function useTodo() {
  const state = reactive({
    todos: ['Banana', 'Orange', 'Apple', 'Mango'].map((item, index) => ({
      id: index + 1,
      title: item,
      content: item + item + item + item,
      isDone: false
    })),
    activeId: 0
  });

  const activeTodo = computed(() => state.todos.find(todo => todo.id === state.activeId));
  const calcUndoneTodos = computed(() => state.todos.filter(todo => !todo.isDone));
  const calcDoneTodos = computed(() => state.todos.filter(todo => todo.isDone));
  const calcSortedTodos = computed(() => [...calcUndoneTodos.value, ...calcDoneTodos.value]);

  watchEffect(() => {
    if (calcUndoneTodos.value.length === 0) {
      console.log('Aha~ 你已经完成了全部任务');
    }
  });

  const onClickTodo = id => {
    state.activeId = id;
  };
  const handleTodoStatusChanged = (id, status) => {
    state.todos.find(todo => todo.id === id).isDone = status;
  };

  return {
    stateTodo: state,
    onClickTodo,
    handleTodoStatusChanged,
    calcUndoneTodos,
    calcDoneTodos,
    activeTodo,
    calcSortedTodos
  };
}

export default {
  name: 'Todo',

  components: { TodoItem },

  setup() {
    return { ...useTodo() };
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
