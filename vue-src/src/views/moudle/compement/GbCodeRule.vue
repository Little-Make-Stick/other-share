<!-- 国标编码规则 -->
<template lang="html">
  <div class="code-rule">
    <Form ref="formCodeRule" :model="codeRule" label-position="rigth" :label-width="140" >
      <FormItem label="行政区划代码(市级)">
        <Cascader class="select-input" v-model="codeRule.cityCode" :data="cityCodes" :load-data="loadData"></Cascader>
        <Input class="select-code" v-model="codeRule.cityCode" placeholder="行政区划代码" ></Input>
      </FormItem>
      <FormItem label="行业编码">
        <Select class="select-input" filterable :loading="loading1" v-model="codeRule.businessCode" @on-change="onBusChange()">
          <Option v-for="(item, id) in businessCodes" :value="item.id" :key="id">{{item.name}}</Option>
        </Select>

        <Input class="select-code" v-model="codeRule.businessCode" placeholder="行业编码" ></Input>
      </FormItem>
      <FormItem label="服务器类型编码">
        <Select class="select-input" filterable :loading="loading2" v-model="codeRule.centerCode">
          <Option v-for="(item, id) in centerCodeType" :value="item.id" :key="id">{{item.name}}</Option>
        </Select>
        <Input class="select-code" v-model="codeRule.centerCode" placeholder="服务器类型编码" ></Input>
      </FormItem>
      <FormItem label="设备类型编码">
        <Select class="select-input" filterable :loading="loading2" v-model="codeRule.deviceCode">
          <Option v-for="(item, id) in deviceCodeType" :value="item.id" :key="id">{{item.name}}</Option>
        </Select>
        <Input class="select-code" v-model="codeRule.deviceCode" placeholder="设备类型编码" ></Input>
      </FormItem>
      <FormItem label="网络标识">
        <Select class="select-input" filterable :loading="loading2" v-model="codeRule.netIdentityCode">
          <Option v-for="(item, id) in codeNetIdentity" :value="item.id" :key="id">{{item.name}}</Option>
        </Select>
        <Input class="select-code" v-model="codeRule.netIdentityCode" placeholder="网络标识" ></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import CodeRule from '@/api/CodeRule';
export default {
  data(){
    return{
      codeBus:'00',

      loading1:false,
      api: new CodeRule(),
      options1: ["California"],
      codeRule:{
        cityCode: "400000",
        businessCode: "49",
        centerCode: "200",
        deviceCode: "132",
        netIdentityCode: "7",
      },
      cityCodes:[
        {
        value: 'beijing',
        label: '北京',
        children: [],
        loading: false
       },
        {
          value: 'hangzhou',
          label: '杭州',
          children: [],
          loading:false
        }
      ],
      list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
      businessCodes:[],
      centerCodeType:[],
      deviceCodeType:[],
      codeNetIdentity:[]
    }
  },
  methods:{
    onBusChange(){
      console.log("codeBus: %o",this.codeBus);
    },
    loadData (item, callback) {
      //console.log(item.id);
      item.loading = true;
      /** 查询配置参数 */
      this.api.findCodeCity(item.id).then(res => {
        item.children = null;

        if (res.data.code === 0) {
          item.children=res.data.data;
          console.log("children:%o",item.children);
        } else {
          this.$Message.error(res.data.msg)
        }
        item.loading = false;
        callback();
      })

/*
      setTimeout(() => {
        if (item.value === 'beijing') {
          item.children = [
            {
              value: 'talkingdata',
              label: 'TalkingData'
            },
            {
              value: 'baidu',
              label: '百度'
            },
            {
              value: 'sina',
              label: '新浪'
            }
          ];
        } else if (item.value === 'hangzhou') {
          item.children = [
            {
              value: 'ali',
              label: '阿里巴巴'
            },
            {
              value: '163',
              label: '网易'
            }
          ];
        }
        item.loading = false;
        callback();
      }, 1000);*/
    },
    remoteMethod1 (query) {
      if (query !== '') {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            };
          });
          this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
        }, 200);
      } else {
        this.options1 = [];
      }
    },
  },
  mounted() {
    /** 查询配置参数 */
    this.api.findCodeCity().then(res => {
      this.cityCodes = null;

      if (res.data.code === 0) {
        this.cityCodes=res.data.data;
        if (!!this.cityCodes){
          for(let i in this.cityCodes){
            if (!!this.cityCodes[i].parentByMe){
              this.cityCodes[i].children=[];
              this.cityCodes[i].loading =false;
            }
          }
        }
        console.log(this.cityCodes);
      } else {
        this.$Message.error(res.data.msg)
      }
    })

    this.api.findCodeBusiness().then(res=>{
      this.businessCodes=[];
      if (res.data.code === 0) {
        this.businessCodes=res.data.data;
      }
    })

    this.api.findCodeBusiness().then(res=>{
      this.businessCodes=[];
      if (res.data.code === 0) {
        this.businessCodes=res.data.data;
      }
    })

    this.api.findCodeType().then(res=>{
      this.centerCodeType=[];
      this.deviceCodeType=[];
      if (res.data.code === 0) {
        this.centerCodeType=res.data.data;
        this.deviceCodeType=this.centerCodeType;
      }
    })

    this.api.findCodeNetIdentity().then(res=>{
      this.codeNetIdentity=[];
      if (res.data.code === 0) {
        this.codeNetIdentity=res.data.data;
      }
    })
  }
}

</script>
<style lang="css">
   .code-rule {
     text-align: left;
     padding: 10px;
     background: #fff;
     border: 1px solid #dcdfe6;
     box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
   }

   .select-input{
     width: 200px;
     float: left;
   }
   .select-code{
     width: 150px;
     float: left;
   }

</style>
