<template>
  <div class="home">
    <header class="home-header">
      <div class="logo" @click="$router.push({ name: 'Index' })">Vue Next Demo</div>
    </header>
    <div class="home-body">
      <div class="home-body-aside">
        <navigation-item
          v-for="item in navigation"
          :key="item.name"
          :name="item.name"
          :route-name="item.meta.title"
        ></navigation-item>
      </div>
      <div class="home-body-main"><router-view /></div>
    </div>
  </div>
</template>

<script>
import NavigationItem from './NavigationItem';
import { useStore } from 'vuex';

export default {
  name: 'Home',

  components: { NavigationItem },

  setup() {
    const store = useStore();

    return { navigation: store.state.view.navigation };
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &-header {
    min-height: 0;
    height: 60px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    background-color: #dbe2ef;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);
    z-index: 502;

    .logo {
      cursor: pointer;
    }
  }

  &-body {
    flex: 1;
    display: flex;
    height: 100%;
    min-height: 0;

    &-aside {
      background-color: #f9f7f7;
      width: 240px;
      flex-shrink: 0;
      z-index: 501;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);
    }

    &-main {
      min-width: 0;
      min-height: 0;
      flex: 1;
      overflow: hidden auto;
      padding: 24px;
    }
  }
}
</style>
