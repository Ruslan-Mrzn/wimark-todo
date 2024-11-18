<template>
  <section
    class="request-modal"
    :class="[
        requestState.idle || requestState.loading ? 'processing' : '',
        requestState.error ? 'error' : '',
        requestState.success ? 'success' : ''
      ]"
  >
    <div
      v-if="requestState.loading"
      class="spinner-container"
      >
      <Spinner/>
    </div>
    <p>
      {{ requestState.idle ? idleText : '' }}
      {{ requestState.loading ? loadingText : '' }}
      {{ requestState.error ? errorText : '' }}
      {{ requestState.success ? successText : '' }}
    </p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Spinner from './Spinner';

export default {
  name: 'RequestModal',
  components: { Spinner },
  data() {
    return {
      idleText: 'The data download is about to start',
      loadingText: 'Loading the data',
      errorText: 'An error occurred while loading the data',
      successText: 'The data has been loaded successfully',
    };
  },
  computed: {
    ...mapGetters([
      'requestState',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .request-modal {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 230px;
    max-width: 550px;
    min-height: 50px;
  }
  .request-modal:hover {
    opacity: 1;
    visibility: visible;
  }

  .processing {
    background-color: rgba(163, 222, 233, 0.5);
  }

  .error {
    background-color: rgba(233, 115, 131, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 7000ms, opacity 7000ms;
  }

  .success {
    background-color: rgba(150, 250, 183, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 7000ms, opacity 7000ms;
  }

  p {
    font-size: 20px;
    padding-right: 20px;
  }

  .spinner-container {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
