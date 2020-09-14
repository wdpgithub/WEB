import vue  from  'vue'
import vuex from  'vuex'
vue.use(vuex)


//存放公共的数据
var state={
    ms1:'hello world'
}
// 存放公共的方法用于修改上面公共数据
var mutations={
    demo2(state,n){
        state.ms1=n
    }
}

export default new  vuex.Store({
    state,
    mutations
})