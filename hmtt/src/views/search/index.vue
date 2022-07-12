// 搜索页面
<template>
  <div>
    <!-- 搜索头部 -->
    <div class="search-header" style="height: 46px">
      <van-icon name="arrow-left" color="white" size="18px" class="goback" @click="$router.go(-1)"
        style="padding-left: 14px" />
      <van-search placeholder="请输入关键词" background="#007bff" shape="round" v-fofo @input="inputFn" v-model="kw"
        @search="searchFn" />
    </div>
    <!-- 搜索关键词联想列表 -->
    <div class="sugg-list">
      <div class="sugg-item" v-for="(item,index) in keywordList" :key="index" v-if="kw.length!==0"
        v-html="lightFn(item, kw)" @click="suggestClick(item)">
      </div>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-show="kw.length===0">
      <!-- 标题 -->
      <van-cell title="搜索历史">
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="clearFn"></van-icon>
        </template>
      </van-cell>
      <!-- 历史列表 -->
      <div class="history-list">
        <span class="history-item" v-for="(item,index) in history" @click="historyClick(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    suggestListAPI
  } from "@/api/index.js"
  import router from '@/router'
  export default {
    data() {
      return {
        kw: '', //搜索关键词
        timer: null, //定时器
        keywordList: [], //关键词联想数组
        history: JSON.parse(localStorage.getItem('his')) || [] //利用json转换为数组对象格式
      }
    },
    methods: {
      //搜索框输入方法
      inputFn() {
        //防抖(设置定时器，然后每次触发时清除定时器)
        clearTimeout(this.timer)

        this.timer = setTimeout(async () => {
          if (this.kw.length === 0) return

          const {
            data: res
          } = await suggestListAPI({
            keyword: this.kw
          })
          this.keywordList = res.data.options
        }, 300)
      },
      //处理关键词高亮
      lightFn(str, target) {
        //str是原来的字符串
        //target是关键字
        //变量不能直接放入正则表达式中，需要新建正则实例
        let reg = new RegExp(target, 'ig')
        return str.replaceAll(reg, (match) => {
          return `<span style="color:red;">${match}</span>`
        })
      },
      //搜索事件
      searchFn() {
        if (this.kw.length === 0) return
        //将搜索的关键词保存到历史纪录里
        this.history.push(this.kw)
        setTimeout(() => {
          this.$router.push({
            path: `/search_result/${this.kw}`,
          })
        }, 0)

      },
      //点击联想列表跳转
      suggestClick(item) {
        this.history.push(item)
        setTimeout(() => {
          this.$router.push({
            path: `/search_result/${item}`,
          })
        }, 0)

      },
      //点击历史记录跳转
      historyClick(item) {
        this.$router.push({
          path: `/search_result/${item}`,
        })
      },
      //点击清空历史列表
      clearFn() {
        this.history = []
      }
    },
    //利用监听器将history的变化保存在本地
    watch: {
      history: {
        deep: true,
        handler() {
          //立即覆盖式的保存在本地
          //本地存储只能存储字符串类型，所以需要用json来转换
          //因为多次输入同一个关键词会被重复记录，所以需要去重
          const theSet = new Set(this.history)
          const arr = Array.from(theSet)
          localStorage.setItem('his', JSON.stringify(arr))
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-header {
    display: flex;
    align-items: center;
    background-color: #007bff;
    overflow: hidden;

    .van-search {
      flex: 1;
    }
  }

  .sugg-list {
    .sugg-item {
      padding: 0 15Px;
      border-bottom: 1Px solid #f8f8f8;
      font-size: 14Px;
      line-height: 50Px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .search-icon {
    font-size: 16Px;
    line-height: inherit;
  }

  .history-list {
    padding: 0 10Px;

    .history-item {
      display: inline-block;
      font-size: 12Px;
      padding: 8Px 14Px;
      background-color: #efefef;
      margin: 10Px 8Px 0Px 8Px;
      border-radius: 10Px;
    }
  }
</style>