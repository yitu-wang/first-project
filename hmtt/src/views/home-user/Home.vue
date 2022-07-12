<template>
  <div class="box" style="padding-bottom: 44px">
    <!-- 顶部 -->
    <div>
      <van-nav-bar style="background-color: #007bff" fixed>
        <template slot="left" class="text"> 论坛头条 </template>
        <van-icon
          name="search"
          slot="right"
          color="#ffffff"
          @click="$router.push('/search')"
        />
      </van-nav-bar>
    </div>
    <!-- 二级导航 -->
    <div class="main">
      <van-tabs v-model="active" sticky offset-top="44px">
        <van-tab
          v-for="(item, index) in userList"
          :key="item.id"
          :title="item.name"
          :name="item.id"
        >
          <ArticleList
            :articleListID="item.id"
            style="margin-top: 44px"
          ></ArticleList>
        </van-tab>
      </van-tabs>
      <van-icon
        name="plus"
        size="14px"
        class="moreChannels"
        @click="showPopup"
      ></van-icon>
    </div>
    <!-- 频道管理弹出层 -->
    <van-popup v-model="show" class="popup">
      <ChannelIEdit
        :userList="userList"
        :unCheckList="unCheckList"
        @addChannelEV="addChannelFn"
        @channelShow="channelShow"
        @removeChannelEV="removeChannelFn"
        v-model="active"
      ></ChannelIEdit>
    </van-popup>
  </div>
</template>

<script>
//引入接口函数
import {
  getUserChannelsAPI,
  getAllChannelsAPI,
  updateChannelsAPI,
  removeChannelsAPI,
} from '@/api'
//引入需要用的组件
import ArticleList from '@/components/ArticleList.vue'
import ChannelIEdit from './ChannelIEdit.vue'

export default {
  name: 'home',
  data() {
    return {
      active: 0,
      userList: [],
      allList: [],
      show: false,
    }
  },
  async created() {
    //获取用户频道列表
    const { data: res } = await getUserChannelsAPI()
    this.userList = res.data.channels
    //获取所有的频道列表
    const { data: res2 } = await getAllChannelsAPI()
    this.allList = res2.data.channels
  },
  components: {
    ArticleList,
    ChannelIEdit,
  },
  //页面dom元素加载完毕时执行
  mounted() {
    window.addEventListener('scroll', this.scrollListen)
  },
  methods: {
    //设置监听页面滚动方法
    scrollListen() {
      this.$route.meta.scrollT =
        document.documentElement && document.documentElement.scrollTop
    },
    showPopup() {
      this.show = true
    },
    //channelIEdit组件传出添加的组件(添加频道 )
    async addChannelFn(val) {
      //将新选的频道推送到用户频道
      this.userList.push(val)
      //还要将最新的数组发送给后台
      // 了解： 以前的要求：推荐频道不可以传入后台  并且后台接收的data中接受对象内容为 id频道id seq顺序序号
      const newArr = this.userList.filter((item) => item.id !== 0)
      // const newObjArr = newArr.map((item, index) => {
      //   const newObj = {
      //     ...item
      //   }
      //   delete newObj.name
      //   newObj.seq = index
      //   return newObj
      // })
      const res = await updateChannelsAPI(newArr)
    },
    //channel子件传递用户删除的频道按钮
    async removeChannelFn(val) {
      const index = this.userList.findIndex((item) => item.id === val)
      this.userList.splice(index, 1)

      const res = await removeChannelsAPI({
        channelID: val,
      })
      this.active = val
    },

    //点击channel子件右上方的x按钮隐藏管理页面
    channelShow(val) {
      this.show = val
    },
  },
  computed: {
    //计算属性计算所有频道-用户频道=剩下可选择的频道
    unCheckList() {
      //把所有频道数组对象依次取出对比用户已选频道里查找，如果查找不到则filter一个新数组
      const newArr = this.allList.filter((bigObj) => {
        const index = this.userList.some((smallObj) => {
          return smallObj.id === bigObj.id
        })
        if (index) {
          return false
        } else {
          return true
        }
      })
      return newArr
    },
  },
  //组件被缓存时触发的生命周期
  //组件没有被缓存则会执行destroyed销毁生命周期函数
  deactivated() {
    window.removeEventListener('scroll', this.scrollListen)
  },
  //组件被激活时触发的生命周期
  activated() {
    if (this.$route.meta.scrollT > 0) {
      window.scrollTo(0, this.$route.meta.scrollT)
      this.$route.meta.scrollT = 0
      window.addEventListener('scroll', this.scrollListen)
    }
  },
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__left {
  color: #ffffff;
}

/deep/.van-tabs__line {
  background-color: #007bff;
}

/deep/ .van-tabs__wrap {
  padding-right: 30px;
  background-color: #fff;
}

.moreChannels {
  position: fixed;
  top: 60px;
  right: 10px;
  z-index: 999;
}

.popup {
  width: 100vw;
  height: 100vh;
}
</style>