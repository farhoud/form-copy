import * as types from "./mutation-types";

// initial state
export const state = {
  clipboard: null
};

// mutations
export const mutations = {
  [types.SET](state, value) {
    state.clipboard = value;
  }
  // [types.TOGGLE_RECORDING](state) {
  //   state.isAudioRecording = !state.isAudioRecording;
  // }
};
