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

  methods: {
    onClickDelete () {
      this.$emit('delete')
    }
  }
}
</script>

<template>
  <div>
    {{ file.name }}

    <VBtn @click="onClickDelete">delete {{ file.name }}</VBtn>
  </div>
</template>
