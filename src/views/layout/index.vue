<template>
    <div class="app-main" :class="classObj">
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <navbar/>
            <app-main/>
        </div>
    </div>
</template>

<script>

    import {AppMain, Navbar, Sidebar} from "./components";
    import {mapState} from "vuex";


    export default {
        name: "index",
        components:{
            Navbar,
            Sidebar,
            AppMain
        },
        computed: {
            ...mapState({
                sidebar: state => state.app.sidebar,
            }),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/index.scss";
</style>
