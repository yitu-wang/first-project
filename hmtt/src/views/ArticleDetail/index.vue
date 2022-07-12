<template>
  <div class="total">
    <!-- 头部区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- 文章等待加载模块 -->
    <div class="wite" v-if="Object.keys(obj).length===0">
      <van-loading vertical>文章加载中</van-loading>
    </div>
    <!-- 文章信息区域 -->
    <div v-else>
      <div class="article-container">
        <!-- 文章标题 -->
        <h1 class="art-title">{{obj.title}}</h1>
        <!-- 用户信息 -->
        <van-cell center :title="obj.aut_name" :label="timer(obj.pubdate)">
          <template #icon>
            <img :src="obj.aut_photo" alt="">
          </template>
          <template #default>
            <div @click="followFN(obj)">
              <van-button type="info" size="mini" v-if="obj.is_followed">已关注
              </van-button>
              <van-button icon="plus" type="info" size="mini" plain v-else>关注</van-button>
            </div>
          </template>
        </van-cell>

        <van-divider></van-divider>

        <!-- 文章内容 -->
        <div class="art-content" v-html="obj.content"></div>

        <van-divider>End</van-divider>

        <!-- 点赞 -->
        <div class="like-box" @click="attitudeFn">
          <van-button icon='good-job' type='danger' size="small" v-if="obj.attitude==1">已点赞</van-button>
          <van-button icon='good-job-o' type='danger' plain size="small" v-else>点赞</van-button>

        </div>
      </div>
      <Comment></Comment>
    </div>

  </div>
</template>

<script>
  //引入文章评论
  import Comment from "@/views/ArticleDetail/Comment.vue"
  //导入格式化时间函数
  import {
    timeAgo
  } from '@/utils/date.js'
  //导入请求体
  import {
    detailAPI,
    userFollowAPI,
    removeFollowAPI,
    likeArticleAPI,
    unLikeArticleAPI
  } from "@/api/index.js"

  export default {
    name: 'articledetail',
    data() {
      return {
        obj: {},

      }
    },
    async created() {
      const res = await detailAPI({
        artId: this.$route.query.art_id
      })
      this.obj = res.data.data

    },
    methods: {
      timer: timeAgo,
      //点击关注按钮切换
      async followFN(obj) {
        //为true时表示关注=>取关
        if (obj.is_followed) {
          const res = await removeFollowAPI({
            userId: obj.aut_id
          })
        } else {
          const res = await userFollowAPI({
            userId: obj.aut_id
          })
        }
        obj.is_followed = !obj.is_followed
      },
      //点赞按钮切换
      async attitudeFn() {
        //为1时表示喜欢=>不喜欢
        if (this.obj.attitude == 1) {
          this.obj.attitude = 0
          const res = await unLikeArticleAPI({
            artId: this.$route.query.art_id
          })
        } else {
          this.obj.attitude = 1
          const res = await likeArticleAPI({
            target: this.$route.query.art_id
          })
        }
      }
    },
    components: {
      Comment
    }
  }
</script>

<style lang="less" scoped>
  .like-box {
    display: flex;
    justify-content: center;
  }

  .avatar {
    width: 60Px;
    height: 60Px;
    border-radius: 50%;
    background-color: #f8f8f8;
    margin-right: 5Px;
    border: none;
  }

  .van-cell {
    padding: 5Px 0;

    &::after {
      display: none;
    }
  }

  .article-container {
    font-size: 12Px;
    line-height: 24Px;
    width: 100%;
    overflow-x: scroll;
    word-break: break-all;

    /deep/ img {
      width: 10%;
    }

    /deep/ pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }

  .art-title {
    font-size: 16Px;
    font-weight: 700;
    margin: 10Px 0;
  }

  .article-container {
    padding: 10Px;
    margin-top: 46Px;
  }

  .wite {
    position: absolute;
    top: 50%;
    left: 40%;
  }
</style>