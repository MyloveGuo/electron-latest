<template>
    <section>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .app-main {
        /* 50= navbar  50  */
        min-height: calc(100vh - 50px);
        width: 100%;
        position: relative;
        overflow: hidden;
    }
</style>
