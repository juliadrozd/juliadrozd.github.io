import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types';

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        isShowPopup: false,
        isShowOverlay: false,

    },
    getters: {
        isShowPopup(state) {
            return state.isShowPopup;
        },
        isShowOverlay(state) {
            return state.isShowOverlay;
        },
    },
    mutations: {
        [types.IS_POPUP](state, isShowPopup) {
            state.isShowPopup = isShowPopup;
        },
        [types.IS_OVERLAY](state, isShowOverlay) {
            state.isShowOverlay = isShowOverlay;
        },
    },
    actions: {
        isPopup({ commit }, isShowPopup) {
            commit(types.IS_POPUP, isShowPopup);
        },
        isOverlay({ commit }, isShowOverlay) {
            commit(types.IS_OVERLAY, isShowOverlay);
        },
    }
    // strict: process.env.NODE_ENV !== 'production',
});