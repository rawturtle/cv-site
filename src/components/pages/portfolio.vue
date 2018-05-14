<template>
  <div>
    <div class="tabs is-boxed">
      <ul>
        <li @click="selected='tab1'" v-bind:class="{'is-active': isActive('tab1')}">
          <a>
            <span>Igtimi 2</span>
          </a>
        </li>
        <li @click="selected='tab2'" v-bind:class="{'is-active': isActive('tab2')}">
          <a>
            <span>Igtimi 1</span>
          </a>
        </li>
        <li @click="selected='tab3'" v-bind:class="{'is-active': isActive('tab3')}">
          <a>
            <span>Octagon</span>
          </a>
        </li>
        <li @click="selected='tab4'" v-bind:class="{'is-active': isActive('tab4')}">
          <a>
            <span>Tesh</span>
          </a>
        </li>
      </ul>
    </div>

    <!--content-->
    <div id="tab-content">
      <p v-bind:class="{'is-active': isActive('tab1')}">
        <igtimi-two></igtimi-two>
      </p>
      <p v-bind:class="{'is-active': isActive('tab2')}">
        <igtimi-one></igtimi-one>
      </p>
      <p  v-bind:class="{'is-active': isActive('tab3')}">
        <octagon></octagon>
      </p>
      <p v-bind:class="{'is-active': isActive('tab4')}">
        <tesh></tesh>
      </p>
    </div>
    <!--end content-->

  </div>
</template>

<script>
  import igtimiTwo from "./portfolio/igtimiTwo";
  import igtimiOne from "./portfolio/igtimiOne";
  import octagon from "./portfolio/octagon";
  import tesh from "./portfolio/tesh";


  export default {
    name: 'about',
    components: {
      'igtimi-one': igtimiOne,
      'igtimi-two': igtimiTwo,
      'octagon': octagon,
      'tesh': tesh
    },
    data() {
      return {
        selected: 'tab1'
      }
    },
    methods: {
      isActive(item) {
        return this.selected === item
      }
    }
  }
</script>

<style scoped>
  #tab-content p {
    display: none;
  }

  #tab-content p.is-active {
    display: block;
  }

</style>
