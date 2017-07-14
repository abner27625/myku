<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="loanDetailInfo">
        <div class="header" v-for="info in infoList">
          <img class="banner"  v-bind:src="info.url">
          <img class="back" src="../assets/huankuan_top_arrow.png" @click="goto('/firstpage')"/>
        </div>
        <div v-for="info in infoList">
          <img class="smallicon" src="../assets/pro_icon_renqun.png"/>
          <span class="hint">适用人群</span>
          <h4>{{info.applicablePeople}}</h4>
          <img class="smallicon" src="../assets/pro_icon_condition.png"/>
          <span class="hint">申请条件</span>
          <ul>
            <li v-for="item in info.applicationRequirement">
              {{item}}
            </li>
          </ul>
          <img class="smallicon" src="../assets/pro_icon_jieshao.png"/>
          <span class="hint">产品介绍</span>
          <div class="flex_container">
            <div class="product_item">
              <img src="../assets/pro_icon_edu.png">
              <span>额度 (万元)</span>
              <span>2~20</span>
            </div>
            <div class="product_item">
              <img src="../assets/pro_icon_time.png">
              <span>期限 (月)</span>
              <span>12/24/36</span>
            </div>
            <div class="product_item">
              <img src="../assets/pro_icon_feilv.png">
              <span>综合费率</span>
              <span>{{info.comprehensiveRate}}</span>
            </div>
          </div>
        </div>
      <p @click="click">立即申请</p>

    </div>
</template>

<script type="text/ecmascript-6">
    import { Toast } from 'mint-ui';
    /*import a from '../assets/home_banner_enjoy.png'
    import b from '../assets/home_banner_gjj.png'
    import c from '../assets/home_banner_bus.png'
    import d from '../assets/home_banner_sx.png'
    import e from '../assets/home_banner_sb.png'
    import f from '../assets/home_banner_jy.png'*/
    export default{
      created:function(){

      },
      props: [],
      mounted:function(){
        this.$nextTick(function () {
//          debugger;
          var i = this.$route.query.type;
          var temp = null;
          console.log(i);
          switch (i) {
            case "1":
              temp = {
                url:require("../assets/pro_top_banner_enjoy.png"),
//                url:a,
                comprehensiveRate: "1.78",
                applicablePeople: "有微粒贷授信额度且使用过该额度的人群",
                applicationRequirement: [
                  "23-55（不含）周岁具有完全民事行为的中国公民", "申请人当期有未结清微粒贷借款或历史微粒贷借款结清日期在近三个月内",
                  "工作及居住所在城市与申请地一致", "央行征信报告非空白"
                ]
              }
              this.infoList.push(temp);
              break;
            case "2":
              temp = {
                url:require("../assets/pro_top_banner_gjj.png"),
//                url:b,
                comprehensiveRate: "1.88",
                applicablePeople: "授薪类人群中，能够提供公积金的高端企业员工",
                applicationRequirement: ["23-55（不含）岁", "在现单位工作且连续缴纳公积金的在职员工", "公积金月缴存总额300元以上事业机关单位、国企、上市公司、其他大中型企业人员"]
              }
              this.infoList.push(temp);
              break;
            case "3":
              temp = {
                url:require("../assets/pro_top_banner_bus.png"),
//                url:c,
                comprehensiveRate: "1.88",
                applicablePeople: "在申请地有无抵押或无质押车产的稳定客户",
                applicationRequirement: ["23-55（不含）岁", "授薪或经营人群", "在申请城市拥有登记及购买的全款非营运车辆"]
              }
              this.infoList.push(temp);

              break;
            case "4":
              temp = {
                url:require("../assets/pro_top_banner_sx.png"),
//                url:d,
                comprehensiveRate: "1.88",
                applicablePeople: "在申请地有传统型、分红型或万能型寿险的稳定客户",
                applicationRequirement: ["23-55（不含）岁", "授薪或经营人群"]
              }
              this.infoList.push(temp);
              break;
            case "5":
              temp = {
//                url:e,
                url:require("../assets/pro_top_banner_sb.png"),
                comprehensiveRate: "1.88",
                applicablePeople: "社保缴纳基数≥2000元，且供职于注册资金1000万以上或国企、事业单位",
                applicationRequirement: ["23-55（不含）岁", "本地户籍连续缴纳9个月，外地户籍连续缴纳12个月", "工作居住地与申请地一致"]
              }
              this.infoList.push(temp);
              break;
            case "6":
              temp = {
//                url:f,
                url:require("../assets/pro_top_banner_jy.png"),
                comprehensiveRate: "1.98",
                applicablePeople: "授薪类人群高端稳定客户",
                applicationRequirement: ["23-55（不含）岁", "在现单位在编且连续工作满6个月及以上，外地户籍连续缴纳12个月", "事业机关单位、国企、上市公司、其他大中型企业人员网银发薪月收入3000元以上"]
              }
              this.infoList.push(temp);
              break;
          }
        })
      },
      data(){
        return{
          /*comprehensiveRate:"1.88",
          applicablePeople:"有微粒贷授信额度且使用过该额度的人群",
          applicationRequirement:[
            "23-55（不含）周岁具有完全民事行为的中国公民", "申请人当期有未结清微粒贷借款或历史微粒贷借款结清日期在近三个月内",
            "工作及居住所在城市与申请地一致", "央行征信报告非空白"
          ]*/
          infoList:[]
        }
      },
      methods:{
        goto(path){
          this.$router.push(path)
        },
        click(){
          Toast('立即申请');
        }
      }
    }
</script>
<style type="text/css" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .loanDetailInfo{
    background-color: #f7f7f7;
  }
  .header{
    width: 100%;
    height: 360px;
    /*background-image: url("../assets/pro_top_banner_enjoy.png");*/
  }
  .back{
    float: left;
    width: 20px;
    height: 35px;
    margin-left: 40px;
    margin-top: 40px;
    display: flex;
    position: fixed;
    top: 0;
  }
  .banner{
    width: 100%;
    height: 360px;
  }
  .smallicon{
    float: left;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    margin-left: 40px;
  }
  .hint{
    font-size: 30px;
    height: 100px;
    line-height: 100px;
    color: #666;
    margin-left: 90px;
    display: block;
    text-align: left;
  }
  h4{
    font-weight: normal;
    text-align: left;
    padding: 30px 0 30px 80px;
    font-size: 30px;
    color: #333;
    background-color: white;
  }
  ul{
    background-color: white;
    padding: 20px;
  }
  li{
    text-align: left;
    margin-left: 40px;
    font-size: 28px;
    margin-top: 10px;
    color: black;
  }
  .flex_container{
    background-color: white;
    width: 100%;
    height: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    <!--设置分栏数-->
    -webkit-columns: 3;
    -moz-columns: 3;
    -o-columns: 3;
    columns: 3;
    <!--设置分栏间隔线-->
    -webkit-column-rule: 1px solid white;
    -moz-column-rule: 1px solid white;
    -o-column-rule: 1px solid white;
    column-rule: 1px solid white;
  }
  span{
    display: block;
    font-size: 26px;
  }
  .product_item{
    margin-top: 20px;
  }
  p{
    width: 92%;
    height: 80px;
    background-color: #008dfe;
    position: fixed;
    margin-left: 4%;
    bottom: 20px;
    z-index: 100;
    color: white;
    font-size: 30px;
    line-height: 80px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
