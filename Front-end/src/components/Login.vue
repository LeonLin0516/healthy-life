<template>
  <div class="login_container">
    <div class="login_frame">

      <div class="avatar">
        <img src="../assets/logo.png" alt/>
      </div>

      <el-form ref="loginFormRef" :rules="loginRule" :model="loginForm" class="login_form" label-width="0">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" round @click="login()">Login</el-button>
          <el-button type="info" round @click="resetLoginForm()">Reset</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin", 
        password: "1234567"
      },
      loginRule: {
        username: [
          { required: true, message: "Enter username", trigger: "blur" },
          { min: 5, max: 12, trigger: "blur"}
        ],
        password: [
          { required: true, message: "Enter password", trigger: "blur" },
          { min: 5, max: 12, trigger: "blur"}
        ]
      },
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const {data:res} = await this.$http.post("login", this.loginForm);
        if (res == "correct") {
          this.$message.success("Login successfully!");
          this.$router.push({path: "/home"})
        } else {
          this.$message.error("Login falied!")
        }
      })
    },
  },
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