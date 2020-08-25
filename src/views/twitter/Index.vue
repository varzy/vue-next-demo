<template>
  <div class="twitter">
    <div class="container">
      <tweet-card
        v-for="tweet in tweets"
        :key="tweet.id"
        :id="tweet.id"
        :username="tweet.username"
        :content="tweet.content"
      ></tweet-card>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from 'vue';
import { reqFetchTweets } from '@/api/twitter';
import TweetCard from './TweetCard';

function useTweets() {
  const state = reactive({
    tweets: []
  });

  const getTweets = async () => {
    const { data } = await reqFetchTweets();
    state.tweets = [...state.tweets, ...data];
  };

  return { ...toRefs(state), getTweets };
}

export default {
  name: 'Twitter',

  components: { TweetCard },

  setup() {
    const { getTweets, ...otherTweetsEffects } = useTweets();

    onBeforeMount(async () => {
      await getTweets();
    });

    return { ...otherTweetsEffects };
  }
};
</script>

<style lang="scss" scoped>
.twitter {
  .container {
    margin: 0 auto;
    width: 768px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
}
</style>
