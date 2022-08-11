<template>
    <div class="template-content header-con">
        <layout :style="{ height: '100%' }">
            <layout :style="{ height: '100%' }">
                <Sider
                    :collapsible="collapsible"
                    :collapsed-width="0"
                    v-model="isCollapsed"
                    :style="{ height: '100%', background: '#051f70ff', width: '400px', padding: '0px' }"
                >
                    <div :style="{ height: '32px', background: '#051f70ff', width: '100%' }"></div>
                    <Devicetree ref="deviceTree" @on-playbtnclick="playBtnClick" @on-select-change="selectChange" />
                </Sider>
                <layout id="l3" :style="{ height: '100%', width: '100%' }">
                    <Header id="h3" class="header-con" :style="{ height: '32px', lineHeight: '32px' }">
                        <img
                            class="btnBox"
                            v-for="item in btnBoxs"
                            :key="item.src"
                            :src="item.src"
                            :style="{ width: '16px', marginRight: '5px' }"
                            :title="item.title"
                            @click="btnBoxClick(item.id)"
                        />
                    </Header>
                    <Content :style="{ padding: '0px', background: '#051f70ff' }">
                        <MultiScr1X1 v-if="selectBoxIndex == 1" ref="multiScr1X1"> </MultiScr1X1>
                    </Content>
                </layout>
            </layout>
        </layout>
    </div>
    <!--  </div>-->
</template>
<script>
import Devicetree from '@/components/DeviceTree'

//import Playpanel9 from "@/view/moudle/compement/MultiScr9X";

import Device from '@/api/Device'

import imag1X1 from '@/assets/images/1X1.png'
import MultiScr1X1 from '@/views/moudle/compement/MultiScr1X1'

export default {
    name: 'MultiScreenPlay',
    components: { Devicetree, MultiScr1X1 },
    data() {
        return {
            activePanel: 2,
            collapsible: false,
            selectBoxIndex: 2, //当前选择哪个页面
            btnBoxs: [{ id: 1, src: imag1X1, title: '1 X 1' }],
            api: new Device(),
            isCollapsed: false,
            showVideoDialog: false,
            //videoUrl:null,
            hasAudio: true,
            buttonProps: {
                type: 'primary',
                size: 'small',
            },
        }
    },
    methods: {
        /** 版面选择点击，切换页面 */
        btnBoxClick(number) {
            console.log(number)
            this.selectBoxIndex = number
        },
        testClick() {
            //let dd = document.getElementsByTagName("container");
            let dd = document.getElementsByClassName()
            console.log('container: %o', dd)
        },
        /** 点击节点 */
        selectChange() {},
        /**
         * 点击播放
         */
        playBtnClick(node, data) {
            let deviceId = data.arrt.deviceId
            let channelId = data.arrt.channelId
            console.log('通知设备推流：' + deviceId + ' : ' + channelId)
            if (!(!!deviceId && !!channelId)) {
                this.$Message.error('数据属性缺失，不能播放')
            }
            /** 通知设备推流 */
            this.api.playStart(deviceId, channelId).then((res) => {
                if (res.data.code == 0) {
                    if (this.selectBoxIndex == 1) {
                        this.$refs.multiScr1X1.play(res.data.data.ws_flv)
                    } else if (this.selectBoxIndex == 2) {
                        this.$refs.multiScr2X2.play(res.data.data.ws_flv)
                    } else if (this.selectBoxIndex == 3) {
                        this.$refs.multiScr3X2.play(res.data.data.ws_flv)
                    } else if (this.selectBoxIndex == 4) {
                        this.$refs.multiScr4X3.play(res.data.data.ws_flv)
                    } else if (this.selectBoxIndex == 5) {
                        this.$refs.multiScr4X4.play(res.data.data.ws_flv)
                    } else if (this.selectBoxIndex == 6) {
                        this.$refs.multiScr9X.play(res.data.data.ws_flv)
                    }
                } else {
                    console.log(res.data.msg)
                    this.$Message.error(res.data.msg)
                }
            })
        },
    },
    mounted() {
        console.log('mounted')
    },
}
</script>
<style lang="scss">
@import '../template.scss';

.header-con {
    /*background-color: #4c70ef;*/
    background-color: #051f70ff;
}

.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
}
/** 2*2*/
/*.box>div {
  width: calc(100%/2);
  height: calc(100%/2);
  border: 1px solid #aff;
  box-sizing: border-box;

}*/
.box_site {
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-wrap: wrap;
    .div_main {
        width: calc(100% / 4 * 3);
        height: calc(100% / 4 * 3);
        border: 1px solid #aff;
        box-sizing: border-box;
    }
    .div_site {
        width: calc(100% / 4);
        height: calc(100% / 4);
        border: 1px solid #aff;
        box-sizing: border-box;
    }
}
.div_site:hover {
    border: 1px solid #f00;
}

/**切换页面*/
.btnBox {
    cursor: pointer;
    width: 57px;
    marginright: 5px;
}
.btnBox:hover {
    border: 1px solid #f00;
}
/*
.box{
  position:absolute;
  width:100%;
  height:100%;
  background-color:#f2f2f2;
}
.box-inner{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; !* 铺满父元素容器，这时候宽高就始终相等了 *!
}
.box-inner>li{
  width: calc(98% / 2);  !* calc里面的运算符两边要空格 *!
  height: calc(98% / 2);
  margin-right: 2px;
  margin-bottom: 2px;
  overflow: hidden;
}
.flex{
  display: flex;
  flex-wrap: wrap;
}
.flex>li{
  flex-grow: 1; !* 子元素按1/n的比例进行拉伸 *!
  background-color: #999999;
  text-align: center;
  color: #fff;
  font-size: 50px;
  line-height: 100%;
}
.flex>li:nth-of-type(2n){ !* 选择个数是2的倍数的元素 *!
  margin-right: 0;
}
.flex>li:nth-of-type(n+3){  !* 从第7个起，选择倒数的三个元素，n可以取0 *!
  margin-bottom: 0px;
  margin-top: -4px;
}*/

.buttons-box {
    width: 100%;
    height: 28px;
    background-color: rgba(43, 51, 63, 0.7);
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: 0;
    bottom: 0;
    user-select: none;
    z-index: 10;
}
.jessibuca-btn {
    width: 20px;
    color: rgb(255, 255, 255);
    line-height: 27px;
    margin: 0px 10px;
    padding: 0px 2px;
    cursor: pointer;
    text-align: center;
    font-size: 0.8rem !important;
}
.buttons-box-right {
    position: absolute;
    right: 0;
}
.demo-tree-render .ivu-tree-title {
    width: 100%;
}
.teststt {
    color: green;
}
</style>
