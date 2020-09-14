<template>
    <div>
        <p>我从父组件接收过来的:{{$store.state.ms1}}</p>
    </div>
</template>
<script>
import  store from '@/vuex/store.js'
export default {
    store
}
</script>

<style>

</style>
