// import { response } from 'express';
import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from '../api/index.js';

export default {
    // mutation에 data를 넘기기 위한 api
    // context.commit('SET_NEWS', response.data);

    
    // ------------------------------------- async
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList()
            context.commit('SET_NEWS', response.data);
            // 비동기 순서 보장을 위해 항상 아래와 같이 promsie, async에서 결과값 반환시켜줄 것
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_JOBS({ commit }) {

        try {
            const response = await fetchJobsList()
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }

    },
    async FETCH_ASK({ commit }) {
        // api/index.js에서 에러처리 : try/catch
        const response = await fetchAskList()
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER(context, name) {
        try {
            const response = await fetchUserInfo(name)
            context.commit('SET_USER', response.data)
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_ITEM(context, id) {
        try {
            const response = await fetchCommentItem(id)
            context.commit('SET_ITEM', response.data)
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_LIST(context, pageName) {
        try {
            const response = await fetchList(pageName)
            context.commit('SET_LIST', response.data)
            return response;
        } catch (error) {
            console.log(error)
        }
    }




    // ------------------------------------- promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // 디스트럭처링
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then( ({data}) => commit('SET_JOBS', data))
    //         .catch(error => console.log(error));
    // },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //     .then( ({data}) => commit('SET_ASK', data))
    //     .catch(error => console.log(error));
    // },
    // async FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //     .then( ({data}) => commit('SET_USER', data))
    //     .catch(error => console.log(error))
    // },
    // async FETCH_ITEM({ commit }, id) {
    //     return fetchCommentItem(id)
    //     .then( ({data}) => commit('SET_ITEM', data))
    //     .catch(error => console.log(error))
    // },
    // async FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then( response => {
    //         commit('SET_LIST', response.data)
    //         return response;
    //     })
    //     .catch(error => console.log(error))
    // }
}