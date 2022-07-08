<template>
    <Start v-show="show" />
</template>

<script>

export default {
    name: 'IndexPage',
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true;
    }
}
</script>