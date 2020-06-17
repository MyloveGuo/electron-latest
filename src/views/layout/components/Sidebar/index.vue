<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div :style="{height: height}" class="can-move">
    </div>
      <div class="icon can-move">
          <svg-icon icon-class="cloud"></svg-icon>
      </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="!sidebar.opened"
      :router="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      style="margin-top: 20px"
    >
<!--      <sidebar-item :routes="routes"/>-->

        <el-menu-item v-for="item in routes" v-if="!item.hidden&&item.children" :index="item.path+'/'+item.children[0].path">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
    </el-menu>
    <div class="close">
      <el-button type="danger" size="mini" @click="close" v-show="sidebar.opened" style="width: 80%">退出</el-button>
      <el-button type="danger" size="medium" @click="close" v-show="!sidebar.opened" circle icon="el-icon-switch-button" style="margin: 0"></el-button>
    </div>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    height: {
      type: String,
      default: '20px'
    }
  },
  components: {},
  computed: {
    ...mapGetters([
        'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
  },
    created() {
        this.WindowObject = this.$electron.remote.getCurrentWindow();
    },
    methods: {
    close() {
      this.$confirm('此操作将退出程序, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.WindowObject.close()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/styles/index.scss";
  .icon {
      height: 40px;
      .svg-icon {
          width: 100%;
          height: 100%;
      }
  }
  .close {
      position: absolute;
      bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
  }
</style>

                                                                    