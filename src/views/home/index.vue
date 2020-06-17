<template>
    <div>
        <el-container>
            <el-header><h1 align="center">欢迎使用数据传输</h1></el-header>
            <el-main>
                <el-row>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="20">
                        <div class="demo-image">
                            <div class="block">
                                <el-image
                                        :src="url"
                                        fit="scale-down"
                                        >

                                </el-image>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="2"></el-col>
                </el-row>
            </el-main>
            <el-footer><p align="center">请在左侧选择服务</p></el-footer>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                url: '../src/assets/home.jpg'
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
