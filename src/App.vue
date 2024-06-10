<template>
 <div>
   <home-page/>
   <div class="scroll-to-top">
    <a href="#"><i class="icon fa-solid fa-circle-arrow-up"></i></a>
   </div>
 </div>
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  components: { HomePage },
  name: 'App',
  
}
</script>


