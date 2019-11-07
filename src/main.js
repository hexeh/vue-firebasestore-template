import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import dataLayer from '@/components/modules/dataLayer'

Vue.config.productionTip = false
Vue.prototype.$errorsBus = new Vue()
Vue.prototype.$dataLayer = new Vue(dataLayer)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
