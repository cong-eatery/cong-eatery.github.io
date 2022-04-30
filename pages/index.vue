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

  