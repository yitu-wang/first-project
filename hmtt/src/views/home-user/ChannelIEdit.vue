<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="挑选频道" right-text="X" @click-right="onClickRight" />
    <!-- 我的频道 -->
    <div class="my">
      <van-cell title="我的频道" :value="titleText" @click="checkText" />
      <van-button type="default" v-for="item in userList" :key="item.id" @click="userDeChannel(item)">{{ item.name }}
        <van-icon name="cross" v-show="iconShow && item.id !== 0" />
      </van-button>
    </div>
    <div class="more">
      <van-cell title="点击添加更多频道" />
      <van-button type="default" v-for="item in unCheckList" :key="item.id" @click="moreFn(item)">
        {{ item.name }}
      </van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'channeliedit',
    data() {
      return {
        iconShow: false,
        titleText: '编辑',
      }
    },
    methods: {
      //频道管理右方x号点击事件
      onClickRight() {
        this.iconShow = false
        this.titleText = '编辑'
        this.$emit('channelShow', false)

      },
      //编辑我的频道右方按钮
      checkText() {
        if (!this.iconShow) {
          (this.iconShow = true), (this.titleText = '完成')
        } else {
          this.iconShow = false
          this.titleText = '编辑'
        }
      },
      //添加更多频道方法
      //因为点击的更多频道需要判断是哪一个，所以需要传递每个对象，后续将这个对象加入到用户勾选的数组
      moreFn(item) {
        if (this.iconShow) {
          //处于编辑状态
          this.$emit('addChannelEV', item)
        }
      },
      //用户删除频道方法&&点击跳转
      userDeChannel(item) {
        if (this.iconShow === true) {
          if (item.id !== 0) {
            this.$emit('removeChannelEV', item.id)
          }
        } else if (this.iconShow === false) {
          this.$emit('channelShow', false)
          this.$emit('input', item.id)
        }
      }
    },
    props: {
      userList: Array,
      unCheckList: Array,
    },
  }
</script>

<style lang="less" scoped>
  .van-nav-bar {
    background-color: #007bff;

    /deep/.van-nav-bar__title {
      color: white;
    }

    /deep/.van-nav-bar__text {
      color: white;
    }
  }

  .van-button {
    width: 22%;
    margin: 3px 5.3px;
    padding: 0px;
    text-align: center;
    position: relative;

    .van-icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
</style>