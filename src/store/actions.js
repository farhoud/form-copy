import * as types from "./mutation-types";

//actions
export const set = function({ commit }, value) {
  commit(types.SET, value);
};
