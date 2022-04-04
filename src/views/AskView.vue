<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { /* mapState, */ mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: {
    ListItem
  },
  // 인스턴스가 화면에 붙어졌을 때
  // mounted() {
  //   bus.$emit('end:spinner');
  // }

  mixins: [ListMixin],
  // created() {
  // bus.$emit('start:spinner');
  // this.$store.dispatch('FETCH_ASK')
  // .then(() => {
  //   console.log('fetched');
  //   bus.$emit('end:spinner');
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // }


    // computed: {
    // array방식
    // ...mapGetters(['fetchedAsk'])

    // #3
    // object방식
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk'
    // })

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
  // beforeMount,
  // mounted
}
</script>

<style scoped>
</style>