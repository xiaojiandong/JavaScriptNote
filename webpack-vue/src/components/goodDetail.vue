<template id="goodDetail000">
  <div class="bye-wrap">
    <p>商品名称：{{goodListData.name}}</p>
    <p>商品价格：{{goodListData.price}}</p>
    <p>商品库存：{{goodListData.stock}}</p>
    <!--<hello></hello>-->
     <!--<p>名字：{{goodData1.name}}</p>-->
    <!--<p slot=""></p>  -->
     <!--<p>{{goodListData.name}}</p>-->
     <button v-if="clickData" @click="goodClick(clickData)">点击</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  //name : 'goodDetail000',
  data (){
    return {
      name : '鞋子',
      price : 210,
      stock : 30
    }
  },
  methods : {
    goodClick (clickData){
      console.log(clickData);
      this.$dispatch('event1',10);
    }
  },
  props : ['goodListData','clickData'],
  ready (){
     //console.log(this.goodListData);
  }
}
</script>

<style scoped>

</style>