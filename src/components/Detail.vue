<template>
  <el-descriptions title="用户信息" border>
  <el-descriptions-item label="ID">{{itemData.id}}</el-descriptions-item>
  <el-descriptions-item label="姓名">{{itemData.name}}</el-descriptions-item>
  <el-descriptions-item label="邮箱">{{itemData.email}}</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      itemData: {}
    }
  },
  mounted () {
    axios
        .post('http://127.0.0.1:8000/user/getInfo', {"id":3})
        .then(response => (this.itemData = response.data))
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>