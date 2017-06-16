<template>
    <div>
      <ul id="all">
        <li class="title" type="1">最高贷款金额是多少?可以贷多长时间?</li>
        <ul>
        <li class="content">目前贷款额度最高20万，额度方位2-20万，最长可分为3年36期还款，可选12、24期。</li>
        </ul>
        <li class="title" type="1">在贵公司借款会有哪些费用产生?</li>
        <ul>
        <li class="content">您需要偿还出借人的本金及利息，支付我司咨询费及财务费。除此以外无任何其他费用。</li>
        </ul>
        <li class="title" type="1">提交申请后多长时间可以放款?</li>
        <ul>
        <li class="content">一般放款时长为3个工作日左右，最宽当天放款。具体放款时间根据每位客户情况有所不同。</li>
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
