

<template>
    <nav class="navbar navbar-dark bg-dark">
        <a href="#" class="navbar-brand">者也专栏</a>
        <ul v-if="!user.isLogin">
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
        </ul>
        <ul v-else><a href="#" class="btn btn-outline-light my-2">你好！{{user.name}}</a></ul>  
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import 'bootstrap/dist/css/bootstrap.min.css';

export interface UserProps{
    isLogin: boolean;
    name?:string;
    id?:number;
}
export default defineComponent({
    name: 'GlobalHeader',
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true,
        }
    },
})
</script>

<style>

</style>