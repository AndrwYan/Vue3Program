<template>
  <li class="dropdown-option"
      :class="{'is-disabled':disabled}"
  >
      <slot></slot>      
  </li>  
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props:{
        disabled: {
            type: Boolean,
            default:false,
        }
    }
})
</script>

<style>
.dropdown-option.is-disabled*{
    color: aquamarine;
    pointer-events: none;
    background-color: transparent;
}
</style>