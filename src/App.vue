<template>
  <div id="app">
    <the-header></the-header>
    <the-main></the-main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheMain from "./pages/Main.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheMain,
    TheHeader,
    TheFooter
  },
  data() {
    return {};
  }
};
</script>

<style  lang="scss">
@import "./assets/font/font.css";
$base-font-size: 16px !default;

@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}
$device-list: 320px 360px 400px 440px 480px 520px 560px 600px 640px;
@each $current-device in $device-list {
  @media screen and (min-width: $current-device) {
    body,
    html {
      font-size: $current-device * 0.015;
      // font-size: 18px;
    }
  }
}

* {
  font-family: "Noto Sans TC", "roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
body {
  display: block;
  margin: 0px;
  width: 100vw;
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
