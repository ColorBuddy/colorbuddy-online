<template>
  <div id="palette" class="palette">
    <div class="palette-header">
      <div class="palette-title">
        <h3>Default Palette</h3>
      </div>
      <div class="palette-edits">
        <div class="edits-item">
          Edit          
        </div>
      </div>
    </div>
    <swatch-holder></swatch-holder>
  </div>
</template>

<script>
import SwatchHolder from './SwatchHolder';

export default {
  name: 'palette',
  components: {
    SwatchHolder
  }
}
</script>

<style lang="scss">
@import '../../assets/style/variables/variables';

.palette {
  background: #fff;
  margin: 2em 0em;
  box-shadow: $shadow;
  border-radius: $radius;

  .palette-header {
    padding: 0.5em 1em;
    display: flex;
    border-bottom: 2px solid $egg-white;
    margin-bottom: 1em;
  }
  .palette-edits {
    margin-left: auto;
    display: flex;
    .edits-item {
      display: flex;
      align-items: center;
    }
  }
}
</style>
