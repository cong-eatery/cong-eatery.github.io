<template>
    <Start v-show="show" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
    data() {
        return {
            show: true
        }
    },
    // mounted() {
    //     window.addEventListener('load', () => {
    //         this.show = true;
    //     });
    //     document.onreadystatechange = () => {
    //         if (document.readyState === "complete") {
    //             this.show = true;
    //         }
    //     }

    // }
})
</script>
  