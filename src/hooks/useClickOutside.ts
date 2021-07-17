import { def } from "@vue/shared";
import { ref, Ref,onMounted,onUnmounted } from "vue";

//此项目封装的第一个函数：用于处理下拉菜单关闭
//此前虽然已经在GlobalHeader中写过了
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value=false        
            } else {
                isClickOutside.value=true
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
    return isClickOutside
}

export default useClickOutside
