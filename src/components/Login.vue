<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 380px">
        <div>
          <span><el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar></span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input
                  v-model="user.name"
                  placeholder="请输入用户名"
              ></el-input>
            </td>
          </tr>
          <tr></tr>
          <tr style="margin: 0px 10px">
            <td>密码</td>
            <td>
              <el-input
                  type="password"
                  v-model="user.password"
                  placeholder="请输入密码"
                  @keydown.enter="doLogin"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td></td>
            <span style="padding: 1px"></span>
          </tr>
          <tr>
            <td colspan="2">
              <el-button style="width: 330px" type="primary" @click="doLogin"
              >登录</el-button
              >
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { h } from 'vue'
import { ElMessage } from 'element-plus';

export default {
  name: "Login",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      if (
          Object.keys(this.user.name).length === 0 ||
          Object.keys(this.user.password).length === 0
      )
        ElMessage({
          message: h('p', null, [
            h('span', null, '请输入用户名和密码'),
          ]),
        })
      else
        axios
            .post('http://127.0.0.1:8000/login', this.user)
            .then(function(response) {
              if (response.data.status === 200)
                this.$router.push({path: "menu"})
              else {
                console.log(response.data.message);
                ElMessage({
                  message: h('p', null, [
                    h('span', null, '账户信息错误'),
                  ]),
                })
              }
            }.bind(this))
            .catch(function (error) {
              console.log(error);
            });
    }
  }
};
</script>

<style scoped></style>
