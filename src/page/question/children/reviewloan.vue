<template>
    <div>
      <ul id="all">
        <li class="title" type="1">借款有年龄限制么?</li>
        <ul>
          <li class="content">23-55（不含）周岁符合相应借款条件的中国公民。</li>
        </ul>
        <li class="title" type="1">征信报告的有效期是多长时间?</li>
        <ul>
          <li class="content">15天。一般情况征信报告由央行征信中心个人信用信息服务平台网查获的，且无需支付费用。特殊情况可申请代查。</li>
        </ul>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: []
    }
</script>

<style type="text/css" scoped>
  #all{
    padding-top: 50px;
  }
  .title{
    font-size: 26px;
    margin-left: 100px;
    text-align: left;
    margin-top: 10px;
  }
  .content{
    list-style-type: none;
    text-align: left;
    font-size: 20px;
    margin-top: 10px;
  }
</style>
