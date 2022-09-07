<script>
  export default {
    data() {
      return {
        isDarkThemeActive: true
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
    <VAppBar>
      <VAppBarNavIcon />

      <VAppBarNavIcon 
        icon="mdi-magnify"
      />

      <VTextField 
        class="SearchField"
        density="compact"
        placeholder="search in your files"
        variant="outlined"
      />

      <VSpacer />

      <VAppBarNavIcon 
        icon="mdi-brightness-6"
        @click="toggleTheme" 
      />

      <VAppBarNavIcon 
        icon="mdi-logout"
      />
    </VAppBar>
    <slot />
  </VApp>
</template>

<style scoped>
.SearchField :deep(.v-field__field) {
  border-radius: 50%;
}
</style>
