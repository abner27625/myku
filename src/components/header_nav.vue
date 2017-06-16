<template>
    <div class="header">
      <mt-navbar fixed v-model="headNav" class="nav_header">
        <mt-tab-item id="first"  @click="goRouter(1)">
          借款相关
        </mt-tab-item>
        <mt-tab-item id="second" @click="goRouter(2)">
          审核放款
        </mt-tab-item>
        <mt-tab-item id="third"  @click="goRouter(3)">
          还款
        </mt-tab-item>
      </mt-navbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, TabItem } from 'mint-ui';
    import {mapState} from 'vuex';
    export default{
      props: [],
      components: {Navbar, TabItem},
      methods: {
        goRouter(index){
          switch (index) {
            case 1:
              this.$router.push({path: '/relateborrowing'});
              break;
            case 2:
              this.$router.push({path: '/reviewloan'});
              break;
            case 3:
              this.$router.push({path: '/reimbursement'});
              break;
          }
        }
      }
    }
</script>

<style scoped>
  .header{
    /*border-bottom: 3px solid #f4f4f4;*/
    position: fixed;
    left: 0;
    width: 100%;
    /*z-index: 1000;*/
    /*top: 51px;*/
  }
  .nav_header{
    background-color: deepskyblue;
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
    /*height: 200px;*/
  }
  #first,#second,#third{
    padding: 0 10px;
    font-size: 30px;
  }
</style>
