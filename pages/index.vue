<template>
    <Layout v-show="show">
        <div>
            <AvailableSeats />
        </div>
    </Layout>
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
