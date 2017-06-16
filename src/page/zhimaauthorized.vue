<template>
    <div class="zhimaauthorized">
      <h3>授权芝麻信用，有助于提升您的授信额度</h3>
      <!--<div class="authrorized">
        <form>
          <mt-field label="姓名" placeholder="" type="tel"
                    :value = "name"
                    @input = "name = arguments[0]"
                    :attr = "{ minlength:2, maxlength:10}"
                    :state = "status.name">
          </mt-field>
          <mt-field label="身份证" placeholder="请输入身份证号" type="password"
                    :value = "cardid"
                    @input = "cardid = arguments[0]"
                    :attr = "{ minlength:18, maxlength:18}"
                    :state = "status.cardid">
          </mt-field>
        </form>
      </div>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import { Field } from 'mint-ui';
    export default{
        props: []
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
    h3{
      text-align: left;
      padding-left: 40px;
      font-size: 30px;
      color: #333;
      background-color: #fff;
    }
    .authrorized{
      width: 80%;
      margin: 80px 50px 70px 40px;
    }
</style>
