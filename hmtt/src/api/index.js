//存储请求函数模块
//每个方法负责请求一个方法
import request from '@/utils/request.js'

//登录接口
export const loginAPI = ({ mobile, code }) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code,
    },
  })
}
//刷新token
export const freshTokenAPI = () => {
  return request({
    url: '/v1_0/authorizations',
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('refresh_token'),
    },
  })
}
//获取所以频道
export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels',
  })
}
//获取用户的频道
export const getUserChannelsAPI = () => {
  return request({
    url: '/v1_0/user/channels',
    // headers: {
    //   Authorization: `Bearer ${getToken()}`,
    // },
  })
}
//获取更新覆盖后的频道
export const updateChannelsAPI = (channels) => {
  request({
    url: '/v1_0/user/channels',
    method: 'PUT',
    data: {
      channels, //用户已选择的频道数组
    },
  })
}
//删除用户频道接口
export const removeChannelsAPI = ({ channelID }) => {
  request({
    url: `/v1_0/user/channels/${channelID}`,
    method: 'DELETE',
  })
}
//获取推荐文章列表
export const getArticleListAPI = ({ channel_id, timestamp }) => {
  return request({
    url: '/v1_0/articles',
    // headers: {
    //   Authorization: `Bearer ${getToken()}`,
    // },
    params: {
      channel_id,
      timestamp,
    },
  })
}
// 反馈不感兴趣
export const dislikeArticleAPI = (artId) =>
  request({
    url: '/v1_0/article/dislikes',
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${getToken()}`,
    // },
    data: {
      target: artId,
    },
  })
//文章反馈-反馈垃圾内容
export const reportArticleAPI = ({ artId, type }) =>
  request({
    url: '/v1_0/article/reports',
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${getToken()}`,
    // },
    data: {
      target: artId,
      type: type,
      remark: '',
    },
  })
//定义关键词联想的接口
export const suggestListAPI = ({ keyword }) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q: keyword,
    },
  })
}
//定义搜索结果页面接口
export const searchResultAPI = ({ page = 1, per_page = 10, q }) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q,
    },
  })
}
//获取新闻详情页
export const detailAPI = ({ artId }) => {
  return request({
    url: `/v1_0/articles/${artId}`,
  })
}
//用户关注
export const userFollowAPI = ({ userId }) => {
  return request({
    url: '/v1_0/user/followings',
    method: 'POST',
    data: {
      target: userId,
    },
  })
}
//用户取消关注
export const removeFollowAPI = ({ userId }) => {
  return request({
    url: `/v1_0/user/followings/${userId}`,
    method: 'DELETE',
  })
}
//用户为文章点赞
export const likeArticleAPI = ({ target }) => {
  return request({
    url: '/v1_0/article/likings',
    method: 'POST',
    data: {
      target: target,
    },
  })
}
//用户取消点赞
export const unLikeArticleAPI = ({ artId }) => {
  return request({
    url: `/v1_0/article/likings/${artId}`,
    method: 'DELETE',
  })
}
//获取评论数据
export const commentsAPI = ({ id, offset = null }) => {
  return request({
    url: '/v1_0/comments',
    params: {
      type: 'a',
      source: id,
      offset,
    },
  })
}
//对评论进行点赞
export const commentsLikeAPI = ({ id }) => {
  return request({
    url: '/v1_0/comment/likings',
    method: 'POST',
    data: {
      target: id,
    },
  })
}
//对评论取消点赞
export const commentsUNLikeAPI = ({ id }) => {
  return request({
    url: `/v1_0/comment/likings/${id}`,
    method: 'DELETE',
  })
}
//对文章或者评论进行评论
export const addCommentAPI = ({ id, content }) => {
  return request({
    url: '/v1_0/comments',
    method: 'POST',
    data: {
      target: id, //文章id或者评论的id
      content,
    },
  })
}
//获取用户详细信息
export const getUsertotalAPI = () => {
  return request({
    url: '/v1_0/user',
  })
}
//获取个人资料接口
export const getUserAPI = () => {
  return request({
    url: '/v1_0/user/profile',
  })
}
//获取用户关注列表
export const getUserLikeAPI = () => {
  return request({
    url: '/v1_0/user/followings',
    params: {
      page,
      per_page,
    },
  })
}
//编辑用户头像接口
export const changeImgAPI = (fd) => {
  return request({
    url: '/v1_0/user/photo',
    method: 'PATCH',
    data: fd, //这里的fd为外面一会传进来的new Fordata（）表单对象
    //当请求头为formdata格式时，data千万不能加大括号形成json对象的格式
  })
}
//编辑用户的个人资料
export const changeUserAPI = ({ name, gender, birthday, intro }) => {
  return request({
    url: '/v1_0/user/profile',
    method: 'PATCH',
    data: {
      name,
      gender,
      birthday,
      intro,
    },
  })
}
