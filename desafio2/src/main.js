// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.use(Vuex);
Vue.use(axios);

const store = new Vuex.Store({
    state: {
        user: {
            nombre: 'david',
            correo: 'davidolivero@gmail.com',
            edad: 6,
            id: ''
        },
        users: [],
        loading: false
    },
    mutations: {
        getUsers(state, users) {
            state.users = users;
            state.loading = false;
        },
        loadingTable(state) {
            state.loading = true;
        }
    },
    actions: {
        getUsers(context) {
            context.commit('loadingTable');
            axios.get('https://us-central1-conexion-vue.cloudfunctions.net/test/users')
                .then((accept) => {
                    let data = accept.data;
                    context.commit('getUsers', data);
                });
        }
    }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
