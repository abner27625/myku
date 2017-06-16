<template>
  <div>
    <app-banner :listImg="listImg"></app-banner>
  </div>

</template>

<script>
  import banner from '../components/banner_item.vue'
  import a from '../assets/home_banner_enjoy.png'
  import b from '../assets/home_banner_enjoy.png'
  import c from '../assets/home_banner_enjoy.png'
  import d from '../assets/home_banner_enjoy.png'
  import e from '../assets/home_banner_enjoy.png'
  export default {
    name: 'banner',
    data() {
      return {
        listImg: [{
          url: a
        }, {
          url: b
        }, {
          url: c
        }, {
          url: d
        }, {
          url: e
        }]
      }
    },
    components: {
      'app-banner': banner
    }
  };
</script>
