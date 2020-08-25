<template>
  <div class="tweet_card">
    <div class="header">
      <div class="username">{{ username }}</div>
    </div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'TweetCard',

  props: {
    id: { type: Number, required: true },
    username: { type: String, required: true },
    content: { type: String, required: true }
  }
};
</script>
