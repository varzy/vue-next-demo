<template>
  <div
    :class="['navigation_item', { is_active: routeName === $route.name }]"
    @click="$router.push({ name: routeName })"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',

  props: {
    name: String,
    routeName: String
  }
};
</script>

<style lang="scss" scoped>
.navigation_item {
  height: 48px;
  line-height: 48px;
  background-color: #ffe2e2;
  border-bottom: 1px solid #ddd;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  transition: all 0.24s ease-in-out;

  &:hover {
    background-color: #ffc7c7;
  }

  &:last-child {
    border-bottom: 0;
  }
}

.is_active {
  font-weight: bold;
}
</style>
