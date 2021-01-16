<template>
  <div class="login_container">
    <div class="login_frame">

      <div class="avatar">
        <img src="../assets/logo.png" alt/>
      </div>

      <el-form ref="loginFormRef" :model="loginForm" class="login_form" label-width="0">
        <el-form-item>
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" round>Login</el-button>
          <el-button type="info" round>Reset</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {username: "username", password: "password"}
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_frame {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  .avatar {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.button {
  display: flex;
}

</style>