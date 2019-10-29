<template>
  <a-layout>
    <a-affix :offsetTop="0">
      <a-layout-header>
        <a-menu mode="horizontal" theme="light">
          <a-menu-item class="title bun-left">
            <n-link to="/">呼呼小笼包的博客</n-link>
          </a-menu-item>
          <a-menu-item>
            <n-link to="/about">关于</n-link>
          </a-menu-item>
          <a-menu-item>
            <a-tooltip placement="bottom" title="(lll￢ω￢) 该功能尚未实装">
              <a-input-search placeholder="搜索" />
            </a-tooltip>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-affix>
    <a-layout-content>
      <nuxt />
    </a-layout-content>
    <a-layout-footer>
      <powered-by />
      <copyright />
    </a-layout-footer>
  </a-layout>
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
.bun-margin-top
  margin-top: 8px

.bun-margin-top-2x
  margin-top: 16px

.bun-margin-right
  margin-right: 8px

.bun-margin-right-2x
  margin-right: 16px

.bun-margin-bottom
  margin-bottom: 8px

.bun-margin-bottom-2x
  margin-bottom: 16px

.bun-margin-left
  margin-left: 8px

.bun-margin-left-2x
  margin-left: 16px

.bun-left
  float: left

.ant-layout
  min-height: 100vh

.ant-layout-header
  text-align: right
  background-color: #FFF
  box-shadow: 0 0 10px -5px #000

.ant-input-search
  text-align: left

.ant-layout-header .ant-menu.ant-menu-root
  border-bottom: 0
  padding-top: 8px

.ant-layout-content
  background-color: #FFF

.ant-layout-footer a
  color: rgba(0, 0, 0, 0.65)

.title
  font-size: 1.6em
</style>
