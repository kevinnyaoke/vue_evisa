<template>
<div>
    <section class="bg-white">

        <div class="relative vh-70 max-w-xl mx-auto lg:max-w-7xl">

            <img class="absolute inset-0 w-full h-full object-cover z-0" src="../assets/assets-evisa/img/images/invest.jpg" alt="Fast-tracked evisa">

            <div class="relative py-12 px-4 md:px-20 pt-24 md:w-3/5">

                <h1 class="text-2xl sm:text-xl tracking-tight font-extrabold  sm:mt-5 lg:mt-6 lg:text-4xl">
                    <span class="sm:block">Services</span>
                </h1>

                <p class="font-normal mt-4 text-3xl leading-6 text-gray-900">{{ visaService.link}}</p>
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
                                <span class="sm:block">{{ visaService.link }}</span>
                            </h1>

                            <p class="mt-8 text-gray-500 leading-8 text-2xl">
                                {{ visaService.content }}
                                
                            </p>
                            
                            
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Basic Requirements
                                </h2>


                                <ol class="mt-8 text-xl text-gray-500 leading-8">
                                    <li>Valid travel document not less than six months.</li>

                                    <li>Must be a holder of a service, official and diplomatic passport.</li>

                                    <li>Must hold an official letter from the country of origin/ organization/ foreign
                                        affairs.</li>

                                    <li>Spouses and children accompanying Diplomatic, Service or Official passport
                                        holders on duty, but traveling on
                                        ordinary passports do not qualify for courtesy visa whether on transit, business
                                        or holiday.</li>

                                    <li>A round trip ticket or a boarding pass for passengers on transit.</li>

                                    <li>In cases of applicants who fall under category 3 of the Visa regime /
                                        Regulations, the Kenyan visa regulations must
                                        apply whether on transit or official business.</li>
                                </ol>
                                
                                 <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    {{ visaService.common.Validity.title }}
                                </h2>


                                <p class="mt-8 text-xl text-gray-500 leading-8">{{ visaService.common.Validity.body }} </p>
                                
                                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Fees
                                </h2>

                                <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                                    <div class="p-6">
                                        <p class="mt-8 text-gray-500">{{ visaService.common.Fees.body }}</p>
                                        <p class="mt-8">
                                            <span class="text-4xl font-extrabold text-gray-900">$ {{ visaService.common.Fees.amount }}</span>
                                        </p>

                                    </div>

                                </div>


                                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Attachments
                                </h2>

                                <p class="mt-8 text-xl text-gray-500 leading-8">{{ visaService.common.Fees.body }}</p>
                                
                                
                                 <h3>
                                    For Business Visits
                                </h3>

                                <ol class="mt-8 text-xl text-gray-500 leading-8">
                                    <li>Invitation Letters from company / Invitation letter for business visits</li>
                                    <li>Copies of registration of the company</li>
                                    <li>Return air ticket</li>
                                </ol>


                                <h3>
                                    For Family visits
                                </h3>

                                <ol class="mt-8 text-xl text-gray-500 leading-8">
                                    <li>Invitation Letters from family.</li>
                                    <li>Identity card / Passport / Alien card / Entry permit of the host.</li>
                                    <li>Return air ticket</li>
                                </ol>

                                <h3>
                                    For Tourists
                                </h3>

                                <ol class="mt-8 text-xl text-gray-500 leading-8">
                                    <li>Travel itinerary (Details about places to visit if going as a tourist).</li>
                                    <li>Hotel bookings.</li>
                                    <li>Return air ticket</li>
                                </ol>

                                <h3>
                                    Identity Documents
                                </h3>

                                <ol class="mt-8 text-xl text-gray-500 leading-8">
                                    <li>Clear Passport biodata page.</li>
                                    <li>A clear photograph.</li>
                                </ol>
                                
                                 <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Photo requirements
                                </h2>


                                <ol class="mt-8 text-xl text-gray-500 leading-8">

                                    <li>DO NOT take a photograph of or scan the photo in your passport.</li>

                                    <li>Must be taken within the past 6 months, showing your current appearance.</li>

                                    <li>Must be in color.</li>

                                    <li>Must show your full face, front view with a plain white or off-white background.
                                    </li>

                                    <li>Must show a full face, front view with a plain white or off-white background.
                                    </li>

                                    <li>Must be taken in normal street attire. Uniforms should NOT BE worn in
                                        photographs except religious attire that is
                                        worn daily.</li>

                                    <li>Do not wear a hat or headgear that obscures the hair or hairline.</li>

                                    <li>If you normally wear prescription glasses, a hearing device, wig, or similar
                                        articles, they should be worn for your
                                        picture.</li>

                                    <li>Dark glasses or nonprescription glasses with tinted lenses are not acceptable
                                        unless you need them for medical
                                        reasons. A medical certificate may be required.</li>


                                </ol>


                                <a href=""> Photo Guidelines </a>

                            
                            
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
            visaService: [],
            api_url: process.env.VUE_APP_STRAPI_API_URL,
            routeParam: this.$route.params.id,
        };
    },
    apollo: {
        visaService: {
            query: gql `
        query visaServices($id: ID!) {
          visaService(id: $id) {
            id
            link
            content
            slug
            common{
               Fees{
                 body
                 amount
            }
              Attachment{
                  body
             }
             Validity{
              title
              body
             }
            }
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
