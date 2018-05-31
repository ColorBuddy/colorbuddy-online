<template>
  <div id="swatch-holder" class="swatch-holder">
    <swatch v-for="(swatch, index) in swatches" :key="index" :hex="swatch.hex"></swatch>
    <swatch-add></swatch-add>
  </div>
</template>

<script>
import Swatch from './Swatch';
import SwatchAdd from './SwatchAdd';

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
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
        },
        {
          hex: '7E6451'
        },
        {
          hex: '595959'
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
  padding: 0.5em 1em;
  display: flex;
  flex-wrap: wrap;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(3em, auto));
    grid-gap: 0.5em;
    grid-auto-rows: minmax(3em, auto);
    grid-auto-flow: dense;
  }
}
</style>
