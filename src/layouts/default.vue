<script>
  export default {
    data() {
      return {
        isDarkThemeActive: false
      }
    },

    methods: {
      toggleTheme() {
        this.isDarkThemeActive = !this.isDarkThemeActive  
      }
    }
  }
</script>

<template>
  <VApp :theme="isDarkThemeActive ? 'dark' : 'light'">
    <div class="d-flex flex-row justify-end">
      <VBtn 
        @click="toggleTheme" 
        icon="mdi-brightness-6"
        size="large"
      />
    </div>
    <slot />
  </VApp>
</template>
