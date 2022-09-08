<script>
  export default {
    data() {
      return {
        isDarkThemeActive: true,
        isSearchBarExpanded: false,
        isHamburgerBarExpanded: false,
        stillAvailableStorage: '50',
        usedStorage: '7.5'
      }
    },

    methods: {
      toggleTheme() {
        this.isDarkThemeActive = !this.isDarkThemeActive  
      },

      toggleExpandSearchBar() {
        this.isSearchBarExpanded = !this.isSearchBarExpanded
      },

      toggleExpandHamburgerBar() {
        this.isHamburgerBarExpanded = !this.isHamburgerBarExpanded
      }
    }
  }
</script>

<template>
  <VApp :theme="isDarkThemeActive ? 'dark' : 'light'">
    <VAppBar>
      <VAppBarNavIcon @click="toggleExpandHamburgerBar" />

      <VAppBarNavIcon 
        icon="mdi-magnify"
        @click="toggleExpandSearchBar"
      />
      
      <VSlideXTransition>
        <VTextField 
        v-if="isSearchBarExpanded"
        class="SearchField mb-n5"
        density="compact"
        placeholder="search files"
        variant="outlined"
        />
      </VSlideXTransition>
      
      <VSpacer />
      
      <VAppBarNavIcon 
        icon="mdi-brightness-6"
        @click="toggleTheme" 
        />
        
        <VAppBarNavIcon 
        icon="mdi-logout"
        />
      </VAppBar>

      <VNavigationDrawer
        v-model="isHamburgerBarExpanded"
      >
        <VList nav>
          <VListItem 
            prepend-icon="mdi-clock-time-five-outline"
            title="Recently open files"
          />

          <VListItem 
            prepend-icon="mdi-trash-can-outline"
            title="Trashbin"
          />
          
          <VListItem prepend-icon="" />

          <VListItem 
            prepend-icon="mdi-cloud-outline"
            title="Storage"
          />

          <VListItem >
            <VProgressLinear 
              :model-value="stillAvailableStorage"
              background-color="secondary lighten-3"
              color="secondary lighten-1"
            />

            <VListItem>
              {{ `${usedStorage} GB of 15 GB used` }}
            </VListItem>
          </VListItem>        
        </VList>
      </VNavigationDrawer>

      <slot />
  </VApp>
</template>

<style scoped>
.SearchField :deep(.v-field) {
  border-radius: 20px !important
}
</style>
