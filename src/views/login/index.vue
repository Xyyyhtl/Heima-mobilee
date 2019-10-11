<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号" placeholder="输入手机号" />

      <van-field v-model="user.code" type="password" label="验证码" placeholder="请输入验证码" required />
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="btn-wrap">
      <van-button class="btn" type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15834212341',
        code: '246810'
      }
    }
  },
  methods: {
    async onLogin () {
      try {
        // 请求提交表单数据
        const { data } = await request({
          method: 'POST',
          url: '/app/v1_0/authorizations',
          data: this.user
        })
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn-wrap {
  padding: 20px;
  .btn {
    width: 100%;
    border-radius: 6px;
  }
}
</style>
