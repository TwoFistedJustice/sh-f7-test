import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{

    house: {
      name: 'Christmas Town',
      members: [
        {name: "Sandy Claws", role: "Admin"},
        {name: "Rambo Reindeer", role: "Member"}
      ]
    },

    supplies : [
      {have:false, inCart: false, item: 'Stuff'},
      {have:true, inCart: false, item: 'Things'},
      {have:false, inCart: true, item: 'Toys'},
      {have:false, inCart: false, item: 'Lots Of Candy'},
      {have:true, inCart: true, item: 'Even More Toys'}
    ]

  },
  getters:{
    getSupplies(state){
      return state.supplies;
    },

    getHouse(state){
      return state.house;
    }

  },
  mutations:{},
  actions:{}
  // modules: {}

}); // END STORE
