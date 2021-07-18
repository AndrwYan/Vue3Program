<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input 
        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="emailRef.val"
        @blur="validateEmail"
        >
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList,{ColumnProps} from './components/ColumnList.vue';
import GlobalHeader ,{UserProps} from './components/GlobaHeader.vue';
import validateInput ,{RulesProp} from './components/VaildateInput.vue';


const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const currentUser:UserProps={
  isLogin: true,
  name: "Frank"
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
    GlobalHeader,
    validateInput,
  },
  setup(){
    const emailRules:RulesProp=[
      { type: 'required',message:'电子邮箱地址不能为空!'},
      { type: 'email',message: '请输入正确的电子邮箱格式！'}
    ]
    const emailRef=reactive({
      val: '',
      error: false,
      message: '',
    })
    const validateEmail = () =>{
      if(emailRef.val.trim()===''){
        emailRef.error=true
        emailRef.message='can not be empty!'
      } else if(regEmail.test(emailRef.val)){
        emailRef.error=true
        emailRef.message='should be vaild Email !'
      }
    }
    return{
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
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
