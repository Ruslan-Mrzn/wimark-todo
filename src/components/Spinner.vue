<template>
  <span class="loader"></span>
</template>

<script>
export default {
  name: 'Spinner',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loader {
    width: 35px;
    height: 35px;
    border: 5px solid;
    border-color: #FF3D00 transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
