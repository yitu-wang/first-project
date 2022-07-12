<template>
  <div>
    <div class="top">
      <div class="user">
        <img :src="userphoto" alt="">
        <div class="user-name">
          <span>{{username}}</span>
          <button>申请认证</button>
        </div>
      </div>
      <div class="top-bot">
        <ul>
          <li>
            <p>{{user.art_count}}</p>
            <p>动态</p>
          </li>
          <li>
            <p>{{user.follow_count}}</p>
            <p>关注</p>
          </li>
          <li>
            <p>{{user.fans_count}}</p>
            <p>粉丝</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div @click="$router.push('/edit')">
        <van-nav-bar>
          <van-icon name="edit" slot="left"> 编辑资料</van-icon>
          <van-icon name="arrow" slot="right" />
        </van-nav-bar>
      </div>
      <div @click="$router.push('/chat')">
        <van-nav-bar>
          <van-icon name="chat-o" slot="left"> 小思同学</van-icon>
          <van-icon name="arrow" slot="right" />
        </van-nav-bar>
      </div>
      <div @click="quitFn">
        <van-nav-bar>
          <van-icon name="warning-o" slot="left"> 退出登录</van-icon>
          <van-icon name="arrow" slot="right" />
        </van-nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
  //引入清空token的方法
  import {
    delToken
  } from "@/utils/token.js"
  //引入组件库
  import {
    Dialog
  } from 'vant';

  //引入接口方法
  import {
    getUsertotalAPI,
    getUserAPI
  } from "@/api/index.js"
  //引入vuex的映射函数
  import {
    mapState,
    mapMutations
  } from "vuex"
  export default {
    name: 'user',
    data() {
      return {
        user: {}, //用户资料

      }
    },
    // async created() {
    //   const res = await getUsertotalAPI()
    //   this.user = res.data.data
    //   //this.$store.commit('set_userphoto', this.user.photo)
    //   this.set_userphoto(this.user.photo)
    //   this.set_username(this.user.name)
    // },
    async activated() {
      const res = await getUsertotalAPI()
      this.user = res.data.data
      //this.$store.commit('set_userphoto', this.user.photo)
      this.set_userphoto(this.user.photo)
      this.set_username(this.user.name)
    },
    methods: {
      ...mapMutations(['set_userphoto', 'set_username']),
      quitFn() {
        Dialog.confirm({
          title: '提示',
          message: '确定要退出登陆吗'
        }).then(() => { //用户点击确认后执行then
          localStorage.clear()
          this.set_username('')

          this.$router.replace('/layout/home')
        }).catch(() => { //用户点击取消后执行cancel
          // on cancel
        });
      },
    },
    computed: {
      ...mapState(['userphoto', 'username'])
    }
  }
</script>

<style lang="less" scoped>
  .top {
    height: 28vh;
    background-color: #007bff;
    position: relative;
    font-size: 14PX;

    .user {
      position: absolute;
      top: 25Px;
      width: 100%;

      .user-name {
        position: absolute;
        left: 80Px;
        top: 5Px;

        span {
          font-size: 14Px;
          color: white;
          font-weight: 700;
        }

        button {
          margin-top: 5Px;
          display: block;
          border: none;
          width: 80Px;
          height: 20Px;
          text-align: center;
          line-height: 20Px;
          background-color: white;
          color: #007bff;
        }
      }

      img {
        width: 60Px;
        height: 60Px;
        margin-left: 10Px;
        border-radius: 100%;
      }
    }

    .top-bot {


      ul {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 30Px;
        text-align: center;

        li {
          flex: 1;
          font-size: 15Px;
          color: white;
        }
      }
    }
  }

  .van-nav-bar {
    /deep/ .van-icon {
      color: #575757;
      font-size: 15Px;
    }
  }
</style>