<template>
  <div class="home">
    <c-header></c-header>
    <div class="body">
      <palette-view></palette-view>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from '../components/header/Header';
import PaletteView from './PaletteView';
import CFooter from '../components/footer/Footer';

export default {
  components: {
    CHeader,
    PaletteView,
    CFooter
  }
}
</script>

<style lang="scss">
.body {
  min-height: calc(100vh - 4em);
}
</style>
