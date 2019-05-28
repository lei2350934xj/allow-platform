import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建Vuex实例
const store = new Vuex.Store({
    // 通过 this.$store.state来获取我们定义的数据
    state: {
        count:1
    },
    getters: {
        getState(state){
            return state.count;
        }
    },
    mutations: {
        add(state){
            state.count = state.count + 1;
        },
        reduce(state){
            state.count = state.count - 1;
        }
    },
    actions: {
        addFun(context){
            context.commit('add');
        },
        reduceFun(context){
            context.commit('reduce');
        }
    }
});

// 导出store
export default store;