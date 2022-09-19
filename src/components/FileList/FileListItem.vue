<script>
export default{
  props: {
    file: {
      type: Object,
      required: true,
      validator(file) {
        return (
          file.id !== undefined &&
          file.name !== undefined &&
          file.type !== undefined
        )
      }
    }
  },

  data () {
    return {
      isContextBarVisible: false
    }
  },

  methods: {
    toggleContextBar () {
      this.isContextBarVisible = !this.isContextBarVisible
    },  

    onClickDelete () {
      this.$emit('delete')
    },

    onClickDownload () {
      this.$emit('download')
    },

    onClickRename () {
      this.$emit('rename')
    },

    onClickMove () {
      this.$emit('move')
    }

  }
}
</script>

<template>
  <VSheet
    class="d-flex flex-column justify-center align-center"
    color="transparent"
  >
    <VIcon
      :color="file.type === 'folder' ? 'tertiary' : 'grey'"
      :size="file.type === 'folder' ? '100' : '90'"
    >
      {{ `mdi-${file.type}` }}
    </VIcon>
    
    <div 
      :class="file.type === 'folder' ? 'mt-n2 mb-2' : ''"
      class="File"
    >
      <div class="File-fileName">
        {{ file.name }}
      </div>

      <div class="File-fileActions">
        <VBtn
          rounded
          size="25px"
          variant="text"
        >
          <VIcon 
            color="grey"
            size="24px"
          >
            mdi-dots-vertical
          </VIcon>

          <VMenu 
            activator="parent" 
            location="end"
          > 
            <VList> 
              <VList-item 
                prepend-icon="mdi-trash-can-outline"
                @click="onClickDelete"                
              >
                Delete
              </VList-item>

              <VList-item 
                prepend-icon="mdi-download"
                @click="onClickDownload"
              >
                Download
              </VList-item>

              <VList-item 
                prepend-icon="mdi-rename-box"
                @click="onClickRename"
              >
                Rename
              </VList-item>

              <VList-item 
                prepend-icon="mdi-folder-arrow-right"
                @click="onClickMove"
              >
                Move
              </VList-item>
            </VList>
          </VMenu>
        </VBtn>

      </div>
    </div>
  </VSheet>
</template>

<style scoped>
  .File {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 70px 1fr;
    grid-auto-rows: minmax(25px, auto);
  }

  .File-fileName {
    text-align: center;
    grid-column-start: 2;
    grid-column-end: 3;
    line-break: anywhere;
  }

  .File-fileActions {
    padding-left: 5px;
  }

</style>
