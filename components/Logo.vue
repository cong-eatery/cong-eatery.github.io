<template>
    <div class="cong-logo">
        <img
            class="px-6"
            :src="hover ? '/octopot.jpg' : '/octofool.jpg'"
            @mouseover="hover = true"
            @mouseleave="hover = false"
        />
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Logo',
    data() {
        return {
        hover: false,
        }
    },
}
</script>

<style>
.cong-logo img {
    overflow: hidden;
    max-height: 400px;
    height: 100%;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: initial;
    }
}
</style>
