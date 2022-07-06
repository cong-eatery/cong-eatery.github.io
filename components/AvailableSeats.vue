<template>
    <div
        v-if="enabled"
        class="text-2xl font-mono justify-center text-center overflow-hidden"
    >
        Seats available right now:
        <span class="text-4 xl">{{ available }}</span>
    </div>
</template>

<script>
export default {
    name: 'AvailableSeats',
    data() {
        return {
            available: null,
            enabled: false,
        }
    },
    async mounted() {
        const messageRef = this.$fire.firestore
            .collection('seats-available')
            .doc('current')
        try {
            const snapshot = await messageRef.get()
            const doc = snapshot.data()
            if (!doc) {
                alert('Document does not exist.')
                return
            }
            this.available = doc.available
            this.enabled = doc.enabled
        } catch (e) {
            alert(e)
        }
    },
}
</script>

<style>
.cong-logo {
    max-height: 400px;
    min-height: 400px;
    height: 100%;
}

.cong-logo img {
    max-height: 400px;
    /* -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft; */
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
