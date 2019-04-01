import Vue from 'vue';
import Router from 'vue-router';
import LoginReg from './layouts/loginReg';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: 'loginRegistration',
            component: LoginReg,
        }
    ],
});
