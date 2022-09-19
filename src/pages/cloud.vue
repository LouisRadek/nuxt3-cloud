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
            name: 'folderofUserblalal',
            type: 'folder'
          },
          {
            id: '2',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '3',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '4',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '5',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '6',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '7',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '8',
            name: 'file 1',
            type: 'file'
          },
          {
            id: '9',
            name: 'file 1',
            type: 'file'
          },
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