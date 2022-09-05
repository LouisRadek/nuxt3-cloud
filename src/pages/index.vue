<template>
  <div class="root">
    <div class="container">
      <h1>
        Login
      </h1>

      <form
        action=""
        class="form-inner"
      >
        <input class='field1' type="text" placeholder=" Username">
        
        <input :type="passwordHidden ? 'password' : 'text'" v-model="password" class="field2" placeholder="Password">

        <input v-if="passwordHidden" v-model="password" class="field2" type="password" placeholder=" Password">

        <input v-else class="field2" v-model="password" type="text" placeholder=" Password">

        <div class="eye" @click="toggle">
          <svg class="eye-svg"  :class="{'eye-hidden': passwordHidden,'eye-visible': !passwordHidden}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>
        </div>

        <button class="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      passwordHidden: true,
      password: undefined,
    }
  },

  methods: {
    toggle() {
      this.passwordHidden = !this.passwordHidden
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: var(--bg-primary);
    height: 100%;
    max-width: 450px;
    padding: 40px 50px 65px 50px;
    border-radius: 40px;
    margin-top: 200px;
    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  }

  .field1, .field2 {
    border: 1px solid lightgray; 
    outline: none;
    background: #34343d;
    border-radius: 5px;
    margin: 25px;
    margin-bottom: 1px;
    width: 65%;
    transition: all 0.3s ease;
  }

  .field1:focus, .field2:focus {
    border-color: #6649b8;
  }

  .field1, .field2 ::placeholder {
    color: #999;
  }

  .eye {
    height: 18px;
    width: 18px;
    margin-top: -37px;
    margin-left: -33px;
    cursor: pointer;
  }

  .eye svg {
    height: 18px;
    width: 18px;
    cursor: pointer;
    margin-left: 295px;
    margin-top: -120px; 
  }

  .eye-hidden {
    filter: invert(100%) sepia(0%) saturate(7496%) hue-rotate(76deg) brightness(114%) contrast(97%);
  }

  .eye-visible {
    filter: invert(34%) sepia(13%) saturate(5915%) hue-rotate(229deg) brightness(86%) contrast(90%);
  }

  .submit {
    background: -webkit-linear-gradient(right, #7101d1, #800fdc, #8e1ae8, #9d23f3, #ac2cff);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 65%;
    margin-top: 50px;
  }
</style>