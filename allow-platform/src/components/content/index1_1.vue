<template>
    <div>
        <!-- <h1>index1_1</h1> -->
        <el-container>
            <el-header>
                <!-- <p>tab标签</p> -->
                <!-- <button @click='handleClick'>改变text的值</button> -->
                <p>{{this.$store.state}}</p>
                <p>{{this.$store.getters.getState}}</p>
                <button v-on:click='addFun'>+</button>
                <button @click='reduceFun'>-</button>
                <el-tabs type='card' v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="新增申请" name="first"></el-tab-pane>
                    <el-tab-pane label="申请记录" name="second"></el-tab-pane>
                    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
                </el-tabs>                
            </el-header>
            <el-main>
                <!-- <p>{{text}}</p> -->
                <!-- tab：first下的内容 -->
                <div v-show="activeContent[0]" class="first-content">
                    <p>first</p>
                    <el-steps :active="stepactive" finish-status="success">
                        <el-step title="步骤 1"></el-step>
                        <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3"></el-step>
                    </el-steps>
                    <el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </div>

                <!-- tab：second下的内容 -->
                <div v-show="activeContent[1]" class="second-content">
                    <el-table
                        border
                        height="250"
                        v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :row-class-name="tableRowClassName"
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="申请日期"
                            width="180">
                            <template slot-scope="scope">
                                <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="申请人"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="流程状态">
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleLook(scope.row)" type="text" size="small">查看</el-button>
                                <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="申请记录详情信息" :visible.sync="dialogTableVisible">
                            <el-form v-model="form" label-position="left" block class="demo-table-expand">
                                <el-form-item label="申请日期">
                                    <span>{{ form.date }}</span>
                                </el-form-item>
                                <el-form-item label="申请人">
                                    <span>{{ form.name }}</span>
                                </el-form-item>
                                <el-form-item label="流程状态">
                                    <span>{{ form.status }}</span>
                                </el-form-item>
                            </el-form>
                    </el-dialog> 
                </div>      
                
                <!-- tab：third下的内容 -->
                <div v-show="activeContent[2]" class="third-content">
                    <p>third</p>
                </div>

                <!-- tab：fourth下的内容 -->
                <div v-show="activeContent[3]" class="fourth-content">
                    <p>fourth</p>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import {add} from '../../js/base.js';
import { constants } from 'crypto';
// 引入axios封装模块
import {instance} from '../../js/http.js';

export default {
    data() {
        return {
            loading: false,
            dialogTableVisible: false,
            stepactive: 0,   // 新增申请的步骤
            activeName: 'second',   // tab的激活
            activeContent: [false,true,false,false],      // tab 对应的content的激活
            text: '默认值',
            tableData: [{
            date: '2018-05-03',
            name: '张三',
            status: '进行中'
            }, {
            date: '2018-05-02',
            name: '李四',
            status: '打回'
            }, {
            date: '2018-05-04',
            name: '宋小宝',
            status: '通过'
            }],
            form: {
                date: '',
                name: '',
                status: ''
            },
            res_getlist: ''     // 接收接口返回值
        }
    },
    updated: function(){
        console.log('come in updated');
        // 后端数据返回后
        // 关闭loading
        // 渲染页面数据
        this.loading = false;
    },
    methods: {
        handleClick: function(tab, event, row){
            this.text = '新值';
            console.log(tab);
            console.log(row);
            console.log(this.activeName);
            // 干掉所有的
            for(let temp in this.activeContent){
                this.activeContent[temp] = false;
            }
            // 留下当前点击的
            this.activeContent[tab.index] = true;
        },
        handleLook: function(row){
            console.log(row);
            this.dialogTableVisible = true;
            this.form.date = row.date;
            this.form.name = row.name;
            this.form.status = row.status;
        },        
        handleEdit: function(row){
            console.log(row);
        },
        tableRowClassName({row, rowIndex}) {
            if(row.status=='打回'){
                return 'warning-row';
            }else if(row.status=='通过'){
                return 'success-row';
            }else{
                return '';
            }
            // if (rowIndex === 1) {
            //     return 'warning-row';
            // } else if (rowIndex === 3) {
            //     return 'success-row';
            // }
            // return '';
        },
        pre: function() {
            console.log(this.stepactive);
            this.stepactive -= 1;
            if(this.stepactive < 0){
                this.stepactive = 0;
            }
        },
        next: function() {
            // 没完成一步点击next 就提交一次表单请求
            console.log(this.stepactive);
            this.stepactive += 1;
            if(this.stepactive > 3){
                this.stepactive = 3;
            }
        },
        // 异步转同步
        async getAllData() {
            // 请求接口返回的是个Promise，异步函数 这里用async await改成同步
            console.log('调/activity/duanwu/index接口');
            let resd = '';
            await instance.get('/api/activity/duanwu/index')
                .then(res => {
                    resd = res;
                    });
                    console.log(resd);
        },
        // 异步
        getmockData(){
            console.log('调mock接口');
            // instance.get('/data/index')
            this.$http.get('/data/index',{
                params:{}
            }).then(res=>{
                console.log('data='+res);
            }).catch(err=>{
                console.log('error'+err)
            });
        },
        addFun(){
            // this.$store.commit('add');
            this.$store.dispatch('addFun');
        },
        reduceFun(){
            // this.$store.commit('reduce');
            this.$store.dispatch('reduceFun');
        }
    },
    created: function(){    // 在模板渲染成html 或者 模板编译进路由前调用
        // loading动效
        console.log('come in created');
        // 实例创建完成 进行调用后端接口 并展示loading动效
        // loading
        this.loading = true;
        // 请求接口
        // let data = this.httpGet();
        // console.log(data);
    },
    mounted: function(){    // 在模板渲染成html后 调用数据方法
        // 调用接口
        this.getAllData();
        this.getmockData();
    }    
}
</script>

<style lang='scss'>
@import '../../css/reset.scss';
@import '../../css/base.scss';
    .el-table .warning-row {
        background: rgb(248, 210, 210);
    }
    .el-table .success-row {
        background: #f0f9eb;;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }    
</style>