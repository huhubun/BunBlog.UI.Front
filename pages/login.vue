<template>
  <a-row type="flex" justify="center">
    <a-col :span="6">
      <a-form :form="form" @submit.prevent="submit">
        <a-form-item>
          <a-input
            placeholder="Username"
            ref="usernameInput"
            class="bun-margin-top-2x"
            auto-focus
            v-decorator="[
                  'username',
                  { rules: [{required: true, message: '请输入用户名'}] }
                  ]"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-input
            placeholder="Password"
            ref="passwordInput"
            type="password"
            v-decorator="[
                  'password',
                  { rules: [{required: true, message: '请输入密码'}] }
                  ]"
          >
            <a-icon slot="prefix" type="key" />
          </a-input>
        </a-form-item>

        <div class="login-operation bun-margin-top-2x">
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </div>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
import Vue from 'vue'

export default {
  layout: 'login',
  head() {
    return {
      title: '登录'
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    submit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          let loginInfo = this.form.getFieldsValue()

          // // loginByPassword({
          // //   username: loginInfo.username,
          // //   password: loginInfo.password
          // // }).then(res => {
          // //   Vue.sessionStorage.set('username', this.username)
          // //   this.$router.push('/admin')

          // //   this.$notification.success({
          // //     message: `${loginInfo.username}，欢迎回来！`,
          // //     description: '',
          // //     icon: <a-icon type="smile" style="color: #52c41a" />
          // //   })
          // }).catch(e => {
          //   this.$message.error(`登录失败：${e.message}`)
          // })
        }
      })
    }
  }
}
</script>
