<template>
  <div id="header">
    <div class="header">
      <div class="header-brand">
        <div class="brand-image">
          <img src="../../assets/colorbuddy-branding.png" alt="Colorbuddy Logo">
        </div>
      </div>
      <div class="header-items">
        <div class="header-item">Item 1</div>
        <div class="header-item">Item 2</div>
        <div class="header-item">Menu</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/style/variables/variables.scss';

.header {
  display: flex;
  height: 4em;
  background-color: #fff;
  box-shadow: $shadow;
  .header-brand {
    height: inherit;
    .brand-image {
      height: inherit;
      img {
        margin: 0.5em 0.5em;
        height: 3em;
      }
    }
  }

  .header-items {
    margin-left: auto;
    display: flex;
    .header-item {
      display: flex;
      align-items: center;
      font-size: 1em;
      padding: 0.5em;
    }
  }
}
</style>

