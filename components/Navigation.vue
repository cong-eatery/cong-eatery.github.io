<template>
    <div class="my-2">
        <div class="justify-center text-center overflow-hidden">
            <a href="/">
                <h1 class="text-8xl ms:text-9xl font-bold mb-7 uppercase title">
                    cong
                </h1>
                <h2 class="text-3xl ms:text-4xl mb-7 font-bold uppercase">
                    Vietnamese street food
                </h2>

                <Logo class="flex justify-center items-center mb-5" />
            </a>
            <ul class="text-2xl">
                <li class="inline-block underline mr-2 cursor-pointer">
                    <a :href="lunchLink" target="_blank">Lunch</a>
                </li>
                <li class="inline-block underline mr-2 cursor-pointer">
                    <a :href="dinnerLink" target="_blank">Dinner</a>
                </li>
                <li class="inline-block underline">
                    <a
                        href="https://goo.gl/maps/khezqsjxGnsNzqx6A"
                        target="_blank"
                        >Find us</a
                    >
                </li>
                <li class="inline-block underline mr-2 cursor-pointer">
                    <a href="/webshop" target="_blank">Webshop</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getDownloadURL, getStorage, list, ref } from 'firebase/storage'
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
    name: 'NavigationComponent',
    components: {
        Logo,
    },
    data() {
        return {
            lunchLink: '',
            dinnerLink: '',
        }
    },
    async beforeMount() {
        this.lunchLink = await getPDFUrl('/food')
        this.dinnerLink = await getPDFUrl('/drink')
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
    font-family: 'Matter SQ Bold';
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
