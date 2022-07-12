<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ article.title }}</span>
          <!-- 单张图片 -->
          <img v-lazy="article.cover.images[0]" alt="" class="thumb" v-if="article.cover.type === 1" />
        </div>
        <!-- 三张图片 -->

        <div class="thumb-box" v-if="article.cover.type === 3">
          <img v-lazy="article.cover.images[0]" alt="" class="thumb" />
          <img v-lazy="article.cover.images[1]" alt="" class="thumb" />
          <img v-lazy="article.cover.images[2]" alt="" class="thumb" />
        </div>

      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{ article.aut_name }} &nbsp;&nbsp; {{ article.comm_count }}评论
            &nbsp;&nbsp; 发布日期 {{ formatTime(article.pubdate) }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" @click.stop="show = true" v-if="isShow" />
        </div>
      </template>
    </van-cell>
    <van-action-sheet v-model="show" :actions="actions" :cancel-text="bottomText" @select="onSelect" @cancel="onCancel"
      @close="closeFn" />
  </div>
</template>


<script>
  //导入x号点击模板
  import {
    firstActions,
    secondActions
  } from '@/api/report.js'
  import {
    timeAgo
  } from '@/utils/date.js'
  import {
    dislikeArticleAPI,
    reportArticleAPI
  } from '@/api/index.js'
  import Notify from '@/ui/Notify.js'
  export default {
    props: {
      article: [],
      isShow: {
        default: true,
        type: Boolean
      },
    },
    data() {
      return {
        bottomText: '取消',
        formatTime: timeAgo,
        show: false,
        actions: [{
            name: '不感兴趣',
          },
          {
            name: '反馈垃圾信息',
            //点击这个按钮时进行数据的切换
            //监听用户点击的是哪个按钮
          },
        ],
      }
    },
    methods: {
      //点击选项事件
      async onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        //item是点击的选项
        if (item.name === '反馈垃圾信息') {
          this.actions = secondActions
          this.bottomText = '返回'
        } else if (item.name === '不感兴趣') {
          const res = await dislikeArticleAPI(this.article.art_id)
          this.show = false
          Notify({
            message: '反馈成功',
            background: '#57ff5d'
          })
        } else {
          //二级的反馈选项
          const res2 = await reportArticleAPI({
            artId: this.article.art_id,
            type: item.value,
          })
          console.log(res2)
          this.show = false
          Notify({
            message: '反馈成功',
            background: '#57ff5d'
          })
        }
      },
      //点击取消事件
      onCancel() {
        if (this.bottomText === '返回') {
          this.show = true
          this.actions = firstActions
          this.bottomText = '取消'
        } else {
          this.show = false
        }
      },
      //点击蒙版取消事件
      closeFn() {
        this.actions = firstActions
      },
    },
  }
</script>

<style lang="less" scoped>
  .label-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .thumb {
    // 矩形黄金比例：0.618
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .thumb-box {
    display: flex;
    justify-content: space-between;
  }
</style>