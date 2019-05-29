<template>
    <div class='Header-header'>
        <div class="container">
            <h1>
                <a href="#"><img src="../assets/img/logo.png" alt="返回主页"></a>
            </h1>
            <ul class="container-right">
                <li><input class='search-document' type="text" placeholder="搜索文档"></li>
                <li class='current-hover'>导航1</li>
                <li>导航2</li>
                <li>导航3</li>
                <li class='gap'>
                    <div></div>
                </li>
                <li class='user-info' @click='goToUserInfo'><router-link to="/userInfo">个人中心</router-link></li>
                <li class='quit'>退出</li>
            </ul>          
        </div>
        <div class='divider'></div>
    </div>
</template>

<script>
export default {
    methods: {
        goToUserInfo(){
            // this.$store.commit('add');
            this.$store.dispatch('routerUserInfo');
            this.$store.dispatch('isNotCurrentPage');
        }
    }
}
</script>

<style lang='scss'>
@import '../css/reset.scss';
@import '../css/base.scss';
    div.Header-header {
        @include font-dpr(16px);
        width: 100%;
        height: 80px;
        // background-color: rgb(34, 25, 27);
        div.container {
            width: 1140px;
            height: 80px;
            border-bottom: 1px solid #ebebeb;
            margin: 0 auto;
            ul.container-right {
                color:rgba(25,137,250,0.6);
                cursor: pointer;
                a {
                    color: rgba(25,137,250,0.6);
                    text-decoration: none;
                    // &:visited {
                    //     color: rgba(25,137,250,0.6);
                    // }
                }
                a:hover {
                    color: #409EFF;
                }
            }
            // background-color: rgb(190, 195, 197);
            h1 {
                float: left;
                width: 150px;
                a {
                    display: block;
                    cursor: pointer;
                    img {
                        width: 150px;
                        height: 80px;
                    }
                }
            }
            ul.container-right {
                float: right;
                width: 800px;
                height: 80px;
                li {
                    float: left;
                    color: rgba(25,137,250,0.6);
                    text-align: center;
                    line-height: 80px;
                    text-decoration: none;
                    width: 120px;
                    margin-right: 12px;
                    &:hover {
                        color: rgba(25,137,250,1);
                        cursor: pointer;
                    }
                }
                li.current-hover {
                    color: rgba(25,137,250,1);
                }
                input.search-document {
                    height: 30px;
                    border: 1px solid rgba(25,137,250,1);
                    border-radius: 5px;
                    text-align: center;
                }
                li.gap {
                    &:hover {
                        cursor:default;
                    }
                    width: 20px;
                    height: 80px;
                    div {
                        width: 1px;
                        height: 40px;
                        margin: 20px 0;
                        background-color: #ebebeb;
                    }
                }
                li.user-info {
                    width: 100px;
                    margin-left: 10px;
                }
                li.quit {
                    width: 100px;
                    margin-right: 0;
                }
            }
        }
    }
</style>