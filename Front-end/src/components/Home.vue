<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt class="logo_img" />
        <span>Healthy Life Platform</span>
      </div>
      <el-button type="info" @click="logout">Logout</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapase">|||</div>
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff" unique-opened :collapse="isCollapse" 
          :collapse-transition="false" :router="true" default-active="/welcome">
          
          <el-menu-item :index="item.path" v-for="item in menuList" :key="item.index">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </el-menu-item>

        </el-menu>
      </el-aside>

      <el-main>
          <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>
<script>
export default {
    data() {
        return {
            menuList: [
              {
                index: 1,
                title: "Profile",
                icon: "el-icon-user-solid",
                path: "/profile"
              },
              {
                index: 2,
                title: "Fitness Wiki",
                icon: "el-icon-notebook-2",
                path: "/wiki"
              },
              {
                index: 3,
                title: "Calorie Calculator",
                icon: "el-icon-apple",
                path: "/calorie-calculator"
              },
              {
                index: 4,
                title: "Diet Plans",
                icon: "el-icon-dish",
                path: "/diet-plans"
              },
              {
                index: 5,
                title: "Exercise",
                icon: "el-icon-trophy-1",
                path: "/exercise"
              },
            ],
            isCollapse:false,
            activePath:'',
        }
    },
  created() {
      this.getMenuList();
      this.activePath = window.sessionStorage.getItem('activePath');
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    toggleCollapase(){
      this.isCollapse = !this.isCollapse;
    },
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath);
      this.activePath = activePath;
    },
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0%;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.logo_img {
  width: 20%;
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button{
  background-color:#4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>