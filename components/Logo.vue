<template>
  <div>
    <img class="cong-logo" 
      :src="hover ? '/shark.jpeg' : 'squid.jpeg'" 
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
      hover: false
    }
  },
}
</script>
<style>
.cong-logo {  
  height: 280px;
}
</style>
