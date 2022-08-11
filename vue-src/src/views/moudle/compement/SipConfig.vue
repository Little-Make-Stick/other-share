<template>
  <div class="template-content" >
    <Form ref="formSip" :model="sipconfig" label-position="right" :label-width="140" >
      <FormItem>
          <!--        <GbCodeRule v-show="showCodeBox"></GbCodeRule>-->
      </FormItem>
      <FormItem label="域ID">
        <Input v-model="sipconfig.domain" placeholder="域ID" >
          <Button slot="append" v-if="!showCodeBox" icon="ios-arrow-down" @click="open" title="打开国标编号配置规则"></Button>
          <Button slot="append" v-else icon="ios-arrow-down" @click="close" title="关闭国标编号配置规则"></Button>
        </Input>
      </FormItem>
      <FormItem v-show="showCodeBox">
        <!--        <Input  placeholder="行政区划代码" ></Input>-->
        <GbCodeRule v-show="showCodeBox"></GbCodeRule>
      </FormItem>
      <FormItem label="服务器ID">
        <Input v-model="sipconfig.id" placeholder="服务器ID" >

        </Input>
      </FormItem>
      <FormItem label="服务器IP">
        <Input v-model="sipconfig.ip" placeholder="服务器IP" ></Input>
      </FormItem>
      <FormItem label="端口">
        <Input v-model="sipconfig.port" placeholder="端口" ></Input>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="sipconfig.password" placeholder="密码" ></Input>
      </FormItem>
      <FormItem label="monitorIp">
        <Input v-model="sipconfig.monitorIp" placeholder="monitorIp" ></Input>
      </FormItem>
      <FormItem label="ptz速度">
        <Input v-model="sipconfig.ptzSpeed" placeholder="ptz速度" ></Input>
      </FormItem>
      <FormItem label="注册过期时间(秒)">
        <Input v-model="sipconfig.registerTimeInterval" placeholder="注册过期时间(秒)" ></Input>
      </FormItem>
      <FormItem label="心跳存活时间(秒)">
        <Input v-model="sipconfig.keepaliveTimeOut" placeholder="心跳存活时间(秒)" ></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import GbCodeRule from "@/view/moudle/compement/GbCodeRule";
export default {
  components:{GbCodeRule},
  props:{
    sipconfig :{type:Object}
  },
  // v-model
  model:{
    prop: 'sipconfig',
    event: "beforeDestroy"
  },

/*  computed:{
    value_ () {
      let v=this.sipConfig;
      this.$emit('input', v);
      return v
    }
  },
  watch: {
    value() {
      console.log("this.value: %o",this.value);
      this.sipConfig = this.value;
    }
  },*/

  data(){
    return{
      showCodeBox:false
    }
  },
  methods:{
    open(){
      this.showCodeBox = true;
    },
    close(){
      this.showCodeBox = false;
    }
  },
  mounted() {
    //console.log("this.sipconfig: %o",this.sipconfig);
  },
  beforeDestroy() {
    this.$emit('beforeDestroy', this.sipconfig);
  }

}
</script>
<style>
@import "../../template.less";
</style>
