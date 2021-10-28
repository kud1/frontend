<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2', '3']">
      <el-sub-menu index="1">
        <template #title
        ><i class="el-icon-message"></i>Navigator One</template
        >
        <el-menu-item index="1-1">Option 1</el-menu-item>
        <el-menu-item index="1-2">Option 2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item index="2-1">Option 1</el-menu-item>
        <el-menu-item index="2-2">Option 2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title
        ><i class="el-icon-setting"></i>Navigator Three</template
        >
        <el-menu-item index="3-1"><router-link to="detail">Option 1</router-link></el-menu-item>
        <el-menu-item index="3-2"><router-link to="list">Option 2</router-link></el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>

  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }
      ]
    };
  }
}
</script>