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
            <Navigation
                class="my-10 flex-grow flex justify-center items-center"
            />
            <content class="flex-grow flex justify-center items-center">
                <div class="max-w-xl mb-10">
                    <slot></slot>
                </div>
            </content>
            <footer
                class="w-full md:flex md:justify-between uppercase border-t"
            >
                <ul class="py-7 md:py-2 text-l md:text-xl px-3 sm:pl-3">
                    <li class="mr-3">
                        <strong><u>OPENING HOURS</u></strong>
                    </li>
                    <li class="lg:inline-block mr-3">
                        <strong>TUE-THU:</strong> 11:00-22:00
                    </li>
                    <li class="lg:inline-block mr-3">
                        <strong>FRI:</strong> 11:00-23:00
                    </li>
                    <li class="lg:inline-block mr-3">
                        <strong>SAT:</strong> 12:00-23:00
                    </li>
                    <li class="lg:inline-block mr-3">
                        <strong>SUN-MON:</strong> CLOSED
                    </li>
                </ul>
                <ul
                    class="py-7 md:py-2 uppercase text-l md:text-xl px-3 sm:pr-3 border-t md:border-none"
                >
                    <li class="font-bold">
                        <a
                            href="https://goo.gl/maps/EgkvLDNcH7Gb2SBdA"
                            target="_blank"
                            >Stockholm, Kornhamnstorg 51, 111 27</a
                        >
                    </li>
                    <li><a href="mailto:hello@cong.se">hello@cong.se</a></li>
                    <li class="font-bold">
                        <a href="tel:+468233210">08-23 32 10</a>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script>
import AvailableSeats from './AvailableSeats'
import Navigation from './Navigation'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Layout',
    components: [Navigation, AvailableSeats],
}
</script>
