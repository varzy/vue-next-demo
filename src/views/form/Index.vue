<template>
  <form class="form" @submit.prevent>
    <div class="form-item">
      <label for="username">Username: </label>
      <input type="text" id="form_username" v-model="form.username" />
    </div>
    <div class="form-item">
      <label for="password">Password: </label>
      <input type="password" id="form_password" v-model="form.password" />
    </div>
    <div class="form-item">
      <button @click="onSubmit">Submit</button>
      <button @click="onReset">Reset</button>
    </div>
  </form>
</template>

<script>
import { toRefs, reactive } from 'vue';

function useForm() {
  const state = reactive({
    form: { username: '', password: '' }
  });

  const onSubmit = () => {
    console.log(JSON.stringify(state.form));
  };
  const onReset = () => {
    state.form.username = '';
    state.form.password = '';
  };

  return { ...toRefs(state), onSubmit, onReset };
}

export default {
  name: 'Form',

  setup() {
    return { ...useForm() };
  }
};
</script>
