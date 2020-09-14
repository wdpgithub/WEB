<template>
    <div>
        <p>{{ms1}}</p>
        <button @click="demo2('fen')">点击</button>
    </div>
</template>
<script>
import store from "@/vuex/store.js";
import {mapState,mapMutations} from 'vuex'
export default {
    store,
    computed:{
        ...mapState(['ms1'])
    },
    methods:{
        ...mapMutations(['demo2'])
    }
}
</script>
<style>

</style>
