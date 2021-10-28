<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="ID"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="email"
        label="地址">
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button
        >
        <el-button
            size="mini"
            type="danger"
        >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted () {
    axios
        .post('http://127.0.0.1:8000/user/list')
        .then(response => (this.tableData = response.data))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({path: "detail"})
    }
  }
}
</script>