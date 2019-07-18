<template>
<el-container>
    <el-header>
        M&oacute;dulo ajustes
    </el-header>
    <el-container>
        <el-main>
            <add-user></add-user>
            <users></users>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
import AddUser from './users/AddUser';
import Users from './users/Users';

export default {
    components: {
        AddUser,
        Users
    }
};
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;

    .el-button {
        float: right;
        margin-top: 10px;
    }
}

.el-aside {
    color: #333;
}
</style>
