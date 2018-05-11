<template lang="html">
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item" id="brand-link" href="#">
        <!--<img src="../assets/images/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="125" height="55">-->
        <p id="brand">/ crawstorn /</p>
      </a>
      <div class="navbar-burger burger" data-target="app-navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="app-navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/home" class="link is-info">Home</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/portfolio" class="link is-info">Portfolio</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/transcript" class="link is-info">Transcript</router-link>
        </a>
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
              $el.classList.toggle('active');
              $target.classList.toggle('active');

            });
          });
        }

      });
    }
  }
</script>
<style>
  .navbar {
    /*border-bottom: 1px solid black;*/
  }
  #brand {
    font-size: 25px;
    font-style: italic;
    margin-top: -5px;
  }
  #brand-link:hover{
    color: #4a4a4a;
  }
</style>


