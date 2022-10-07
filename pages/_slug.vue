<template>
    <Layout v-show="show">
        <AvailableSeats />
        <nuxt-content :document="page" />
    </Layout>
</template>

<script>
export default {
    async asyncData({ $content, params, error }) {
        const slug = params.slug || 'index'
        const page = await $content(slug)
            .fetch()
            .catch(() => {
                error({ statusCode: 404, message: 'Page not found' })
            })

        return {
            page,
        }
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.show = true
    },
}
</script>
