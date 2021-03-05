<template>
<ul class="space-y-4">
    <li class="text-base truncate border-b pb-3" v-for="service in visaServices" v-bind:key="service.id">
        <router-link :to="{ path: '/pages/' + service.id }" :key="service.id">

            {{ service.link }}

        </router-link>
    </li>
</ul>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "",
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
          content
          slug
        }
      }
      `,
        variables() {
            return {
                id: this.routeParam,
            };
        }

    }
};
</script>

<style>

</style>
