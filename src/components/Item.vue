<template>
  <!--<f7-page>-->
    <div @click="flip">
      <f7-block>
        <f7-card>
          <f7-card-content v-bind:bg-color="toggleColor">
            <p>{{supply.item}}</p>
          </f7-card-content>
        </f7-card>
      </f7-block>
    </div>

  <!--</f7-page>-->
</template>

<script>
  export default {
    props: ['supply'],
    computed: {
      toggleColor(){

        if(this.supply.inCart){
          return "green";
        } else {
          return "red";
        }
      }
    },
    methods: {
      flip(){
        this.supply.inCart = !this.supply.inCart;
      }
    }


  };
</script>

<style scoped>

  /*.card-content {*/
    /*margin: 5px;*/
    /*padding: 5px;*/
  /*}*/

  p {
    font-size: 2em;
    font-weight: bold;
    color: black;
  }

</style>
