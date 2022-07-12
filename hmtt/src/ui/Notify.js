//对vant进行二次封装
//针对反馈的Notify进行封装
import { Toast } from 'vant'

export default ({ type, message }) => {
  if (type === 'danger') {
    type = 'fail'
  }
  return Toast({
    type,
    message,
  })
}
