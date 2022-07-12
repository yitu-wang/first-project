//评论组件
<template>
  <div>
    <!-- 评论列表 -->
    <div class="cmt-list" :class="{'art-cmt-container-1':addClass,'art-cmt-container-2':!addClass}">
      <!-- 评论的item项 -->
      <div class="cmt-item" v-for="item in commentList" :key="item.com_id">
        <div class="cmt-header">
          <div class="cmt-header-left">
            <img :src="item.aut_photo" alt="" class="avatar">
            <span class="uname">{{item.aut_name}}</span>
          </div>
          <div class="cmt-header-right" @click="likeFn(item)">
            <van-icon name="like" size="16" color="red" v-if="item.is_liking"></van-icon>
            <van-icon name="like-o" size="16" color="gray" v-else></van-icon>
          </div>
        </div>
        <!-- 主体部分 -->
        <div class="cmt-body">
          {{item.content}}
        </div>
        <!-- 尾部部分 -->
        <div class="cmt-footer">{{timer(item.pubdate)}}</div>
      </div>
    </div>
    <!-- 底部添加评论区域 -->
    <div class="add-cmt-box van-hairline--top" v-if="addShow">
      <van-icon name='arrow-left' size='18px' @click="$router.back()"></van-icon>
      <div class="ipt-cmt-div" @click="addShow=false,addClass=false">发表评论</div>
      <div class="icon-box">
        <van-badge>
          <van-icon name='comment-o' size='20px' :badge="total===0? '':total" max="99" @click="commentClickFn">
          </van-icon>
        </van-badge>
        <van-icon name='star-o' size='20px'></van-icon>
        <van-icon name='share-o' size='20px'></van-icon>
      </div>
    </div>
    <!-- 底部添加评论区域-2 -->
    <div class="cmt-box van-hairline--top" v-else>
      <textarea placeholder="友善评论，理性发言，阳光心灵" v-model.trim="value" @blur="lostFn" v-fofo></textarea>
      <van-button type='default' @click="addCommentFn">发布</van-button>
    </div>
  </div>
</template>

<script>
  //引入格式化时间方法
  import {
    timeAgo
  } from '@/utils/date.js';
  //引入评论接口
  import {
    commentsAPI,
    commentsLikeAPI,
    commentsUNLikeAPI,
    addCommentAPI
  } from "@/api/index.js"

  export default {
    name: 'comment',
    data() {
      return {
        offset: null, //偏移量评论id
        commentList: [],
        addShow: true, //添加评论的面板控制
        value: '',
        addClass: true, //底部padding动态类名控制
        total: 0
      }
    },
    created() {
      this.commentsListFn()
    },
    methods: {
      //封装评论列表请求的函数
      async commentsListFn() {
        const res = await commentsAPI({
          id: this.$route.query.art_id
        })
        this.commentList = res.data.data.results
        this.total = res.data.data.total_count
      },
      //这个是格式化时间的方法
      timer: timeAgo,
      //对评论喜欢或者不喜欢
      async likeFn(item) {
        if (item.is_liking) {
          const res = await commentsUNLikeAPI({
            id: item.com_id
          })
          item.is_liking = false
        } else {
          const res = await commentsLikeAPI({
            id: item.com_id
          })
          item.is_liking = true
        }
      },
      //失去焦点切换评论页
      lostFn() {
        setTimeout(() => {
          this.addShow = true
          this.addClass = true
        }, 0)
      },
      //点击发布评论
      async addCommentFn() {
        if (this.value !== '') {
          const res = await addCommentAPI({
            id: this.$route.query.art_id,
            content: this.value
          })
          this.value = ''
          this.addShow = true
        }
        this.commentsListFn()
        document.querySelector('.like-box').scrollIntoView({
          behavior: 'smooth'
        });
      },
      //点击评论图标滑动到评论
      commentClickFn() {
        document.querySelector('.like-box').scrollIntoView({
          behavior: 'smooth'
        });
      }
    },

  }
</script>

<style lang="less" scoped>
  .cmt-list {
    padding: 10px;


    .cmt-item {
      padding: 15Px 0;

      +.cmt-item {
        border-top: 1px solid #f8f8f8;
      }

      .cmt-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cmt-header-left {
          display: flex;
          align-items: center;

          .avatar {
            width: 40Px;
            height: 40Px;
            background-color: #f8f8f8;
            border-radius: 50%;
            margin-right: 15Px;
          }

          .uname {
            font-size: 12Px;
          }
        }
      }

      .cmt-body {
        font-size: 14Px;
        line-height: 28Px;
        text-indent: 2em;
        margin-top: 6Px;
        word-break: break-all;
      }

      .cmt-footer {
        font-size: 12Px;
        color: gray;
        margin-top: 10Px;
      }
    }
  }

  .art-cmt-container-1 {
    padding-bottom: 46Px;
  }

  .art-cmt-container-2 {
    padding-bottom: 80Px;
  }

  .add-cmt-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46Px;
    line-height: 46Px;
    padding-left: 10Px;

    .ipt-cmt-div {
      flex: 1;
      border: 1px solid #efefef;
      border-radius: 15Px;
      height: 30Px;
      font-size: 12Px;
      line-height: 30Px;
      padding-left: 15Px;
      margin-left: 10Px;
      background-color: #f8f8f8;
    }

    .icon-box {
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      line-height: 0;
    }
  }

  .child {
    width: 20Px;
    height: 20Px;
    background: #f2f3f5;
  }

  .cmt-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80Px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12Px;
    padding-left: 10Px;
    box-sizing: border-box;
    background-color: white;

    textarea {
      flex: 1;
      height: 66%;
      border: 1Px solid #efefef;
      background-color: #f8f8f8;
      resize: none;
      border-radius: 6Px;
      padding: 5Px;
    }

    .van-button {
      height: 100%;
      border: none;
    }
  }
</style>