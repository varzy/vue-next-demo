<template>
  <div class="todo_item">
    <div class="checbox">
      <input type="checkbox" v-model="calcTodoStatus" @click.stop />
    </div>
    <div :class="['title', { 'title-active': isActive }, { 'title-done': isDone }]">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: 'TodoItem',

  props: {
    id: { type: Number, required: true },
    title: { type: String },
    isActive: { type: Boolean, default: false },
    isDone: { type: Boolean, required: true }
  },

  setup(props, ctx) {
    const state = reactive({
      isChecked: false
    });

    const calcTodoStatus = computed({
      get: () => props.isDone,
      set: status => {
        ctx.emit('status-change', props.id, status);
      }
    });

    return { state, calcTodoStatus };
  }
};
</script>

<style lang="scss" scoped>
.todo_item {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  .title {
    margin-left: 8px;

    &-active {
      font-weight: bold;
    }

    &-done {
      color: #bbb;
      text-decoration: line-through;
    }
  }
}
</style>
