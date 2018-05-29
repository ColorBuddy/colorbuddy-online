<template>
  <div id="palette-view">
    <div class="container">
      <palette></palette>
    </div>
  </div>
</template>

<script>
import Palette from '../components/palette/Palette';

export default {
  name: 'paletteview',
  components: {
    Palette
  }
}
</script>
