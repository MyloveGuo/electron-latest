<template>
    <div class="header-view can-move" :style="{height: height}">
        <div class="right not-move">
            <el-button @click="minimize" class="no-drag minimize" size="mini" type="text">
                <i class="btn el-icon-minus"></i>
            </el-button>
            <el-button @click="maximize" class="no-drag" size="mini" type="text">
                <i class="btn el-icon-ali-max iconfont"></i>
            </el-button>
            <el-button @click="close" class="no-drag close" size="mini" type="text">
                <i class="btn el-icon-close"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: '40px'
            }
        },
        data() {
            return {
                /*窗体对象*/
                WindowObject: false
            }
        },
        created(){
            this.WindowObject = this.$electron.remote.getCurrentWindow();
        },
        methods: {
            close() {
                this.$confirm('此操作将退出数据传输, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.WindowObject.close()
                }).catch(() => {

                })
            },
            minimize() {
                this.WindowObject.minimize()
            },
            maximize(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
    .btn {
        color: #333;
    }
</style>
