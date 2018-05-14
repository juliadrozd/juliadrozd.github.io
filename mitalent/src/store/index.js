import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase';
import * as types from './types';

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        profiles: [],
        btnValue: '',
        category: 'all',
        isShowList: false,
        //search: '',

    },
    getters: {
        profiles(state) {
            return state.profiles;
        },
        btnValue(state) {
            return state.btnValue;
        },
        isShowList(state) {
            return state.isShowList;
        },
        // search(state) {
        //     return state.search;
        // }
    },
    mutations: {
        [types.GET_PROFILES](state, profiles) {
            state.profiles = profiles;
        },
        [types.BTN_NAME](state, btnValue) {
            state.btnValue = btnValue;
        },
        [types.IS_LIST](state, isShowList) {
            state.isShowList = isShowList;
        },
        // [types.SEARCH_PERSON](state, search) {
        //     if (!search || search === '') {
        //         state.search = 'empty';
        //     } else {
        //         state.search = search;
        //         return state.profiles.filter(profile => {
        //             return profile.name.toLowerCase().match(search.toLowerCase()) > -1
        //         })
        //     }
        // }
    },
    actions: {
        getProfiles({ commit }) {
            let profiles = [];
            firebase.database().ref('profile').once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let childData = childSnapshot.val();
                    profiles.push(childData);
                });
            });
            commit(types.GET_PROFILES, profiles);
        },
        btnName({ commit }, btnValue) {
            commit(types.BTN_NAME, btnValue)
        },
        isList({ commit }, isShowList) {
            commit(types.IS_LIST, isShowList);
        },
        // searchPerson({ commit }, search) {
        //     commit(types.SEARCH_PERSON, search);
        // },
    }
    // strict: process.env.NODE_ENV !== 'production',
});