<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen border">
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="w-full relative flex flex-col">
      <header
        class="flex sticky top-0 w-full flex-row-reverse border-b px-3 sm:px-3"
      >
        <ul class="flex my-2 gap-2 list-discs">
          <li class="flex-1">
            <a href="https://instagram.com/congstockholm/" target="_blank"
              >insta</a
            >
          </li>
          <li class="flex-1">
            <a href="#FACEBOOK">fb</a>
          </li>
          <li class="flex-1">
            <a href="#TIKTOK">tiktok</a>
          </li>
        </ul>
      </header>
      <content class="flex-grow flex justify-center items-center">
        <Navigation />
      </content>
      <footer
        class="w-full md:flex md:justify-between uppercase"
      >
        <ul class="py-7 md:py-2 text-l md:text-2xl border-t px-3 sm:pl-3">
          <li class="md:inline-block mr-3"><strong>MON:</strong> ZzZ</li>
          <li class="md:inline-block mr-3">
            <strong>TUE-THU:</strong> 17:00 - 23:00
          </li>
          <li class="md:inline-block mr-3">
            <strong>FRI:</strong> 17:00-00:30
          </li>
        </ul>
        <p
          class="py-7 md:py-2 uppercase text-l md:text-2xl font-bold border-t px-3 sm:pr -3"
        >
          <a href="https://goo.gl/maps/EgkvLDNcH7Gb2SBdA" target="_blank"
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
