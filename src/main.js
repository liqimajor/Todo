import Vue from 'vue';
import router from './router';
import store from './store';
import App from './components/app';

import vMessage from './components/Message/index'
Vue.use(vMessage);

new Vue({
    router,
    store, // 使用store,这可以把 store 的实例注入所有的子组件
    render: h => h(App)
}).$mount("#root");
