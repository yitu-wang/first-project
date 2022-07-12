import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import { Lazyload } from 'vant'

// options 为可选参数，无则不传
Vue.use(Lazyload, {
  preLoad: 0.8,
})
Vue.use(Vant)

Vue.config.productionTip = false

Vue.directive('fofo', {
  inserted(el) {
    if (el.nodeName === 'TEXTAREA') {
      el.focus()
    } else {
      let input = el.querySelector('input')
      input.focus()
    }
  },
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
