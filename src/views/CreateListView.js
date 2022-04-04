// 하이오더컴포넌트
// 데이터 요청 담당 (created)

import ListView from '../views/ListView.vue';
import bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
              console.log('fetched');
              bus.$emit('end:spinner');
            })
            .catch((error) => {
              console.log(error);
            });
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}