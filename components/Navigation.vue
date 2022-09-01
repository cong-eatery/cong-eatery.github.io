<template>
    <div class="my-2">
        <div class="font-mono justify-center text-center overflow-hidden">
            <h1
                class="text-8xl ms:text-9xl font-sans font-bold mb-7 uppercase title"
            >
                cong
            </h1>

            <Logo class="flex justify-center items-center mb-5" />
            <ul class="text-2xl">
                <li class="inline-block underline mr-2 cursor-pointer">
                    <a :href="foodLink" target="_blank">Food</a>
                </li>
                <li class="inline-block underline mr-2 cursor-pointer">
                    <a :href="drinkLink" target="_blank">Drink</a>
                </li>
                <li class="inline-block underline">
                    <a
                        href="https://goo.gl/maps/khezqsjxGnsNzqx6A"
                        target="_blank"
                        >Find us</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getStorage, ref, list, getDownloadURL } from 'firebase/storage'
import Logo from './Logo'

const getPDFUrl = async (baseUrl) => {
    const storage = getStorage()
    try {
        const data = await list(ref(storage, baseUrl))
        const currentFile = data.items[0]
        if (currentFile) {
            try {
                const value = await getDownloadURL(
                    ref(storage, currentFile.fullPath)
                )
                return value
            } catch {}
        }
    } catch {}
    return null
}

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navigation',
    components: [Logo],
    data() {
        return {
            foodLink: "",
            drinkLink: ""
        }
    },
    async beforeMount() {
        this.foodLink = await getPDFUrl("/food");
        this.drinkLink = await getPDFUrl("/drink");
    },
    methods: {
        async openLink(base) {
            const url = await getPDFUrl(base)
            if (url) {
                window.open(url)
            }
        },
    },
}
</script>

<style>
.title {
    /* -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInRight; */
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
