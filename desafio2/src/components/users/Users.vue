<template>
<div>
    <el-button type="primary"
        @click="add">Agregar</el-button>

    <el-table v-loading="loading"
        :data="userList"
        style="width: 100%">
        <el-table-column prop="nombre"
            label="Nombre"
            width="180">
        </el-table-column>
        <el-table-column prop="correo"
            label="Correo"
            width="180">
        </el-table-column>
        <el-table-column prop="edad"
            label="Edad">
        </el-table-column>
        <el-table-column fixed="right"
            label="Operaciones"
            width="120">
            <span slot-scope="scope">
        <el-button @click="toDelete(scope.row['id'])" type="text" size="small">Eliminar</el-button>
        <el-button @click="edit(scope.row)" type="text" size="small">Editar</el-button>
      </span>
        </el-table-column>
    </el-table>

</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
        };
    },
    mounted() {
        this.cargaTabla();
    },
    methods: {
        cargaTabla() {
            this.$store.dispatch('getUsers');
        },
        toDelete(id) {

            axios.delete(`https://us-central1-conexion-vue.cloudfunctions.net/test/user/${id}`)
                .then(accept => {
                    this.cargaTabla();
                });
        },
        edit(row) {

            this.$store.state.edit = true;
            this.$store.state.user = row;
        },
        add() {
            this.$store.state.edit = false;
            this.$store.state.user = {};
        }
    },
    computed: {
        ...mapState([
                    'users',
                    'loading'
        ]),
        userList() {
            return this.users.map(user => {
                user.data.id = user.id;
                return user.data;
            });
        }
    }
};

</script>

<style lang="scss" scoped="">
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
