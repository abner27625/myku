<template >
    <div id="login_view">
      <input placeholder="用户名" type="text" style="border:0px;" v-model="name">
      <input placeholder="登录密码" type="password" maxlength="18" style="border:0px;" v-model="password">

      <p class="login" @click="login">登录</p>
    </div>
</template>

<script type="text/ecmascript-6">
    import {Toast} from 'mint-ui'
    export default{
      data(){
        return {name,password}
      },
      props: [],
      methods:{
        login(){

          Toast("登录尝试");
          var app_key="自己的appkey";
          var securityData = "name="+this.name+"&password="+this.password+"&appKey"+app_key;
          var securityHint = hex_md5(securityData);
          axios.post("http://creditapptest.hexinxiaodai.com",{
            mobilePhone:this.name,
            passWord:this.password,
            securityData:securityHint,
          }).then(res=>{
            console.log(res.data)
          }).catch(res=>{
            console.log(res.data)
          })
        }
      }
    }
</script>
<style scoped>
  *{
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    list-style: none;
  }
  #login_view{
    background: #f7f7f7;
  }
  input{
    width:100%;
    height: 50px;
    margin-top: 20px;
    font-size: 30px;
    padding-left: 20px;
  }
  .login{
    width:92%;
    position: fixed;
    bottom: 0px;
    height: 100px;
    background-color: #008dfe;
    color: white;
    font-size: 50px;
    text-align: center;
    margin-left: 4%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }


</style>
