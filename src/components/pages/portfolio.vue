<template>
  <div>
    <div class="tabs is-centered is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span>Igtimi #2</span>
          </a>
        </li>
        <li>
          <a>
            <span>Igtimi #1</span>
          </a>
        </li>
        <li>
          <a>
            <span>Octagon</span>
          </a>
        </li>
        <li>
          <a>
            <span>Tesh Website</span>
          </a>
        </li>
      </ul>
    </div>

    <!--content-->
    <div>
      <igtimi-one></igtimi-one>

    </div>
    <!--end content-->

  </div>
</template>

<script>
  import igtimiOne from "./portfolio/igtimiOne";

  export default{
    name: 'about',
    // data() {
    //
    // },
    components: {
      'igtimi-one': igtimiOne
    }
  }
</script>
