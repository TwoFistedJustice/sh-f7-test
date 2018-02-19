<template>
  <!-- App Root Element -->
  <div id="app">
    <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
    <f7-statusbar></f7-statusbar>
    <!-- Your main view, should have "main" prop -->
    <f7-view main>
      <!-- Initial Page -->
      <f7-page>


        <!-- Top Navbar-->
        <f7-navbar title="sh8-F7 test"
                    subtitle="some words below"
        ></f7-navbar>
        


        <!-- Toolbar-->
        <f7-toolbar>
          <f7-link>Link 1</f7-link>
          <f7-link>Link 2</f7-link>
          <f7-link>Link 3</f7-link>
        </f7-toolbar>


        <!-- Page Content -->
        <p>Page content goes here</p>
        <f7-link href="/about/">About App</f7-link>


      </f7-page>
    </f7-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
