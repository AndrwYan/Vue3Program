<template>
    <div class="validate-input-container pb-3">
        <input 
        class="form-control"
        :class="{'is-invalid': inputRef.error}" 
        :value="inputRef.val"
        @blur="validateInput"
        @input="updateValue"
        v-bind="$attrs"
        >
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
      </div>
</template>

<script lang="ts">
import { reactive, defineComponent,PropType } from "vue";

interface RuleProp{
    type: 'required'|'email'|'password';
    message: string;
}
const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/


export type RulesProp = RuleProp[]
export default defineComponent({
    props: {
        rules: Array as PropType<RulesProp>,
        modelValue: String
    },
    setup(props,context){
        const inputRef=reactive({
            val: props.modelValue || '',
            error: false,
            message: '',
        })

        const updateValue=(e: KeyboardEvent)=>{
            const targetValue=(e.target as HTMLInputElement).value
            inputRef.val=targetValue
            context.emit('update:modelValue');
        }
        const validateInput=()=>{
           if(props.rules){
               const allPassed = props.rules.every(rule=>{
                   let passed=true;
                   inputRef.message=rule.message;
                    switch(rule.type){
                    case 'required':
                        passed=(inputRef.val.trim()!='')
                        break
                    case 'email':
                        passed=regEmail.test(inputRef.val)
                        break
                    default:
                        break

                    }
                    return passed
               })
               inputRef.error=!allPassed
           }
        }
        return {
            inputRef,
            validateInput,
            updateValue
        }
    }
})

</script>

