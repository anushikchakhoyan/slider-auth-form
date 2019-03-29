import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './layouts/signIn';
import SignUp from './layouts/signUp';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/signIn',
            name: 'signIn',
            component: SignIn,
        },
        {
            path: '*',
            name: 'signIn',
            component: SignIn,
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUp,
        },
    ],
});
