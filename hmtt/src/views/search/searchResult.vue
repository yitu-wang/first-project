//这个是搜索结果的详情页
<template>
  <div>
    <!-- 搜索结果导航栏 -->
    <div class="search-result-container">
      <!-- 点击实现后退效果 -->
      <van-nav-bar title="搜索结果" left-arrow @click-left="$router.go(-1)" fixed style="background-color:#007bff">
      </van-nav-bar>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check=false
      offset="10">

      <ArticleItem v-for="item in resultList" :key="item.art_id" :article="item" :isShow="false"
        @click.native="$router.push(`/detail?art_id=${item.art_id}`)"></ArticleItem>
    </van-list>

  </div>
</template>

<script>
  import {
    searchResultAPI
  } from "@/api/index.js"
  import ArticleItem from "@/components/ArticleItem.vue"
  export default {
    data() {
      return {
        page: 1,
        resultList: [],
        loading: false,
        finished: false
      }
    },
    components: {
      ArticleItem
    },
    async created() {
      const res = await searchResultAPI({
        page: this.page,
        q: this.$route.params.kw
      })
      this.resultList = res.data.data.results
    },
    methods: {
      onLoad() {
        this.page++
        // 异步更新数据
        setTimeout(async () => {
          const res = await searchResultAPI({
            page: this.page,
            q: this.$route.params.kw
          })
          this.resultList = [...this.resultList, ...res.data.data.results]
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (res.data.data.results.length === 0) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-result-container {
    padding-top: 46Px;
  }

  .van-nav-bar {
    background-color: #007bff;


  }

  /deep/.van-nav-bar .van-icon {
    color: white;
  }

  /deep/.van-nav-bar__title {
    color: white;
  }
</style>