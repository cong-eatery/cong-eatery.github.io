<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen border">
        <div class="w-full flex flex-col">
            <header class="flex w-full flex-row-reverse border-b px-3 sm:px-3">
                <ul class="flex my-2 gap-2 list-discs">
                    <li class="flex-1">
                        <a
                            href="https://instagram.com/congstockholm/"
                            target="_blank"
                            >insta</a
                        >
                    </li>
                    <li class="flex-1">
                        <a 
                            href="https://www.facebook.com/congstockholm" 
                            target="_blank"
                            >fb</a
                        >
                    </li>
                    <li class="flex-1">
                        <a 
                            href="https://www.tiktok.com/@congstockholm" 
                            target="_blank"
                            >tiktok</a
                        >
                    </li>
                </ul>
            </header>
            <content class="flex-grow flex justify-center items-center">
                <Navigation />
            </content>
            <footer class="w-full md:flex md:justify-between uppercase">
                <ul
                    class="py-7 md:py-2 text-l md:text-2xl border-t px-3 sm:pl-3"
                >
                    <li class="md:inline-block mr-3">
                        <strong>MON-TUE:</strong> 16:00-22:00
                    </li>
                    <li class="md:inline-block mr-3">
                        <strong>FRI-THU:</strong> 16:00-23:00
                    </li>
                    <li class="md:inline-block mr-3">
                        <strong>FRI-SAT:</strong> 14:00-00:00
                    </li>
                    <li class="md:inline-block mr-3">
                        <strong>SUN:</strong> CLOSED
                    </li>
                </ul>
                <p
                    class="py-7 md:py-2 uppercase text-l md:text-2xl font-bold border-t px-3 sm:pr -3"
                >
                    <a
                        href="https://goo.gl/maps/EgkvLDNcH7Gb2SBdA"
                        target="_blank"
                        >Stockholm, Kornhamnstorg 51, 111 27</a
                    >
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Start',
    components: [Navigation],
}
</script>
