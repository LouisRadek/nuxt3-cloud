<script>
  export default {
    name: 'CloudFilePage',

    data() {
      return {
        folderIcon: 'mdi-folder',
        fileIcon: 'mdi-file',
        fileContextMenu: 'mdi-dots-vertical',
        files: [
          {
            id: '1',
            name: 'folder 1',
            type: 'folder'
          },
          {
            id: '2',
            name: 'file 1',
            type: 'file'
          }
        ]
      }
    },
    
    methods: {
      deleteFile (id) {
        console.log(`delete file ${id}`)
      }
    }
  }
</script>

<template>
  <div>
    <FileList
      v-if="files.length > 0"
      :files="files"
      @delete="id => deleteFile(id)"
    />
  </div>
</template>