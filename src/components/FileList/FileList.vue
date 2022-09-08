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
    <FileListItem
      v-for="file in files"
      :key="file.id"
      :file="file"
      @delete="onDelete(file.id)"
    />
  </div>
  <VBtn @click="onDelete('test')">click me</VBtn>
</template>
