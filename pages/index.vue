<template>
    <Start v-show="show" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true;
    }
})
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
</style>
  