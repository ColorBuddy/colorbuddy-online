<template>
  <div class="home">
    <c-header></c-header>
    <palette-view></palette-view>
  </div>
</template>

<script>
import CHeader from '../components/header/Header';
import PaletteView from './PaletteView';

export default {
  components: {
    CHeader,
    PaletteView
  }
}
</script>

<style lang="scss">
</style>
