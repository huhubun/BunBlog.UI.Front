<template>
  <div class="post-list-container">
    <post-list v-bind:list="list"></post-list>
  </div>
</template>

<script>
import PostList from '~/components/PostList.vue'

export default {
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const list = await $axios.$get('/api/posts')

    return { list }
  },
  components: {
    PostList
  }
}
</script>

<style lang="stylus" scoped>
.post-list-container
  padding: 0 100px
</style>
