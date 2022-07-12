<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false"
        offset="50">
        <item v-for="item in articleList" :key="item.art_id" :article="item"
          @click.native="$router.push(`/detail?art_id=${item.art_id}`)"></item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import {
    getArticleListAPI
  } from "@/api/index.js"
  import item from './ArticleItem.vue'

  export default {
    components: {
      item,
    },
    props: {
      articleListID: Number,
    },
    created() {
      this.getArticleList()
    },
    data() {
      return {
        articleList: [],
        loading: false,
        finished: false,
        theTime: new Date().getTime(), //用于分页，
        isLoading: false
      }
    },
    methods: {
      //将请求整理定义为一个
      async getArticleList() {
        const {
          data: res2
        } = await getArticleListAPI({
          channel_id: this.articleListID,
          timestamp: this.theTime,
        })
        this.articleList = [...this.articleList, ...res2.data.results]
        this.theTime = res2.data.pre_timestamp
        this.loading = false
        this.isLoading = false
        if (res2.data.pre_timestamp === null) {
          this.finished = true
          return
        }
      },
      //上滑刷新
      onLoad() {
        if (this.articleList.length === 0) {
          this.loading = false
          return
        }
        this.getArticleList()
      },
      //下拉刷新
      async onRefresh() {
        this.articleList = []
        this.getArticleList()
        this.$toast('刷新成功');
      },
    }
  }
</script>

<style></style>