<template>
  <div id="swatch-holder" class="swatch-holder">
    <swatch v-for="(swatch, index) in swatches" :key="index" :hex="swatch.hex"></swatch>
    <swatch-add></swatch-add>
  </div>
</template>

<script>
import Swatch from './Swatch';
import SwatchAdd from './Swatch-add';

export default {
  name: 'swatchholder',
  components: {
    Swatch,
    SwatchAdd
  },
  data() {
    return {
      swatches: [
        {
          hex: '75DC92'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.swatch-holder {
  display: flex;
}
</style>
