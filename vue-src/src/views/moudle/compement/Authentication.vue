<!--登录 验证 -->
<template>
  <div class="template-content" >
    <Alert show-icon>说明
      <template> 只有特定的帐号才能保存配置并重启服务....</template>
    </Alert>
    <Form ref="formBae1" :model="user" label-position="right" :label-width="1" >
      <FormItem prop="user">
        <Input type="text" v-model="user.loginName" placeholder="请输入账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="user.password" placeholder="请输入密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import {login} from "@/api/login";
export default{
  data(){
    return{
      user:{
        loginName:null,
        password:null
      }
    }
  },
  methods:{
    checkAuth(){
      if (!this.user.loginName){
        this.$emit('callResult',false);
        return;
      }

      if (this.user.loginName != "admin"){
        this.$Message.error(this.user.loginName + " 没有权限");
        this.$emit('callResult',false);
        return;
      }
      login(this.user.loginName,this.user.password).then(res=>{
        let result = false;
        if (res.data.code === 0) {
          result = true;
        }else{
          this.$Message.error(res.data.msg)
          result = false;
        }
        /** 回调给父组件 通知父组件结果 */
        this.$emit('callResult',result)
      })
    }
  }

}
</script>
<style>
@import "../../template.scss";
</style>
