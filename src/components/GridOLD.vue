<template>
  <f7-page>
    <f7-navbar title="Supplies" back-link="Close"></f7-navbar>
    <!--<f7-block-title>Supplies</f7-block-title>-->
    <f7-block strong>
      <div @click="flip">
      <f7-card v-for="supply in getSupplies"
               :key="supply.item">

        <f7-card-content  v-bind:bg-color="toggleColor">
          {{supply.item}}
        </f7-card-content>
      </f7-card>
      </div>
    </f7-block>

    <!--<f7-block strong no-hairlines>-->
      <!--<p>stuff</p>-->
    <!--</f7-block>-->
  </f7-page>
</template>

<script>
  // {have:false, inCart: false, item: 'Stuff'}
  import {mapGetters} from 'vuex';
  import testItem from './Item.vue';

  export default {
   data: function(){
     return {
       toggle: false,

     };
    },
methods:{
     flip(){
       this.toggle = !this.toggle;
     }
},
computed: {
  ...mapGetters([
    'getSupplies'
  ]),
  toggleColor(){
    if(this.toggle){
      return "green";
    } else {
      return "red";
    }
  }
},
    components:{
     testItem
    }

  }
</script>
