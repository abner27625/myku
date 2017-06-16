<template>
    <div>
      <ul class="icon-list">
        <li class="icon" @click="goto('/modifyphone')">
          <h5>手机号</h5>
          <i></i>
        </li>
        <li class="icon" @click="goto('/modifypassword')">
          <h5>登录密码</h5>
          <i></i>
        </li>
      </ul>
      <span @click="goto('/firstpage')">退出账户</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      methods:{
        goto(path){
          this.$router.push(path)
        }
      }
    }
</script>

<style type="text/css" scoped>
  .icon i{
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 30px;
    position: absolute;
    width: 20px;
    height: 20px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  .icon-list{
    background-color: white;
    height: 240px;
    overflow-y: scroll;
  }
  .icon-list .icon{
    height: 100px;
    width: 100%;
    /*padding: 0 20px 10px 20px;*/
    position: relative;
    display: inline-block;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
  }
  span{
    color: black;
    margin-top: 100px;
    font-size: 60px;
    text-align: center;
  }
  h5{
    font-size: 30px;
    color: black;
    text-align: left;
  }
</style>
