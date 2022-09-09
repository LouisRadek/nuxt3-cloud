<script>
  export default {
    data() {
      return {
        isDarkThemeActive: true,
        isSearchBarExpanded: false,
        isHamburgerBarExpanded: false,
        isInputFileVisible: false,
        stillAvailableStorage: '50',
        usedStorage: '7.5'
      }
    },

    methods: {
      toggleTheme () {
        this.isDarkThemeActive = !this.isDarkThemeActive  
      },

      toggleExpandSearchBar () {
        this.isSearchBarExpanded = !this.isSearchBarExpanded
      },

      toggleExpandHamburgerBar () {
        this.isHamburgerBarExpanded = !this.isHamburgerBarExpanded
      },

      toggleFileInputVisible () {
        this.isInputFileVisible = !this.isInputFileVisible 
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
        
      <VAppBarNavIcon icon="mdi-logout" />
    </VAppBar>

    <VNavigationDrawer
      v-model="isHamburgerBarExpanded"
      app
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

    <VMain>
      <slot />

      <VBtn
        v-model="isInputFileVisible"
        class="AddNewFileBtn"
        color="primary"
        size="large"
        icon="mdi-plus-thick"
        rounded
        @click="toggleFileInputVisible"  
      />

      <VSlideXReverseTransition>
        <div
          v-if="isInputFileVisible"
          class="AddNewFileInput"
        >
          <VCard
            rounded
            width="400"
            max-width="60vw"
            variant="flat"
          > 
            <VFileInput 
              counter
              class="mr-3 ma-1"
              clearable
              label="Select files"
              multiple
              variant="underlined"
            />
          </VCard>
        </div>
      </VSlideXReverseTransition>
    </VMain>
  </VApp>
</template>

<style scoped>
  .AddNewFileBtn {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }

  .AddNewFileInput {
    position: fixed;
    right: 100px;
    bottom: 10px;
  }
</style>
