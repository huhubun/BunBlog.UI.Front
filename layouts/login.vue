<template>
  <client-only>
    <a-layout style="min-height: 100vh">
      <header>
        <h1>Bun Blog Admin</h1>
      </header>
      <a-layout-content>
        <nuxt />
      </a-layout-content>
      <a-layout-footer>
        <powered-by />
        <copyright />
      </a-layout-footer>
    </a-layout>
  </client-only>
</template>

<script>
import PoweredBy from '~/components/layout/PoweredBy.vue'
import Copyright from '~/components/layout/Copyright.vue'

export default {
  components: {
    PoweredBy,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>
.ant-layout
  min-height: 100vh

header
  text-align: center
  padding-top: 128px

  h1
    font-weight: 200

.login-operation
  text-align: center

.ant-layout-footer
  text-align: center

.ant-layout-content
  background-color: #f0f2f5
</style>
