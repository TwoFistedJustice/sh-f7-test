<template>
  <f7-page>
    <f7-navbar title="Supplies" back-link="Close"></f7-navbar>

      <test-item v-for="supply in supplies"
                 :key="supply.item"
                  :supply="supply"></test-item>

  </f7-page>
</template>

<script>
  // import {mapGetters} from 'vuex';
  import testItem from './Item.vue';

  export default {
    data: function(){
      return {
        supplies : [
          {have:false, inCart: false, item: 'Stuff'},
          {have:true, inCart: false, item: 'Things'},
          {have:false, inCart: true, item: 'Toys'},
          {have:false, inCart: false, item: 'Lots Of Candy'},
          {have:true, inCart: true, item: 'Even More Toys'},
          {have:false, inCart: false, item: 'Fluff'}
        ]
      };
    },

// computed: {
//   ...mapGetters([
//     'getSupplies'
//   ]),
//
// },
    components:{
     testItem
    }

  }
</script>
