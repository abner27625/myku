<template>
    <div>
      <h4 @click="openPicker">点击查看</h4>
      <!--type分为time date datetime-->
      <!--疑惑  如何根据实际情况修改控件的样式-->
      <mt-datetime-picker class="ok" ref="picker" type="date" v-model="pickerValue" cancel-text="cancel" confirm-text="ok" @confirm="handleConfirm"></mt-datetime-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        methods: {
          openPicker() {
            this.$refs.picker.open();
          },
          handleConfirm:function(){
            this.$toast('Hello world!');
          }
        },

    }
</script>
<style type="text/css" scoped>
  h4{
    color: red;
    font-size: 40px;
  }
  .ok{
    color: red;
    font-size: 40px;
  }
</style>
