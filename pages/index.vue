<template>
    <Start  />
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
    created() {
        this.show = true;
    }
})
</script>
  