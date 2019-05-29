import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建Vuex实例
const store = new Vuex.Store({
    // 通过 this.$store.state来获取我们定义的数据
    state: {
        count:1,
        routerIndex:'home',  // 控制路由的状态量 各组件共享 根据状态量切换路由 显示不同组件
        isCurrentPage: true     // 是否在当前页渲染页面
    },
    getters: {
        getState(state){
            return state.count;
        },
        getRouterIndex(state){
            return state.routerIndex;
        },
        getIsCurrentPage(state){
            return state.isCurrentPage;
        }
    },
    mutations: {
        add(state){
            state.count = state.count + 1;
        },
        reduce(state){
            state.count = state.count - 1;
        },
        userinfo(state){
            state.routerIndex = 'userinfo';
        },
        isnotcurrentpage(state){
            state.isCurrentPage = false;
        }
    },
    actions: {
        addFun(context){
            context.commit('add');
        },
        reduceFun(context){
            context.commit('reduce');
        },
        routerUserInfo(context){
            context.commit('userinfo');
        },
        isNotCurrentPage(context){
            context.commit('isnotcurrentpage');
        }
    }
});

// 导出store
export default store;