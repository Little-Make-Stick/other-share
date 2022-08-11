<template>
  <div class="template-content" >
    <Form ref="formBae" :model="sipconfig" label-position="right" :label-width="180" >
      <FormItem v-if="1==0" label="等待音视频编码">
        <!--  等待音视频编码信息再返回， true： 可以根据编码选择合适的播放器，false： 可以更快点播      -->
        <Input v-model="baseConfig.waitTrack" placeholder="等待音视频编码" ></Input>
      </FormItem>

      <FormItem label="点播等待超时时间(毫秒)">
        <InputNumber v-model="baseConfig.playTimeout" :min="1" :max="36000" placeholder="点播等待超时时间(毫秒)" style="width:100px"></InputNumber>
      </FormItem>
      <FormItem label="自动点播">

<!--        <Input v-model="baseConfig.autoApplyPlay" placeholder="自动点播" ></Input>-->
        <i-switch ref="statusSwitch" true-color="#13ce66" false-color="#ff4949" v-model="baseConfig.autoApplyPlay"
                  :true-value=true
                  :false-value=false
                  size="large"
                  placeholder="自动点播">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>

      </FormItem>
      <FormItem label="推流直播是否录制">
<!--        <Input v-model="baseConfig.recordPushLive" placeholder="推流直播是否录制" ></Input>-->
        <i-switch ref="statusSwitch" true-color="#13ce66" false-color="#ff4949" v-model="baseConfig.recordPushLive"
                  :true-value=true
                  :false-value=false
                  size="large"
                  placeholder="推流直播是否录制">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>

      </FormItem>
      <FormItem label="保存定位信息">
<!--        <Input v-model="baseConfig.savePositionHistory" placeholder="保存历史位置信息" ></Input>-->
        <i-switch ref="statusSwitch" true-color="#13ce66" false-color="#ff4949" v-model="baseConfig.savePositionHistory"
                  :true-value=true
                  :false-value=false
                  size="large">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>

      </FormItem>
      <FormItem label="操作日志是否保存数据库">
<!--        <Input v-model="baseConfig.logInDatebase" placeholder="日志是否保存数据库" ></Input>-->
        <i-switch ref="statusSwitch" true-color="#13ce66" false-color="#ff4949" v-model="baseConfig.logInDatebase"
                  :true-value=true
                  :false-value=false
                  size="large">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
      </FormItem>

      <!--
"waitTrack": false,
			"interfaceAuthenticationExcludes": [],
			"playTimeout": 36000,
			"autoApplyPlay": false,
			"recordPushLive": true,
			"savePositionHistory": false,
			"interfaceAuthentication": true,
			"logInDatebase": true,
			"seniorSdp": false

            -->
    </Form>
  </div>
</template>
<script>
export default {
  props:{
    baseConfig :{type:Object}
  },
  // v-model
  model:{
    prop: 'baseConfig',
    event: "beforeDestroy"
  },
  data(){
    return{
    }
  },
  beforeDestroy() {
    this.$emit('beforeDestroy', this.baseConfig);
  }
}

</script>
<style>
@import "../../template.scss";
</style>
