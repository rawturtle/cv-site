<template>
  <div id="app">
      <navbar />
      <section class="section ">
        <div class="container is-fluid">
          <router-view/>
        </div>
      </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue';
  import appFooter from './components/footer.vue';

  export default {
    name: 'App',
    components: {
      navbar,
      'app-footer': appFooter,
    }
  }
</script>

<style>
#app {
  }
  a:hover {
    color: #008081 !important;
  }
  a {
    color: #008081!important;
  }

</style>
