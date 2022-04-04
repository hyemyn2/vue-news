import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

// import createListView from '../views/CreateListView.js';
Vue.use(VueRouter)
export const router = new VueRouter({
    // history => hash값 제거
    mode: 'history', 
    routes: [
        //  {
        //      path: url 주소
        //      component: url 주소로 갔을 때 표시될 컴포넌트
        //  },

        // views 안의 컴포넌트 => 페이지의 라우팅에 관련된 정보들만 작성하는 것 권장
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                // to : 이동할 URL의 라우터 정보
                // from : 현재 URL의 라우터 정보
                // next : 실행
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        },
        {
            path: '/item/:id',
            name: 'item',   
            component: ItemView,
        }
    ]
})