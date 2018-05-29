<template>
  <div id="swatch-holder">
    Swatch-Holder
    <swatch></swatch>
    <swatch></swatch>
    <swatch></swatch>
  </div>
</template>

<script>
import Swatch from './Swatch';

export default {
  name: 'swatchholder',
  components: {
    Swatch
  }
}
</script>
