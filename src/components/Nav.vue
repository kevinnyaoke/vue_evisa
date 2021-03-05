<template>
<div class="relative bg-gray-50">
    <div x-data="{ mobileMenuOpen: false }" class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-20sm:px-6 lg:px-20">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="evisa.html">
                        <span class="sr-only">eVisa Kenya</span>
                        <img class="h-8 w-auto sm:h-10" src="../assets/assets-evisa/img/logos/jpg/evisa-logo.jpg" alt="eVisa Kenya" />
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <nav class="hidden md:flex space-x-10">
                    <router-link class="text-sm uppercase font-medium text-gray-900 hover:text-gray-900" :to="{path:'/'}">Home</router-link>

                    <div class="relative" x-data="">
                        <button type="button" v-on:click="myFunction()" x-state:on="Item active" x-state:off="Item inactive" class="dropbtn group bg-white rounded-md text-gray-500 inline-flex items-center text-sm uppercase font-medium hover:text-gray-900 focus:outline-none">
                            <span>Services</span>
                            <svg x-state:on="Item active" x-state:off="Item inactive" class="ml-2 h-5 w-5 group-hover:text-gray-500 text-gray-600" x-bind:class="{ 'text-gray-600': flyoutMenuOpen, 'text-gray-400': !flyoutMenuOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div x-description="'Solutions' flyout menu, show/hide based on flyout menu state." x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-1" class="absolute z-10 transform -translate-x-8 mt-8 px-2 w-max max-w-md sm:px-0">
                            <div id="myDropdown" class="dropdown-content shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid bg-white gap-6 p-8">
                                    <ul>
                                            <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{ path: '/pages/' + service.id }" :key="service.id">

                                                {{ service.link }} <br><br>

                                            </router-link>
                                        </li>
                                    </ul>

                                    <!-- <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{path:'/transit_visa'}">Transit Visa</router-link>
                                        <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{path:'/courtesy_visa'}">Courtesy Visa</router-link>
                                        <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{path:'/east_african_tourist_visa'}">East African Tourist Visa</router-link>
                                        <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{path:'/multiple_entry_visa'}">Multiple Entry Visa</router-link>
                                        <router-link class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900" :to="{path:'/5yr_multiple_entry_visa'}">5yr Multiple Entry Visa</router-link> -->

                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link class="text-sm uppercase font-medium text-gray-900 hover:text-gray-900" :to="{path:'/eligibility/'}">Eligibility</router-link>

                </nav>
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="https://dis.ecitizen.go.ke/dashboard" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-xs uppercase font-medium text-white bg-green-500 hover:bg-green-400">Sign i</a>

                    <a href="https://accounts.ecitizen.go.ke/register/visitor" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-xs uppercase font-medium text-white bg-green-500 hover:bg-green-400">Create an account</a>
                </div>
            </div>
        </div>

        <div x-description="Mobile menu, show/hide based on mobile menu state." x-show="mobileMenuOpen" x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class=" absolute top-0 inset-x-0 z-10 transition transform origin-top-right md:hidden" style="display: none;">
            <div class="bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="../assets/assets-evisa/img/logos/jpg/evisa-logo.jpg" alt="eVisa Kenya" />
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid space-y-4">
                            <a href="evisa.html" class="text-sm uppercase font-medium text-gray-900 hover:text-gray-900">Home</a>

                            <div class="text-sm uppercase font-medium">
                                <button type="button" class=" group mb-5 text-gray-500 inline-flex items-center text-sm uppercase font-medium hover:text-gray-900 focus:outline-none">
                                    <span>Services</span>
                                    <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="grid space-y-4 py-4 border-t">
                                    <a href="single-entry-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">Single Entry Visa</a>

                                    <a href="transit-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">Transit Visa</a>

                                    <a href="courtesy-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">Courtesy Visa</a>
                                    <a href="east-african-tourist-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">East African Tourist Visa</a>
                                     <a href="multiple-entry-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">Multiple Entry Visa</a>

                                    <a href="5yr-multiple-entry-visa.html" class="text-sm uppercase font-medium text-gray-500 rounded-lg hover:text-gray-900">5yr Multiple Entry Visa</a>
                                </div>
                            </div>

                            <a href="eligibility.html" class="text-sm uppercase font-medium text-gray-500 hover:text-gray-900">Eligibility</a>
                        </nav>
                    </div>
                </div>

                <div class="grid gap-x-4 py-6 px-5">
                    <a href="https://dis.ecitizen.go.ke/dashboard" class="mb-3 text-gray-800 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xs uppercase font-medium hover:border-green-400">Sign in</a>

                    <a href="https://accounts.ecitizen.go.ke/register/visitor" class="whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-sm shadow-sm text-xs uppercase font-medium text-white bg-green-500 hover:bg-green-400">Create an account</a>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'Nav',
    data() {
        return {
            visaServices: [],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            routeParam: this.$route.params.id,

        };
    },
    apollo: {
        visaServices: gql `
       query visaServices {
        visaServices {
          id
          link
        }
      }
      `
    },
    methods: {
        myFunction: function () {
            document.getElementById("myDropdown").classList.toggle("show");

        },
        toggleBar: function () {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

    },

}
</script>

<style>

</style>
