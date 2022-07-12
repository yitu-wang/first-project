//用户编辑资料页面
<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.push('/layout/user')" />
    <!-- 编辑区域 -->
    <van-cell title="头像" is-link center>
      <template #default>
        <label for="imgChange">
          <van-image round class="avatar" :src="photo"></van-image>
        </label>
        <input type="file" name="imgChange" id="imgChange" v-show="false" @change="imgChange">
      </template>
    </van-cell>
    <van-cell title="名称" is-link :value="user.name" @click="userNameShow" />
    <van-dialog v-model="nameShow" title="修改姓名" show-cancel-button @confirm="changeName">
      <van-field v-model.trim="userName" placeholder="请输入用户名" v-fofo />
    </van-dialog>
    <van-cell title="性别" is-link :value="user.gender===1? '女':'男'" @click="sexShow=true" />
    <van-popup v-model="sexShow" position="bottom" :overlay="false" overlay>
      <van-picker :columns="columns" @cancel="sexShow=false" @confirm="changeSex" show-toolbar />
    </van-popup>
    <van-cell title="生日" is-link :value="user.birthday" @click="birShow=true" />
    <van-popup v-model="birShow" position="bottom" :overlay="false" overlay>
      <van-datetime-picker v-model="currentDate" type="date" @confirm="changeBir" :min-date="minDate"
        :max-date="maxDate" @cancel="birShow=false" />
    </van-popup>
  </div>
</template>

<script>
  import {
    mapMutations
  } from "vuex"
  import {
    getUserAPI,
    changeImgAPI,
    changeUserAPI
  } from "@/api/index.js"
  import {
    Dialog
  } from 'vant';
  import Notify from "@/ui/Notify.js"
  import {
    name
  } from 'dayjs/locale/zh';
  export default {
    name: 'edituser',
    data() {
      return {
        user: {}, //个人信息
        photo: '', //修改图片后的新地址
        nameShow: false,
        sexShow: false,
        birShow: false,
        columns: ['男', '女'],
        currentDate: new Date(),
        minDate: new Date(1999, 1, 1),
        maxDate: new Date(),
        userName: ''
      }
    },
    async created() {
      const res = await getUserAPI()
      this.user = res.data.data
      this.photo = res.data.data.photo
    },
    methods: {
      ...mapMutations(['set_userphoto', 'set_username']),
      //修改头像方法
      async imgChange(e) {
        if (e.target.files.length === 0) return
        //将这个文件的地址传入后端
        //1.创建Formdata对象
        let theFd = new FormData()
        theFd.append('photo', e.target.files[0]) //2.将图片数据推送到新建的表单对象中
        //3.发起请求
        const res = await changeImgAPI(theFd)
        this.photo = res.data.data.photo
        this.set_userphoto(res.data.data.photo)
      },
      //修改用户资料方法
      async changeUserAPI({
        name,
        gender,
        birthday,
        intro
      }) {
        const res = await changeUserAPI({
          name,
          gender,
          birthday,
          intro
        })
        console.log(res);
      },
      //修改姓名
      userNameShow() {
        this.nameShow = true
        this.userName = this.user.name
      },
      changeName() {
        let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,7}$/
        if (this.userName !== '' && reg.test(this.userName) === true) {
          this.changeUserAPI({
            name: this.userName
          })
          this.user.name = this.userName
          this.set_username(this.userName)
        } else {
          Notify({
            type: "warning",
            message: "用户名只能为中英文字符"
          })

        }
      },
      //修改性别
      changeSex(value, index) {
        this.user.gender = index
        this.changeUserAPI({
          gender: this.user.gender
        })
        this.sexShow = false
      },
      //定义时间函数
      formatDate(time) {
        var date = new Date(time);
        var year = date.getFullYear(),
          month = date.getMonth() + 1, //月份是从0开始的
          day = date.getDate()
        var newTime = year + '-' +
          month + '-' +
          day + ' '
        return newTime
      },
      //修改生日
      changeBir(value) {
        this.user.birthday = this.formatDate(value)
        this.changeUserAPI({
          birthday: this.user.birthday
        })
        this.birShow = false
      },

    }
  }
</script>

<style lang="less" scoped>
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

  .avatar {
    width: 50Px;
    height: 50Px;
  }
</style>