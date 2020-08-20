<template>
  <div :class="['todo_item', { is_active: isActive }]">{{ title }}</div>
</template>

<script>
export default {
  name: 'TodoItem',

  props: {
    title: { type: String },
    isActive: { type: Boolean, default: false }
  },

  setup() {}
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
}

.is_active {
  font-weight: bold;
}
</style>
