<template lang="html">
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
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
          <router-link to="/transcript" class="link is-info">Transcript</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="about" class="link is-info">About</router-link>
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
              $el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }

      });
    }
  }
</script>
<style>
  .is-active {
    /*border-bottom: aqua 1px solid;*/
  }

  #name-center {
    font-size: 30px;
  }
</style>


<!--
      <router-link to="/home" class="link is-info">Home</router-link>

      <router-link to="/transcript" class="link is-info">Transcript</router-link>

      <router-link to="about" class="link is-info">About</router-link>

      <router-link to="/transcript" class="link is-info">Transcript</router-link>

-->
