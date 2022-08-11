<template>
    <div class="topnav-content" :style="{ background: 'rgba(5, 31, 112, 1)' }">
        <Input
            id="input-device-search"
            :style="{ background: 'rgba(5, 31, 112, 1)' }"
            search
            v-model="srhValue"
            @on-search="search"
            placeholder="搜索关键词..."
        />
        <Tree
            id="custom-device-tree"
            :data="deviceData"
            :render="renderContent"
            :select-node="selectNode"
            @on-select-change="changeNode"
            expand-node
        ></Tree>
    </div>
</template>
<script>
import Device from '@/api/Device'
export default {
    name: 'DeviceTree',
    components: {},
    data() {
        return {
            api: new Device(),
            srhValue: '',
            deviceData: [],
            buttonProps: {
                type: 'primary',
                size: 'small',
            },
            selectNode: false,
        }
    },
    created() {
        this.search();
    },
    methods: {
        search() {
            this.api.searchGbDevicesByValue(this.srhValue).then((res) => {
                this.deviceData = res.data.data
            })
        },
        /**
         * 延迟加载
         */
        loadData(item, callback) {
            console.log(item)
            if (item.type == 'channel') {
                callback([])
                return
            }
            let param = {
                page: 0,
                count: 1000,
            }
            this.api.getChannelByDeviceIdOnPage(item.deviceId, param).then((res) => {
                console.log(res)
                let children = []
                let devData = null
                for (let i in res.data.list) {
                    devData = res.data.list[i]
                    devData.loading = false
                    if (!!devData.name) devData.title = devData.name
                    else devData.title = devData.channelId
                    //if (devData.subCount>0)
                    devData.children = []
                    ;(devData.type = 'channel'), children.push(devData)
                }
                callback(children)
            })
        },

        changeNode(nodes, node) {
            /** 这个方法没起作用了*/
            this.$emit('on-select-change', node, node)
        },
        /** Render 渲染 */
        renderContent(h, { root, node, data }) {
            if (data.type == 'device') {
                return h(
                    'span',
                    {
                        style: { display: 'inline-block', width: '100%' },
                    },
                    [
                        h('span', [
                            h('span', { style: { color: '#ddd' } }, data.title),
                            /*h('h4',{style: {color:"#083FE7CC"}},data.title)*/
                        ]),
                    ]
                )
            } else if (data.type == 'channel' && '1' == data.online) {
                /** 在线设备 绿色字体 */
                return h(
                    'span',
                    {
                        style: { display: 'inline-block', width: '150px' },
                        on: {
                            click: () => {
                                this.$emit('on-node-click', node, data)
                            },
                        },
                    },
                    [
                        h('span', [h('span', { style: { color: 'green' } }, data.title)]),
                        h(
                            'span',
                            {
                                style: { display: 'inline-block', float: 'right', marginRight: '0px', width: '24px' },
                            },
                            [
                                h('Button', {
                                    props: Object.assign({}, this.buttonProps, {
                                        icon: 'md-play',
                                        title: '视频监控',
                                        type: 'text',
                                        size: 'small',
                                    }),
                                    style: { marginRight: '8px' },
                                    on: {
                                        click: () => {
                                            this.$emit('on-playbtnclick', node, data)
                                        },
                                    },
                                }),
                            ]
                        ),
                    ]
                )
            } else {
                /** 点击 其它 */
                return h(
                    'span',
                    {
                        style: { display: 'inline-block', width: '100%' },
                        on: {
                            click: () => {
                                this.$emit('on-node-click', node, data)
                            },
                        },
                    },
                    [h('span', [h('span', { style: { color: '#ddd' } }, data.title)])]
                )
            }
        },
    },
    mounted() {
        this.search()
    },
}
</script>
<style lang="scss">
@import './topnav';

#input-device-search .ivu-input {
    /* display: inline-block; */
    /*  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 14px;
  border: 1px solid #dcdee2;
  border-radius: 4px;*/
    color: #ffffff;
    background-color: #051f70ff;
    /*  background-image: none;
  position: relative;
  cursor: text;
  -webkit-transition: border 0.2s ease-in-out, background 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;*/
}

#custom-device-tree .ul .li:hover {
    color: #78aee4;
}
</style>
