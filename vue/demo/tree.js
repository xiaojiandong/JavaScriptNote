// demo data
var data = {
  name: 'My Tree 我的树',
  count : 1,
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
};

console.log('data1 : ');
console.log(data);


// define the item component
Vue.component('itemLi', {
  template: '#item-template',
  replace: true,
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      alert('点击this.isFolder: ' + this.isFolder);
      if (this.isFolder) {
        this.open = !this.open
      }
      console.log(data);
    },
    changeType: function () {
      alert('changeType : ');
      if (!this.isFolder) {
        Vue.set(this.model, 'children', []);
        this.addChild();
        this.open = true;
      }
    },
    // 添加子节点
    addChild: function () {
      console.log(this.model);
      this.model.count += 1;
      this.model.children.push({
        name: 'new stuff 新员工名字 ' + (this.model.count)
      })
    }
  }
});

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
});

console.log('data2 : ');
console.log(demo.treeData);
