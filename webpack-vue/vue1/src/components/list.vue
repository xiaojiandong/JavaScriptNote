
<template id="list">
  <div class="list-wrap">
   <h2>list.vue</h2>
   <h2>这里是src/components/list.vue中的内容</h2>
   <h2>这里是src/components/list.vue中的内容</h2>
    <!--<bye></bye>-->
   <a v-link="{name : 'bye'}">嵌套路由bye.vue</a>
   <!--<router-view></router-view>-->
  </div>
</template>

<script type="text/ecmascript-6">
import bye from './bye.vue';
export default {
  el : '#list',
  data () {
    return {}
  },
  methods : {

  },
  components : {
    bye
  }

}

</script>

<style lang="">
   .list-wrap{
       border: 4px solid blue;
   }
</style>