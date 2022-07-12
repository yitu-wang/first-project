<template>
  <div>
    <keep-alive include="home,user,login,layout,chat">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  //导入默认样式
  import './styles/public.css'
  //导入封装好的请求
  import {
    getAllChannelsAPI
  } from '@/api/index.js'

  export default {
    name: 'app',
    async created() {
      //利用try+catch捕获错误信息
      try {
        const {
          data: res
        } = await getAllChannelsAPI()
      } catch (err) {
        //err拿到的是错误对象
        console.dir(err)
      }
    },
  }
</script>

<style></style>