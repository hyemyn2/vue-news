<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_NEWS')
  //   .then(() => {
  //     console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
    // created() {
        // this.$store.dispatch('FETCH_NEWS');
        // callback 자체의 this 바인딩이 컴포넌트를 바라보고 있지 않기 때문에 var vm =this;로 연결해주어야함
        // var vm = this;
        // but 아래처럼 arrow function로 해결 가능

        // fetchNewsList()
        // .then(response => this.users = response.data)
        // .catch(error => console.log(error));
    // }
}
</script>

<style scoped>
</style>
