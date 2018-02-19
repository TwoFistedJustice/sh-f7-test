<template>
  <f7-page>
    <f7-navbar title="Left Panel"></f7-navbar>
    <f7-block strong>
      <p>Some words can go here</p>
    </f7-block>
    <f7-block-title>Load page in main view</f7-block-title>
    <f7-list>
      <f7-list-item link='/supplies/' title="Supplies" view="#main-view" panel-close></f7-list-item>
      <!--<f7-list-item link="/form/" title="Form" view="#main-view" panel-close></f7-list-item>-->
    </f7-list>
  </f7-page>
</template>
<script>
  export default {}
</script>
