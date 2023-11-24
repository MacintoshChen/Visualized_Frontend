
<template>
  <div>
    <vue-tree
      style="width: 800px; height: 500px; border: 1px solid gray"
      :dataset="sampleData"
      :config="treeConfig"
    >
      <template v-slot:node="{ node, collapsed }">
        <span
          class="tree-node"
          :style="{
            border: collapsed ? '1px solid grey' : '',
            borderRadius: '50%',
          }"
          >{{ node.value }}</span
        >
      </template>
    </vue-tree>
    输入进程表达式:<input type="text" placeholder="请输入进程表达式" v-model="name">
    <!--button @click='handleClickedConfirmButton'>确定</button-->
    <button @click="handleClickedSimplifyButton">简化</button>
  </div>
</template>

<script>
import VueTree from "@ssthouse/vue-tree-chart";
import axios from 'axios'



export default {

  name:'MyTree',

  components: { VueTree },

  data() {
    return {
      sampleData: {
        value: "",
        children: []
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 100 },
      name:"",
      index: 2, 
      str: '',
    };
  },

  methods:{

    parseTree(tree_node){
        var child = 0;
        for(;this.index < this.str.length;){
          if(this.str.slice(this.index, this.index+1) == '('){
            this.index++;
            this.parseTree(tree_node.children[child-1]);
          }else if(this.str.slice(this.index, this.index+1) == ')'){
            this.index++;
            return;
          }else{
            tree_node.children.push({value: this.str.slice(this.index, this.index+1), children:[]});
            this.index++;
            child++;
          }
        }
        return;
      },

      handleClickedSimplifyButton(){
        axios({
          method: 'GET',
          url:"http://localhost:8083/" + this.name,
        }).then(data =>{
          this.str = data.data;
          let tree = {value:this.str[0], children:[]};
          this.parseTree(tree);
          this.sampleData = tree;
          this.index = 2;
          this.str = '';
        })
      },

      handleClickedConfirmButton(){
        axios({
          method: 'POST',
          url:"http://localhost:8083/" + "a",
          data:{
            title:"hello",
            author:"CY"
          }
        })
        this.index = 2;
        
        //有个传回来的data
        let tree = {value:"s", children:[]};
        this.parseTree(tree);
        this.sampleData = tree;
      },
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
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: antiquewhite;
  text-align: center;
  line-height: 14px;
}
</style>