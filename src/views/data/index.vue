<template>
    <div>
        <!--文本行-->
        <el-row>
            <el-col :span="24">
                <el-input type="textarea" rows="13" v-model="message"></el-input>
            </el-col>
        </el-row>
        <!--开关行-->
        <el-row>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8" align="center">
                <el-switch
                        style="display: block"
                        v-model="transTag"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="正在传输"
                        inactive-text="停止传输">
                </el-switch>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>
        </el-row>
        <!--测试行-->
        <el-row>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8" align="center">
                <el-button size="medium" type="info" :loading="loadingTag">连接测试</el-button>
                <el-button size="medium" @click="sendMessage">发送信息</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "index",
        data() {
            return {
                transTag: true,
                loadingTag: false,
                message: 'Data transporting log...'
            }
        },
        computed:{
            ...mapGetters([
                'stomp'
            ])
        },
        methods: {
            sendMessage(){
                this.stomp.send("/app/hello")
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 40px;
        &:last-child {
         margin-bottom: 0;
        }
    }
</style>
