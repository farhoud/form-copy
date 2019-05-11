<template>
  <div>
    <v-btn icon color="#21dc78">
      <!--<img :src="sendUrl" alt="" width="16px" height="16px">-->
    </v-btn>
    <v-btn icon @click="copy" color="#21dc78">
      <!--<img :src="sendUrl" alt="" width="16px" height="16px">-->
    </v-btn>
  </div>
</template>

<script>
global.browser = require("webextension-polyfill");
global.browser = require("@webcomponents/webcomponentsjs/webcomponents-bundle");
global.browser = require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
import store from "../store";
import CssSelectorGenerator from "css-selector-generator";
import $ from "jquery";
var port = chrome.runtime.connect();
export default {
  store,
  components: {},
  props: ["show"],
  methods: {
    copy: function() {
      let message = { action: "copy" };
      let form_inpu = [];

      $.find(":input").map(el => {
        let my_selector_generator = new CssSelectorGenerator();
        form_inpu.push(el);
        console.log($(my_selector_generator.getSelector(el)).val());
        console.log(my_selector_generator.getSelector(el));
      });
      chrome.runtime.sendMessage({ ...message, payload: form_inpu }, msg => {
        console.log(msg);
      });
    }
  },
  created() {}
};
</script>

<style>
@import "~vuetify/dist/vuetify.min.css";
</style>
