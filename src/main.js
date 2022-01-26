import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
