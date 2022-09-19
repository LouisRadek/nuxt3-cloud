<script>
export default {
  props: {
    files: {
      type: Array,
      required: true
    }
  },

  methods: {
    onDelete (id) {
      this.$emit('delete', id)
    }
  }
}
</script>

<template>
  <div>
    <VRow>
      <VCol
        v-for="file in files"
        :key="file.id"
        cols="6"
        sm="4"
        md="2"
        class="pa-6"
      >
        <FileListItem
          :file="file"
          @delete="onDelete(file.id)"
        />

      </VCol>
    </VRow>
  </div>
</template>
