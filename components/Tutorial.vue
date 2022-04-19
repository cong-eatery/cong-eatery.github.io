<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen py-5  ">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="w-full px-6 sm:px-12">
      <header class="flex justify-between">
        <NuxtLogo />
        <p class="font-bold uppercase">
          menu
          </p>
      </header>
      <div class="flex mt-8 gap-28">
          <div class="flex-1 text-3xl font-bold font-mono">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarodd</div>
          <div class="flex-1 hidden sm:block font-mono">
            <div class="w-9/12">  
              <h1 style="font-size: 13vw; letter-spacing: 0.8rem;" class="font-sans font-bold mb-7">cong</h1> 
              <p class="uppercase text-xs font-bold">
                Kornhamnstorg 51, 111 40 Stockholm
              </p>
              <p class="flex text-xs   justify-between">
                <ul>
                  <li>Tue - Thur</li>
                  <li>Fre - Sat</li>
                  <li>Sun - Mon</li>
                </ul>   
                <ul>
                  <li>17:00 - 23:00</li>
                  <li>17:00 - 00:30</li>
                  <li>ZzZzz (closed)</li>
                </ul>
              </p>
            </div>
          </div>
      </div>

      <ul class="flex mt-8 gap-2 uppercase list-discs">
          <li class="flex-1">
            <a href="#MAP">map</a>  
          </li>
          <li class="flex-1">
            <a href="#INSTAGRAM">instagram</a>
          </li>
          <li class="flex-1">
            <a href="#FACEBOOK">facebook</a>
          </li>
          <li class="flex-1">
            <a href="#TIKTOK">tiktok</a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NuxtLogo from './NuxtLogo';
export default {
  name: 'NuxtTutorial',
  components: [
    NuxtLogo
  ]
}
</script>
