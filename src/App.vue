<template>
<div id="app">
    <div class="max-w-7xl mx-auto px-4 sm:px-20sm:px-6 lg:px-20">

        <Navbar></Navbar>

    </div>

    <!-- Pages will be rendered here -->
    <router-view :key="$route.fullPath"></router-view>

    <Footer />
</div>
</template>

<script>

import Navbar from './components/Navbar'
import Footer from './components/Footer';

export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        Navbar,
        Footer
    }

}
</script>

<style>

</style>
