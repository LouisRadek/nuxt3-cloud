<script>
  export default {
    data () {
      return {
        isDarkThemeActive: false
      }
    },

    methods: {
      toggleTheme () {
        this.isDarkThemeActive = !this.isDarkThemeActive  
      }
    }
  }
</script>

<template>
  <VApp :theme="isDarkThemeActive ? 'dark' : 'light'">
    <div class="d-flex flex-row justify-end">
      <VBtn 
        icon="mdi-brightness-6"
        size="large"
        @click="toggleTheme" 
      />
    </div>
    <slot />
  </VApp>
</template>
