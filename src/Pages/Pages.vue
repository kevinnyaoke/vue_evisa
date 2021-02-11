<template>
<div>
    <section class="bg-white">

        <div class="relative vh-70 max-w-xl mx-auto lg:max-w-7xl">

            <img class="absolute inset-0 w-full h-full object-cover z-0" src="../assets/assets-evisa/img/images/invest.jpg" alt="Fast-tracked evisa">

            <div class="relative py-12 px-4 md:px-20 pt-24 md:w-3/5">

                <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold  sm:mt-5 lg:mt-6 lg:text-4xl">
                    <span class="sm:block">Services</span>
                </h1>

                <p class="font-normal mt-4 text-3xl leading-6 text-gray-900">{{ service.link }}</p>
            </div>

        </div>
    </section>

    <div class="bg-white">
        <div class="pb-16 sm:pb-20">
            <div class="max-w-7xl mx-auto p-8 lg:p-20 bg-white border-t-8 border-green-500 relative">

                <div class="grid grid-cols-3 gap-12">
                    <div class="w-auto col-span-3 md:col-span-1">

                        <div class="flex flex-col overflow-hidden">
                            <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold lg:text-4xl">
                                <span class="sm:block">Services</span>
                            </h1>
                            <div class="flex-1 bg-white py-6 flex flex-col justify-between">
                                <div class="flex-1">

                                    <Sidenav></Sidenav>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="w-auto col-span-3 md:col-span-2">

                        <div class="w-auto col-span-3 sm:col-span-2 prose prose-indigo prose-lg">
                            <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold lg:text-4xl">
                                <span class="sm:block">{{ service.link }}</span>
                            </h1>

                            <p class="mt-8 text-gray-500 leading-8 text-2xl">
                                {{ service.content }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="bg-red-500 max-w-7xl mx-auto">
        <div class="px-4 py-12 sm:px-6 lg:py-24 lg:px-20">
            <div class="grid gap-8 lg:grid-cols-2">
                <div class="flex flex-col overflow-hidden bg-white border p-7">
                    <div>
                        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl max-w-sm">
                            Get your account today
                        </h2>
                        <p class="md:w-4/6 mt-4 font-normal text-lg leading-6 text-gray-900">
                            One account is all you need to access all Government Services
                        </p>
                        <div class="mt-12 inline-flex items-center">
                            <a href="https://accounts.ecitizen.go.ke/register/visitor" class="btn bg-black text-white">Create an account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import gql from "graphql-tag";
import Sidenav from '../components/Sidenav'

export default {
    name: "Pages",
    components: {
        Sidenav,
    },
    data() {
        return {
            service: [],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            routeParam: this.$route.params.id,

        };
    },
    apollo: {
        service: {
            query: gql `
        query Services($id: ID!) {
          service(id: $id) {
            id
            link
            content
            slug
          }
        }
      `,
            variables() {
                return {
                    id: this.routeParam,
                };
            },
        },
    },
};
</script>

<style>

</style>
