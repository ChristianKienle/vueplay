<%_ if (vueVersion === '3') { _%>
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
<%_ } else { _%>
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
<%_ } _%>
