<template>
    <!-- .vue的组件只能被一个div根包裹 -->
    <div>
        <!-- App页面 暂时不做路由 等需要往二级页跳转的时候再做路由的逻辑 -->
        <Header></Header>
        <Content></Content>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'
// 引入自定义的外部js文件中的方法
import {add} from '../js/base.js'

export default {
    components: {
        Header,
        Content,
        Footer
    },
    data(){
        return {
            text:'Hello vue'
        }
    },
    methods: {
        say:function(){
            alert('hello vue');
        },
        add: add
    }
}
</script>


<style lang='scss'>
@import '../css/reset.scss';
@import '../css/base.scss';

// 使用scss做css的预编译处理
    $color:rgb(15, 197, 46);
    div{
        div#box{
            // 调用scss中定义的mixin（方法）
            @include font-dpr(16px);
            @include px2rem(width, 100px);
            @include px2rem(height, 100px);
            border: 1px solid red;
            color: $color;
        }
    }
</style>
