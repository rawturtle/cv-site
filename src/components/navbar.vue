<template lang="html">
  <nav class="navbar has-shadow">

    <div class="navbar-brand">
        <router-link to="/" class="link is-info navbar-item"><p id="brand" exact>/ crawstorn /</p></router-link>
      <div class="navbar-burger burger" data-target="app-navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="app-navbar" class="navbar-menu">
      <div class="navbar-start">
          <router-link to="/" class="link is-info navbar-item" exact>Home</router-link>
          <router-link to="/portfolio" class="link is-info navbar-item" exact>Portfolio</router-link>
          <router-link to="/transcript" class="link is-info navbar-item" exact>Transcript</router-link>
      </div>
    </div>

  </nav>
</template>
<script>
  export default {
    name: 'navbar',
    created: function () {
      document.addEventListener('DOMContentLoaded', function () {

        // Get all "navbar-burger" elements
        let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

              // Get the target from the "data-target" attribute
              let target = $el.dataset.target;
              let $target = document.getElementById(target);

              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            });
          });
        }
      });
    }
  }
</script>

<style scoped>
  .navbar-menu a.is-active {
    border-bottom: 1px black solid;
  }
  #brand {
    font-size: 25px;
    font-style: italic;
    margin-top: -5px;
  }
  .navbar-brand a:hover{
    color: #4a4a4a;
  }
</style>


