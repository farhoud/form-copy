<template>
  <v-btn icon color="#21dc78">
    <!--<img :src="sendUrl" alt="" width="16px" height="16px">-->
  </v-btn>
  <v-btn icon color="#21dc78">
    <!--<img :src="sendUrl" alt="" width="16px" height="16px">-->
  </v-btn>
</template>

<script>
global.browser = require("webextension-polyfill");
global.browser = require("@webcomponents/webcomponentsjs/webcomponents-bundle");
global.browser = require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
import store from "../store";

export default {
  store,
  components: {},
  props: ["show"],
  created() {}
};
</script>

<style>
@import "~vuetify/dist/vuetify.min.css";
</style>
