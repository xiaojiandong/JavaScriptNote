<template id="goodDetail">
  <div class="bye-wrap">
    <p>商品名称：</p>
    <p>商品价格：</p>
    <p>商品库存：</p>
    <!--<hello></hello>-->
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  el : '#goodDetail',
  data (){
    return {
      name : '鞋子',
      price : 210,
      stock : 30
    }
  }
}
</script>

<style scoped>

</style>