<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input 
        :rules="emailRules" 
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
        /> 
      </div>

      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input 
        placeholder="请输入密码！" 
        :rules="passwordRules" 
  
        type="text"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref} from 'vue';
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
    const emailVal=ref('Frank');
    const emailRules:RulesProp=[
      { type: 'required',message:'电子邮箱地址不能为空!'},
      { type: 'email',message: '请输入正确的电子邮箱格式！'}
    ]

    const passwordRules:RulesProp=[
      {type: 'required',message:'密码不能为空'},
      {type: 'password',message: '请输入正确的密码'}
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
      emailVal,
      passwordRules,

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
