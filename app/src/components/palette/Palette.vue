<template>
  <div id="palette">
    <h2>Default Palette</h2>
    <swatch-holder></swatch-holder>
  </div>
</template>

<script>
import SwatchHolder from './Swatch-holder';

export default {
  name: 'palette',
  components: {
    SwatchHolder
  }
}
</script>

<style lang="scss">
</style>
