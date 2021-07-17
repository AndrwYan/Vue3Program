
<template>
    <div class="row"> 
        <div v-for="column in list" :key="column.id" class="col-4"> 
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img class="rounded-circle border border-light w-25 my-3" src="column.avatar" alt="column.title">
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-left">{{column.description}}</p>
                    <a href="#" class="btn btn-outline-primary">进入专栏！</a>
                </div>
            </div>  
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export interface ColumnProps{
    id: number,
    title: string,
    avatar: string,
    description: string,
}
export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            //将构造函数断言成类型,添加PropType
            type: Array as PropType<ColumnProps[]>,
            required: true,
        }
    },

})
</script>
