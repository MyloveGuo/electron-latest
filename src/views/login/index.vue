<template>
    <div>
        <div class="cd-index-main">
            <div class="cd-index-left can-move">
                <div class="icon">
                    <svg-icon icon-class="cloud"></svg-icon>
                </div>
                <div class="cd-index-head" style="-webkit-app-region: drag">
                    <h1>{{ HeadText.h1 }}</h1>
                    <p>{{ HeadText.tips }}</p>
                </div>
                <div class="cd-index-form not-move">
                    <LoginInput :data="ClientIdInput "/>
                    <div class="cd-index-post-button">
                        <el-button @click="login">连接云端</el-button>
                    </div>
                </div>

            </div>
            <div class="cd-index-right">
                <div class="header-view can-move">
                    <div class="right not-move">
                        <el-button @click="minimize" class="no-drag minimize" size="mini" type="text">
                            <i class="btn el-icon-minus"></i>
                        </el-button>
                        <el-button @click="close" class="no-drag close" size="mini" type="text">
                            <i class="btn el-icon-close"></i>
                        </el-button>
                    </div>
                </div>
                <img draggable="false" src="../../assets/img/bg/cloud.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
    import LoginInput from "./componets/LoginInput";
    export default {
        name: "index",
        components:{LoginInput},
        data(){
            return {
                /*登录组件数据*/
                ClientIdInput: {
                    icon: 'el-icon-user',
                    text: 'CloudID',
                    value: ''
                },
                /*登录页面显示切换参数*/
                HeadText: {
                    h1: '欢迎',
                    tips: '请连接后继续'
                },
                /*窗体对象*/
                WindowObject: false
            }
        },
        created() {
            this.WindowObject = this.$electron.remote.getCurrentWindow();
            // this.$ipc.on('win-data', (e, data) => {
            //             //接收是否允许自动登录
            //             this.LoginUserInput.value = data.username || '';
            //             if (this.LoginUserInput.value) {
            //                 this.login();
            //             }
            // });
        },
        methods: {
            close(){
                this.WindowObject.close()
            },
            minimize(){
                this.WindowObject.minimize()
            },
            login(){
                this.WindowObject.setAlwaysOnTop(false);
                this.$ipc.send('system', 'login', {
                    clientID: this.ClientIdInput.value,
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    @import "@/styles/login.scss";
    .icon {
        height:120px;
        .svg-icon {
            width: 100%;
            height: 100%;
        }
    }
    .btn {
        color: #f4f4f5;
    }
</style>