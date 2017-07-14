<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="zhimaauthorized">
      <p class="title">恭喜注册成功，完成实名认证开启借款之旅。</p>
      <input placeholder="真实姓名" type="text" maxlength="10" style="border:0px;" v-model="name" v-on:change="query(name)">
      <input placeholder="身份证号" type="text" maxlength="18" style="border:0px;" v-model="cardId" v-on:change="query(cardId)">


      <p class="bt_ok" @click="bt_ok">完成</p>

    </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui';
  export default{
      data(){
        return{
          name:"",cardId:""
        }
      },
      props: [],
      methods:{
        bt_ok(){
          if(this.name.length < 2 || this.name.length > 10 || /^[\u2E80-\u9FFF]+$/.test(this.name)){
            Toast("姓名有误");
          }else if(!/^[1-9]\d{5}(19\d{2}|[2-9]\d{3})((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}X)$/i.test(this.cardId)){
            Toast("身份证输入有误");
          }else{
            axios.post("http:creditapptest.hexinxiaodai.com",{
              userName:name,
              idCard:cardId,
            }).then(res=>{
              console.log(res.data)
            }).catch(res=>{
              console.log(res.data)
            })
          }
        }
      }
    }
</script>

<style type="text/css" scoped>
    *{
      padding: 0px;
      margin: 0px;
      width: 100%;
      height: 100%;
      list-style: none;
    }
    .zhimaauthorized{
      background-color: #f7f7f7;
    }
    .title{
      margin-top: 40px;
      color: #666;
      font-size: 30px;
      padding-left: 28px;
    }
    input{
      width:100%;
      height: 50px;
      margin-top: 20px;
      font-size: 30px;
      padding-left: 20px;
    }
    .bt_ok{
      margin-top: 56px;
      text-align: center;
      width: 92%;
      color: white;
      height: 80px;
      margin-left: 4%;
      line-height: 80px;
      background: #008dfe;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    img{
      margin-top: 84px;
      text-align: center;
      width: auto;
      height: auto;
    }
    p{
      width: 100%;
      text-align: left;
      color: #d0d0d0;
      font-size: 32px;
    }
</style>
