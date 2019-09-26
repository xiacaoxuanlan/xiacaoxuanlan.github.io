<template>
  <div class="">
    <div class="" style="margin-bottom: 20px;">
      <div class="table_top clearfix">
        <span class="h-btn1 add_btn left" style="width: 150px;" @click="">添加产品分类</span>
      </div>
      <div class="table_box">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="产品分类">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="">
      <div class="table_top clearfix">
        <span class="h-btn1 add_btn left" @click="goto('/addIntroduce')">添加产品页</span>
      </div>
      <div class="table_box">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="产品标题">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: [
                    {
                        name: '王小虎1',
                    },
                    {
                        name: '王小虎2'
                    }
                ]
            }
        },
        created() {
            this.$emit('setMenuActive', 'introduce');
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            goto(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table_top{ width: 100%; padding: 20px; background-color: #fff; margin-bottom: 10px; }
  .table_top .add_btn{ width: 100px; height: 30px; line-height: 30px; }
  .table_box{ width: 100%; padding: 20px; background-color: #fff; }
</style>
