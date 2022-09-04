<script setup>

</script>

<template>
    <Navbar/>
    <SearchBox/>
    <Detail/>
</template>



<script>
  import Navbar from './components/menu/navbar.vue'
  import SearchBox from './components/search/search.vue'
  import Detail from './components/detail/detail.vue'
  
  export default {
    name: 'App',
    components: {
      Navbar,
      SearchBox,
      Detail
    }
  }
  </script>