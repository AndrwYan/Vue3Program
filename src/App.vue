<template>
  <div class="container">
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList,{ColumnProps} from './components/ColumnList.vue';

const testData: ColumnProps[]=[
  {
    id: 1,
    title: 'test1的专栏',
    description: "关于生活！",
    avatar: 'http://vue',
  },
  {
    id: 2,
    title: 'fsafa',
    description: "nlscc",
    avatar: 'http://',     
  },  
]

export default defineComponent({
  name: 'App',
  components:{
    ColumnList,
  },
  setup(){
    return{
      list: testData
    }
  }

});
</script>

//bootstrap中container的基础样式
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
