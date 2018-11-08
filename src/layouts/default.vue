<template>
  <div>
    <TopNavigation />
    <nuxt/>
  </div>
</template>

<script>
  import TopNavigation from '~/components/TopNavigation.vue'

  export default {
    components: {
      TopNavigation
    }
  }
</script>
