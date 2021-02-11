<template>
<div class="topnav flex justify-between items-center py-6 md:justify-start md:space-x-10" id="myTopnav">
    <!-- <a href="#home" class="">Logo</a> -->

    <a href="evisa.html">
        <span class="sr-only">eVisa Kenya</span>
        <img class="h-8 w-auto sm:h-10" src="../assets/assets-evisa/img/logos/jpg/evisa-logo.jpg" alt="eVisa Kenya" />
    </a>

    <router-link class="text-sm uppercase font-medium text-gray-900 hover:text-gray-900" :to="{path:'/'}">Home</router-link>

    <div class="dropdown">
        <button class="dropbtn">SERVICES
            <i class="arrow down"></i>
        </button>
        <div class="dropdown-content">

            <ul>
                <li v-for="service in services" v-bind:key="service.id">

                    <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{ path: '/pages/' + service.id }" :key="service.id">

                        {{ service.link }} <br>

                    </router-link>

                </li>
            </ul>
            <!-- <a class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" href="#">Link 1 Dropdown Dropdown</a>
                    <a class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" href="#">Link 2</a>
                    <a class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" href="#">Link 3</a> -->
        </div>
    </div>
    <router-link class="text-sm uppercase font-medium text-gray-900 hover:text-gray-900" :to="{path:'/eligibility/'}">Eligibility</router-link>
    <a href="https://dis.ecitizen.go.ke/dashboard">SIGN IN</a>
    <a href="https://accounts.ecitizen.go.ke/register/visitor" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-xs uppercase font-medium text-white bg-green-500 hover:bg-green-400">CREATE AN ACCOUNT</a>

    <a href="javascript:void(0);" style="font-size:15px;" class="icon" v-on:click="myFunction()">&#9776;</a>
</div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'Nav',
    data() {
        return {
            services: [],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            routeParam: this.$route.params.id,

        };
    },
    apollo: {
        services: gql `
       query Services {
        services {
          id
          link
          slug
        }
      }
      `
    },
    methods: {
        myFunction: function () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }

        }
    }

}
</script>

<style>

</style>
