<script>
  definePageMeta({
    layout: 'blank'
  })

  export default {
    name: 'IndexPage',

    data() {
      return {
        isFormValid: null,
        username: '',
        password: '',
        honeyPot: '',
        isPasswordVisible: false,
        isStayLoggedInActive: false
      }
    },

    rules: {
      required: input => !!input || 'Required',

      min: input => input.length >= 8 || 'Min 8 characters',

      invalidChars: input => {
        const regex = new RegExp('[\'\"\.,<>!?*@();:/=+\\-*]')
        return input.match(regex) === null || 'Invalid characters'
      }
    },

    methods: {
      onSubmit () {
        if (this.honeyPot !== '') return

        if (this.valid !== true) {
          alert('Your username or password is invalid')
          return
        }

        // send the data to the backend for the validation process
      }
    }
  }
</script>

<template>
  <div class="h-100 ">
    <VContainer 
      class="
        h-100 
        d-flex 
        flex-column 
        justify-center 
        align-center
      "
    >
      <VCard
        width="400"
      >
        <VForm
          v-model="isFormValid"
          class="pa-4"
        >
          <VRow justify="center">
            <VCol cols="10">
              <VTextField
                v-model="username"
                :rules="[
                  $options.rules.invalidChars,
                  $options.rules.required, 
                  $options.rules.min
                ]"
                counter
                density="comfortable"
                label="Username"
                variant="underlined"
              />
            </VCol>
          </VRow>
      
          <VRow justify="center">
            <VCol cols="10">
              <VTextField
                v-model="password"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[
                  $options.rules.invalidChars,
                  $options.rules.required, 
                  $options.rules.min
                ]"
                :type="isPasswordVisible ? 'text' : 'password'"
                counter
                density="comfortable"
                label="Password"
                variant="underlined"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
    
              <input type="hidden" v-model="honeyPot">
            </VCol>
          </VRow>
      
          <VRow justify="center">
            <VCol cols="10">
              <VSwitch
                v-model="isStayLoggedInActive"
                color="secondary"
                density="compact"
                size="large"
                label="stay logged in"
              />
            </VCol>
          </VRow>
      
          <VRow justify="center">
            <VCol cols="10">
              <VBtn
                variant="flat" 
                size="large"
                color="primary"
                class="w-100"
                @click="onSubmit"
              >
                Login
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VContainer>

  </div>
</template>
