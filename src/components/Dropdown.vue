<template>
  <div class="dropdown" ref="dropdownRef">
      <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
      <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
        <slot></slot>  
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,watch } from "@vue/runtime-core";
import 'bootstrap/dist/css/bootstrap.min.css';
import useClickOutside from '../hooks/useClickOutside';

export default defineComponent({
  name: 'Dropdown',
  props:{
    title:{
      type: String,
      required: true,
    }
  },

  
  setup(){
    const isOpen=ref(false)
    //由于setup中不能使用ref所以新建一个ref对象
    //获取dom节点
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value=!isOpen.value
    }
    //dropdown的点击事件的处理函数
    //关闭下拉菜单的逻辑判断
    //(点下拉菜单本身不会关闭，但是点击下拉菜单之外的其他元素就会关闭下拉菜单)
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside,()=>{
      if(isOpen.value && isClickOutside.value){
      isOpen.value=false
    }
    })
    return {
      isOpen,
      toggleOpen,
      //此返回值必须和dom中的一样
      dropdownRef,
    } 
  } 
})
</script>
<style>
</style>