<template>
    <div class='content'>
        <!-- <el-container style="height: 720px; width:auto;"> -->
        <el-container>
            <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)"> -->
            <el-aside width="200px" style="height:720px; background-color: rgb(238, 241, 246)">
                <!-- <el-menu :default-openeds="['4']"> -->
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-film"></i>我的申请</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <!-- <el-menu-item index="1-1" @click="handleClick">资源位申请</el-menu-item> -->
                            <el-menu-item index="1-1" @click="handleClick"><router-link to="/index1_1">资源位申请</router-link></el-menu-item>
                            <el-menu-item index="1-2" @click="handleClick"><router-link to="/index1_2">渠道申请</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>我的审批</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="2-1" @click="handleClick"><router-link to="/index2_1">资源位审批</router-link></el-menu-item>
                            <el-menu-item index="2-2" @click="handleClick"><router-link to="/index2_2">渠道审批</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-notebook-1"></i>导航三</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航四</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="4-1">选项1</el-menu-item>
                            <el-menu-item index="4-2">选项2</el-menu-item>
                            <el-menu-item index="4-3">选项3</el-menu-item>
                            <el-menu-item index="4-4">选项4</el-menu-item>
                            <el-menu-item index="4-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航五</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="5-1">选项1</el-menu-item>
                            <el-menu-item index="5-2">选项2</el-menu-item>
                            <el-menu-item index="5-3">选项3</el-menu-item>
                            <el-menu-item index="5-4">选项4</el-menu-item>
                            <el-menu-item index="5-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航六</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="6-1">选项1</el-menu-item>
                            <el-menu-item index="6-2">选项2</el-menu-item>
                            <el-menu-item index="6-3">选项3</el-menu-item>
                            <el-menu-item index="6-4">选项4</el-menu-item>
                            <el-menu-item index="6-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航七</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="7-1">选项1</el-menu-item>
                            <el-menu-item index="7-2">选项2</el-menu-item>
                            <el-menu-item index="7-3">选项3</el-menu-item>
                            <el-menu-item index="7-4">选项4</el-menu-item>
                            <el-menu-item index="7-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="8">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航八</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="8-1">选项1</el-menu-item>
                            <el-menu-item index="8-2">选项2</el-menu-item>
                            <el-menu-item index="8-3">选项3</el-menu-item>
                            <el-menu-item index="8-4">选项4</el-menu-item>
                            <el-menu-item index="8-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="9">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航九</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="9-1">选项1</el-menu-item>
                            <el-menu-item index="9-2">选项2</el-menu-item>
                            <el-menu-item index="9-3">选项3</el-menu-item>
                            <el-menu-item index="9-4">选项4</el-menu-item>
                            <el-menu-item index="9-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>     
                    
                    <el-submenu index="10">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航十</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="10-1">选项1</el-menu-item>
                            <el-menu-item index="10-2">选项2</el-menu-item>
                            <el-menu-item index="10-3">选项3</el-menu-item>
                            <el-menu-item index="10-4">选项4</el-menu-item>
                            <el-menu-item index="10-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="11">
                        <template slot="title"><i class="el-icon-s-grid"></i>导航十一</template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                            <el-menu-item index="11-1">选项1</el-menu-item>
                            <el-menu-item index="11-2">选项2</el-menu-item>
                            <el-menu-item index="11-3">选项3</el-menu-item>
                            <el-menu-item index="11-4">选项4</el-menu-item>
                            <el-menu-item index="11-5">选项5</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <div class='mainbgc'>
                <div class='mainborder'>
                    <nav v-if='currentMenuIndex'><p style='color:#999;'>{{currentMenuIndex}}<span class='el-icon-arrow-right'></span></p></nav>
                    <div class="submainborder">
                        <div class="main">
                            <router-view></router-view>
                            <!-- 根据左边的导航 v-if不同的组件 -->
                            <!-- <index1_1 v-show="flagShowComponent['1-1']"></index1_1> -->
                        </div>
                    </div>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
import { constants } from 'crypto';
import { isIP } from 'net';
// 引入自定义的外部js文件中的方法
import {add} from '../js/base.js';
// import index1_1 from './content/index1_1.vue';


export default {
    components: {
        // index1_1: index1_1,
        // index1_2: index1_2,
        // index2_1: index2_1,
        // index2_2: index2_2,
    },
    data() {
      const item = {
        date: '2019-05-20',
        name: '百度',
        address: '北京海淀',
      };
      // 存放需要渲染的组件
      let arrComponents = {
          "1-1":false,
          "1-2":false,
          "2-1":false,
          "2-2":false
      };   
      return {
        tableData: Array(6).fill(item),
        activeName: "second",
        currentMenuIndex: '渠道申请',
        flagShowComponent: arrComponents,
        // flag: false
      }
    },
    methods: {
        /**
         * 功能：
         * 1.左侧tab切换
         * 2.右侧显示不同组件 表现形式为：先出DOM 然后这里做一个流光loading动效 等ajax结果回来再正式渲染数据
         * 3.利用axios发送ajax请求后端数据
         * 4.渲染后端返回值
         */
        handleClick: function(menu,event){
            console.log(menu);
            // // 打出的index就是v-if需要绑定的内容 打印多少 就渲染那个组件
            // console.log(menu.index);
            // console.log(this.activeName);
            // console.log(this.flagShowComponent);
            // menu.$el.innerHTML这个是从打印的menu中得知$el的值的
            // console.log(menu.$el.innerHTML);
            this.currentMenuIndex = menu.$el.innerText;
            // 干掉所有的
            for(let temp in this.flagShowComponent){
                this.flagShowComponent[temp] = false;
            }
            // 留下当前点击的
            this.flagShowComponent[menu.index] = true;
        }
    }
}
</script>

<style lang='scss'>
@import '../css/reset.scss';
@import '../css/base.scss';
    div.content {
        margin-top: 5px;
        width: 100%;    
        .el-menu-item {
            color: #303133;
            cursor: pointer;
            a {
                text-decoration: none;
                // &:hover {
                //     color: #409EFF;
                // }
                &:visited {
                    color: #303133;
                }
            }
            a:hover {
                color: #409EFF;
            }
        }
        div.mainbgc {
            width: 100%;
            padding: 20px;
            background-color: #ededed;
            box-shadow: 1px 1px 10px #888888 inset;      
            div.mainborder {
                min-height: 240px;
                // background-color: ghostwhite;
                background-color: #fff;
                padding: 40px 20px 10px;
                nav {
                    margin-bottom: 10px; 
                }
                div.submainborder {
                    min-height: 160px;
                    padding: 30px 20px 10px;
                    border: 2px solid #d8d8d8;
                    border-radius: 3px;
                    div.main {
                        margin-top: 10px; 
                    }
                }
            }
        }
        .el-aside {
            // overflow: scroll;
            // position: fixed;
            // top: 0;
            // left: 0;
            // color: #333;        
            el-menu-item {
                &:hover {
                    color: red;
                }
                &:focus {
                    color: rgba(25,137,250,1);
                }
            }
        }
    }
</style>