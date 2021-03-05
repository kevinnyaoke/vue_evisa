<template>
<div>
    <section class="bg-white">

        <div class="relative vh-70 max-w-xl mx-auto lg:max-w-7xl">

            <img class="absolute inset-0 w-full h-full object-cover z-0" src="../assets/assets-evisa/img/images/invest.jpg" alt="Fast-tracked evisa">

            <div class="relative py-12 px-4 md:px-20 pt-24 md:w-3/5">

                <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold  sm:mt-5 lg:mt-6 lg:text-4xl">
                    <span class="sm:block">{{ eligibility.head }}</span>
                </h1>

                <p class="font-normal mt-4 text-3xl leading-6 text-gray-900">{{ eligibility.intro }} </p>
            </div>

        </div>
    </section>

    <div class="bg-white">
    
        <div class="pb-16 sm:pb-20">
            <div class="max-w-7xl mx-auto p-8 lg:p-20 bg-white border-t-8 border-green-500 relative">

                <!-- ... -->
                <div class="prose prose-indigo prose-lg mb-10">
                    <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold lg:text-4xl">
                        <span class="sm:block">{{ eligibility.head1 }}</span>
                    </h1>

                    <p>{{ eligibility.sub1 }}

                    </p>


                    <ol>
                        <li v-for="category in categories" v-bind:key="category.id">
                            <span class="font-medium">{{ category.catname }}</span>
                             - {{category.description}}
                        </li>
                        <!-- <li><span class="font-medium">Category 2</span> - Nationals issued with Visas on
                            application.</li>
                        <li><span class="font-medium">Category 3</span> - Countries and Persons who require referred
                            Visas.</li> -->
                    </ol>

                    <a href="about-evisa.html" class="whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-xs uppercase font-medium no-underline text-white bg-white hover:border-gray-500">
                        Learn more about evisa eligibility
                    </a>

                </div>

                <input id="myInput" type="search" placeholder="Search a country..." class="search-input border-gray-300 rounded-md text-2xl px-7 py-4 mb-5 w-full shadow-sm bg-gray-50 focus:bg-white" data-table="eligibility" />

                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-300 sm:rounded-lg">
                                <table id="myTable" class="min-w-full divide-y divide-gray-200 eligibility">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Country
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Qualification
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="odd" v-for="ttable in ttables" v-bind:key="ttable.id">
                                            <td class="reg-text big-text">{{ ttable.country }}</td>
                                            <td class="reg-text">
                                                {{ ttable.category }}
                                            </td>
                                            <td class="reg-text">
                                                <p class="text-success">{{ ttable.qualification }}</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
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

export default {
    name: "",
    data() {
        return {
            ttables: [],
            eligibility: [],
            categories: [],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            routeParam: this.$route.params.id,
            // dropdowns: []
        };
    },
    apollo: {
        ttables: gql `
      query Ttables {
        ttables {
          id
          country
          category
          qualification
        }
      }
      `,
        eligibility: gql `
        query Eligibility {
        eligibility {
          id
          head
          intro
          head1
          sub1
        }
      }
      `,
        categories: gql `
      query Categories {
        categories {
          id
          catname
          description
        }
      }`
    },
};
</script>

<style>

</style>
