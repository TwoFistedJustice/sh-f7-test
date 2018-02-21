<template>
  <!-- Share House F7 Test-->
  <div id="app">
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel with "cover" effect -->
    <f7-panel left cover theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel with "reveal" effect -->
    <!--<f7-panel right reveal>-->
      <!--<f7-view>-->
        <!--<f7-page>-->
          <!--<f7-navbar title="Right Panel"></f7-navbar>-->
          <!--<f7-block>-->
            <!--<p>Here comes the right panel text</p>-->
          <!--</f7-block>-->
        <!--</f7-page>-->
      <!--</f7-view>-->
    <!--</f7-panel>-->

    <!-- Main view-->
    <f7-view id="main-view" main>
      <f7-page>
        <f7-navbar title="house name">
          <f7-button panel-open="left">Left Panel</f7-button>
        </f7-navbar>

        <!-- Toolbar-->
        <!--<f7-toolbar>-->
          <!--<f7-link>Link 1</f7-link>-->
          <!--<f7-link>Link 2</f7-link>-->
          <!--<f7-link>Link 3</f7-link>-->
        <!--</f7-toolbar>-->

        <!-- Page content -->
        <f7-block>
          <p>user name</p>
        </f7-block>
        <!-- Buttons to open panels -->
        <!--<f7-row>-->
          <!--<f7-col>-->
            <!--<f7-button panel-open="left">Left Panel</f7-button>-->
          <!--</f7-col>-->
          <!--<f7-col>-->
            <!--<f7-button panel-open="right">Right Panel</f7-button>-->
          <!--</f7-col>-->
        <!--</f7-row>-->
        <!-- Button to open popup -->
        <f7-button popup-open="#my-popup">Open Popup</f7-button>
      </f7-page>
    </f7-view>

    <!-- Popup. All modals should be outside of Views -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <!-- Link to close popup -->
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Here comes popup text</p>
            <p>This would be a great place to put the chore wheel output</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>


  </div>
  <!-- ... scripts ... -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
