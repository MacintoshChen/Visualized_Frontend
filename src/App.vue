
<template>
  <div>
    <MyTree></MyTree>
    <MyTree></MyTree>
  </div>


</template>
<script>
import MyTree from './components/MyTree.vue'

export default {
  name:'App',
  components: { 
    MyTree
  },
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tree-node {
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: antiquewhite;
  text-align: center;
  line-height: 28px;
}
</style>