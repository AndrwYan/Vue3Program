<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <columnList :list="list"></columnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList,{ColumnProps} from './components/ColumnList.vue';
import GlobalHeader ,{UserProps} from './components/GlobaHeader.vue'

const currentUser:UserProps={
  isLogin: false,

}
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
    avatar: 'http://fdsa',     
  }, 
  {
    id: 3,
    title: 'sdfw',
    description: "物理专栏！",
    avatar: 'http://dafa'
  },
  {
    id: 4,
    title: 'dfvcaa',
    description: "vvacada",
    avatar: 'http://www.baidu.com',
  }
  
]

export default defineComponent({
  name: 'App',
  components:{
    ColumnList,
    GlobalHeader,
  },
  setup(){
    return{
      list: testData,
      currentUser
    }
  }

});
</script>


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
