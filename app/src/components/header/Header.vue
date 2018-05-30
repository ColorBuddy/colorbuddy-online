<template>
  <div id="header">
    <div class="header">
      <div class="container">
        <div class="header-brand">
          <div class="brand-image">
            <img src="../../assets/colorbuddy-branding.png" alt="Colorbuddy Logo">
          </div>
        </div>
        <div class="header-items">
          <div class="header-item">
            Try the browser extension
            <button class="button primary">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/style/variables/variables.scss';

.header {
  font-weight: bold;
  display: flex;
  height: 6em;
  background-color: #fff;
  box-shadow: $shadow;
  .header-brand {
    height: inherit;
    .brand-image {
      height: inherit;
      img {
        margin: 1.5em 1.5em;
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

