//小思同学页面
<template>
  <div class="box">
    <!-- 头部导航 -->
    <van-nav-bar title="小思同学" left-arrow @click-left="$router.push('/layout/user')" />
    <div v-for="(item,index) in list" :key="index" class="chat">
      <!-- 左边聊天 -->
      <div class="left" v-if="item.name==='xs'">
        <img src="@/assets/logo.png" alt="">
        <div class="text">{{item.msg}}</div>
      </div>
      <!-- 右边聊天 -->
      <div class="right" v-else>
        <div class="text">{{item.msg}}</div>
        <img :src="user.photo" alt="">
      </div>
    </div>
    <!-- 底部输入框 -->
    <van-cell-group>
      <van-field v-model="value" placeholder="说点什么...">
        <van-button slot="button" size="small" @click="sendFn">提交</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
  import {
    getUsertotalAPI,
  } from "@/api/index.js"
  import {
    io
  } from "socket.io-client"
  import {
    getToken
  } from "@/utils/token.js"
  export default {
    name: 'chat',
    data() {
      return {
        value: '',
        list: [{
            name: "xs",
            msg: 'hi,你好我是小四'
          },
          {
            name: "me",
            msg: 'hi,你好我是我'
          },
        ],
        socker: null, //客户端和服务区建立的socker对象
        user: {}, //用户资料
      }
    },
    async created() {
      const res = await getUsertotalAPI()
      this.user = res.data.data
      this.socker = io('http://toutiao.itheima.net', {
        query: {
          token: getToken
        },
        transports: ['websocket']
      })
      //判断链接成功没
      this.socker.on('connect', () => {
        console.log('连接成功');
      })
      //接收后端传来的消息
      this.socker.on('message', data => {
        this.list.push({
          name: "xs",
          mag: data.msg
        })
      })

    },
    methods: {
      //发送消息
      sendFn() {
        //发送到后端的对象
        if (this.value != '') {
          this.socker.emit('message', {
            msg: this.value,
            timestamp: new Date().getTime()
          })
        }
        //把消息显示到页面内
        this.list.push({
          msg: this.value,
          name: 'me'
        })
        this.value = ''
      }
    },
    destroyed() {
      this.socker.close()
      this.socker = null
    },
  }
</script>

<style lang="less" scoped>
  body,
  html {
    max-width: 100%;
    max-height: 100%;
  }

  .van-nav-bar {
    background-color: #007bff;

    /deep/ .van-icon {
      color: #ffffff;
    }

    /deep/.van-nav-bar__title {
      color: white;
    }

    /deep/.van-cell {
      font-size: 16Px;
    }
  }

  /deep/.van-button--default {
    font-size: 15Px;
    border: none;
  }

  .van-cell-group {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .left {
    float: left;
    width: 90%;
    margin-left: 5Px;
    margin-top: 20Px;

    img {
      width: 50Px;
      height: 50Px;
      border-radius: 100%;
      vertical-align: top;

    }

    .text {
      position: relative;
      display: inline-block;
      max-width: 65%;
      font-size: 14Px;
      margin-left: 15Px;
      background-color: #d7e5f5;
      word-break: break-all;
      padding: 8Px;
      border-radius: 8Px;
    }

    .text::before {
      content: '';
      width: 10Px;
      height: 10Px;
      background-color: #d7e5f5;
      position: absolute;
      left: -4Px;
      top: 10Px;
      transform: rotate(45deg);
    }
  }

  .right {
    float: right;
    width: 90%;
    margin-right: 5Px;
    margin-top: 20Px;
    text-align: right;

    .text {
      position: relative;
      display: inline-block;
      max-width: 65%;
      font-size: 14Px;
      background-color: #d7e5f5;
      word-break: break-all;
      padding: 8Px;
      border-radius: 8Px;
      vertical-align: middle;
      margin-right: 15Px;
    }

    .text::before {
      content: '';
      width: 10Px;
      height: 10Px;
      background-color: #d7e5f5;
      position: absolute;
      right: -4Px;
      top: 10Px;
      transform: rotate(45deg);
    }

    img {
      float: right;
      width: 50Px;
      height: 50Px;
      border-radius: 100%;
      vertical-align: top;
    }
  }
</style>