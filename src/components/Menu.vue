<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="用户管理" name="first"><Form></Form></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><Form></Form></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"><List></List></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"><Detail></Detail></el-tab-pane>
  </el-tabs>
</template>
<script>

import List from ".././components/List";
import Form from '.././components/Form';
import Detail from '.././components/Detail';
export default {
  components: {List, Form, Detail},
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>