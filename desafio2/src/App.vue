<template>
<div id="app">
    <Crud/>
</div>
</template>

<script>
import Crd from './components/Crd';

export default {
    name: 'App',
    components: {
        Crud
    }
}

</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
