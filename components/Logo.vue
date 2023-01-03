<template>
    <div class="cong-logo">
        <img
            class="px-6"
            :src="hover ? '/octofool.jpg' : '/octodrunk.jpg'"
            @mouseover="hover = true"
            @mouseleave="hover = false"
        />
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
    data() {
        return {
            hover: false,
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
