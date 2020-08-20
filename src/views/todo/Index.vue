<template>
  <div class="todo">
    <div class="left">
      <div class="list">
        <todo-item
          v-for="todo in stateTodo.todos"
          :key="todo.id"
          :title="todo.title"
          :is-active="todo.id === stateTodo.activeTodo.id"
          @click="onClickTodo(todo.id)"
        ></todo-item>
      </div>
    </div>

    <div class="right">
      <div class="active" v-if="stateTodo.activeTodo.id > 0">
        <h2 class="active-title">{{ stateTodo.activeTodo.title }}</h2>
        <div class="active-content">{{ stateTodo.activeTodo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import TodoItem from './TodoItem';

function useTodo() {
  const state = reactive({
    todos: ['Banana', 'Orange', 'Apple', 'Mango'].map((item, index) => ({
      id: index + 1,
      title: item,
      content: item + item + item + item
    })),
    activeTodo: { id: 0, title: '', contnet: '' }
  });

  const onClickTodo = id => {
    state.activeTodo = state.todos.find(todo => todo.id === id);
  };

  return { stateTodo: state, onClickTodo };
}

export default {
  name: 'Todo',

  components: { TodoItem },

  setup() {
    const { stateTodo, onClickTodo } = useTodo();

    return { stateTodo, onClickTodo };
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

      &-title {
        margin: 0;
        padding: 0;
      }

      &-content {
        margin-top: 16px;
      }
    }
  }
}
</style>
