<template>
  <div class="my-2 gap-28">
    <div class="font-mono justify-center text-center">
      <h1 class="text-8xl font-sans font-bold mb-7 uppercase">cong</h1>

      <Logo class="flex justify-center items-center mb-5" />

      <ul class="text-2xl">
        <li class="inline-block underline mr-2">
          <a href="#" @click="food">Food</a>
        </li>
        <li class="inline-block underline mr-2">
          <a href="#" @click="drink">Drink</a>
        </li>
        <li class="inline-block underline">
          <a href="https://goo.gl/maps/EgkvLDNcH7Gb2SBdA" target="_blank"
            >Find us</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  components: [Logo],
}
</script>
