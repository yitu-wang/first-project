<template>
  <div class="box">
    <van-nav-bar title="论坛头条—登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号" :error="flag" />

      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required @blur="leave" />
    </van-cell-group>
    <van-button round type="primary" @click="onSubmit" style="margin-top: 16px; height: 40px" :loading="flag1"
      :disabled="flag1">登录</van-button>
  </div>
</template>

<script>
  import {
    mapMutations
  } from "vuex"
  //导入请求后台数据检测的登录请求
  import {
    loginAPI
  } from '@/api/index.js'
  import Notify from "@/ui/Notify.js"
  import {
    setToken
  } from '@/utils/token.js'
  export default {
    name: 'login',
    data() {
      return {
        user: {
          mobile: '13812345678', //手机号
          code: '246810', //密码（246810）必须是这个
        },
        flag: false,
        flag1: false,
      }
    },
    methods: {
      //焦点离开判断手机号是否正确
      leave() {
        if (this.user.mobile.length === 11 && this.user.code == 246810) {
          this.flag = false
        } else {
          this.flag = true
        }
      },
      async onSubmit() {
        //控制加载圆圈
        this.flag1 = true
        try {
          const res = await loginAPI(this.user)
          setToken(res.data.data.token)
          localStorage.setItem('refresh_token', res.data.data.refresh_token)
          if (localStorage.getItem('hash') === undefined) {
            this.$router.replace('/layout/home')
          } else {
            let hash = localStorage.getItem('hash')
            hash = hash.slice(1)
            this.$router.push(hash)
          }
          localStorage.removeItem('hash')
        } catch (err) {
          //try-catch可以捕获请求失败的错误，错误将会利用catch进入
          //这个是vant的弹框组件，失败时调用这个组件
          Notify('账号或密码错误')
        }
        this.flag1 = false
      },
    },
  }
</script>

<style lang="less" scoped>
  .box {
    text-align: center;
  }

  .van-nav-bar {
    background-color: #007bff;
  }

  /deep/.van-nav-bar__title {
    color: white;
  }

  .van-button {
    background-color: #007bff;
    border: none;
    width: 340px;
  }
</style>