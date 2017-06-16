<template>
    <div>
        <div class="bottom">
            <section class="bottom_item" @click = "gotoAddress('/firstpage')">
              <img src="../assets/home_toolbar_jie_hover.png">
              <br>
              <span>借款</span>
            </section>
            <section class="bottom_item" @click = "gotoAddress('/accountpage')">
              <img src="../assets/home_toolbar_wo_hover.png">
              <br>
              <span>我的</span>
            </section>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      methods: {
        gotoAddress(path){
          this.$router.push(path)
        }
      },
    }
</script>
<style type="text/css" scoped>
  .bottom{
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background-color: red;
    height: 140px;
    /*margin-bottom: 30px;*/
    text-align: center;
    <!--设置分栏数-->
    -webkit-columns: 2;
    -moz-columns: 2;
    -o-columns: 2;
    columns: 2;
    <!--设置分栏间隔线-->
    -webkit-column-rule: 1px solid red;
    -moz-column-rule: 1px solid red;
    -o-column-rule: 1px solid red;
    column-rule: 1px solid red;
  }
  .bottom_item{
    margin-top: 30px;
  }
  hr{
    height: 1px;
    color: gray;
  }
  span{
    font-size: 30px;
    line-height: 38px;
  }
  .bottom_item > img{
    text-align: center;
  }
</style>
