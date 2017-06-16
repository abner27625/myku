<template>
    <div>
      <headernav></headernav>
      <router-view></router-view>
      <!--<mt-tab-container v-model="tabpage">
        <mt-tab-container-item id="first0">
          <relateborrowing></relateborrowing>
        </mt-tab-container-item>
        <mt-tab-container-item id="second0">
          <reviewloan></reviewloan>
        </mt-tab-container-item>
        <mt-tab-container-item id="third0">
          <reimbursement></reimbursement>
        </mt-tab-container-item>
      </mt-tab-container>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import headernav from '../../components/header_nav.vue'
//    import reimbursement from './children/reimbursement.vue';
//    import relateborrowing from './children/relateborrowing.vue';
//    import reviewloan from './children/reviewloan.vue';

    export default{
        props: [],
        components:{
          headernav,
        },
        created(){
          this.$router.push({path: '/relateborrowing'});
        },
        /*data(){
          return {
            selected:'first',
            tabpage: 'first0',
          }
        },*/
        /*watch: {
          selected:{
            handler:function (val,oldval) {
              this.tabpage = val+"0";
            },
            deep:true
          }
        }*/
    }
</script>
<style type="text/css" scoped>

</style>
