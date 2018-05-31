<template>
  <div id="swatch" class="swatch" ref="swatch">
  </div>
</template>

<script>
export default {
  props: {
    hex: {
      default: 'ffffff'
    }
  },
  mounted() {
    this.$refs.swatch.style.backgroundColor = `#${this.hex}`
  }
}
</script>

<style lang="scss">
@import '../../assets/style/variables/variables';

.swatch {
  border-radius: $radius;
}
</style>
