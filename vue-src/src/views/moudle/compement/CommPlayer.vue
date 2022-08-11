<template>
    <div class="template-content">
        <div id="container" ref="container" style="width: 100%; height: 100%; background-color: rgb(100, 100, 227)">
            <div v-show="loaded" class="buttons-div" ref="buttonsBox">
                <div>
                    <i v-if="playing" class="iconfont icon-stop player-btn" title="停止" @click="stop"></i>
                    <i v-if="!playing" class="iconfont icon-play player-btn" title="暂停" @click="playBtnClick"></i>
                    <i v-if="playing" class="iconfont icon-pause player-btn" title="播放" @click="pause"></i>
                </div>
                <div class="buttons-div-right">
                    <span class="player-btn">{{ kBps }} kb/s</span>
                    <i
                        v-if="!fullscreen"
                        class="iconfont icon-weibiaoti10 player-btn"
                        title="全屏"
                        @click="fullscreenSwich"
                    ></i>
                    <i
                        v-if="fullscreen"
                        class="iconfont icon-weibiaoti11 player-btn"
                        title="退出全屏"
                        @click="fullscreenSwich"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loaded: false,
            playing: false,
            player: null,
            fullscreen: false,
            videoUrl: null,
            kBps: 0.0,
            vod: true, // 点播
            btnDom: null,
            supportDblclickFullscreen: true, //// 是否支持屏幕的双击事件，触发全屏，取消全屏事件。
        }
    },
    mounted() {
        this.player = this.createPlayer()
        this.btnDom = this.$refs.buttonsBox //document.getElementById("buttonsBox");
    },
    beforeDestroy() {
        console.log('*****player destroy*******')
        if (this.player) {
            this.player.destroy()
        }
    },

    methods: {
        fullscreenSwich() {
            let isFull = this.isFullscreen()
            this.player.setFullscreen(!isFull)
            this.fullscreen = !isFull
        },
        isFullscreen: function () {
            return (
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                false
            )
        },
        stop() {
            this.videoUrl = null
            if (this.player) {
                this.player.destroy()
                this.$refs.container.appendChild(this.btnDom)
            }
            this.loaded = false
            this.playing = false
            this.player = null
        },
        isPlaying() {
            return this.playing
        },
        playBtnClick() {
            if (this.player) {
                this.play(this.videoUrl)
            }
        },
        pause() {
            if (this.jessibuca) {
                this.jessibuca.pause()
            }
            this.playing = false
        },
        play(videoUrl) {
            let _this = this
            /** 这里不能用箭头函数，this会指向调用它的上一层页面 */
            if (videoUrl === this.videoUrl && this.playing == true) {
                return
            }
            this.videoUrl = videoUrl
            if (this.player) {
                this.player.destroy()
                this.loaded = false
                this.$refs.container.appendChild(this.btnDom)
            }
            this.playing = false
            this.player = this.createPlayer()
        },

        createPlayer() {
            let _this = this
            let options = {}
            let jplayer = new window.Jessibuca(
                Object.assign(
                    {
                        container: _this.$refs.container,
                        videoBuffer: 0.1, // 最大缓冲时长，单位秒
                        isResize: false,
                        isFlv: true,
                        decoder: process.env.BASE_URL + 'jessibuca/index.js',
                        text: '', //"TN-28181",
                        // background: "bg.jpg",
                        loadingText: '加载中',
                        hasAudio: false, //typeof (this.hasAudio) =="undefined"? true: this.hasAudio,
                        debug: false,
                        supportDblclickFullscreen: _this.supportDblclickFullscreen,
                        operateBtns: {
                            fullscreen: false,
                            screenshot: false,
                            play: false,
                            audio: false,
                        },
                        record: 'record',
                        vod: _this.vod,
                        forceNoOffscreen: false, //this.forceNoOffscreen,
                        isNotMute: false, //this.isNotMute,
                    },
                    options
                )
            )
            jplayer.on('load', function () {
                console.log('on load init')
                console.log(_this.videoUrl)
                if (_this.videoUrl) {
                    jplayer.play(_this.videoUrl)
                    _this.loaded = true
                }
            })

            jplayer.on('log', function (msg) {
                //console.log("on log", msg);
            })
            jplayer.on('record', function (msg) {
                console.log('on record:', msg)
            })
            jplayer.on('pause', function () {
                //console.log("on pause ");
                _this.playing = false
            })
            jplayer.on('play', function () {
                _this.playing = true
            })
            jplayer.on('fullscreen', function (msg) {
                //console.log("on fullscreen: %o", msg);
                _this.fullscreen = msg
            })

            jplayer.on('mute', function (msg) {
                console.log('on mute', msg)
                //_this.isNotMute = !msg;
            })
            jplayer.on('audioInfo', function (msg) {
                console.log('audioInfo', msg)
            })

            jplayer.on('videoInfo', function (msg) {
                //this.videoInfo = msg;
                console.log('videoInfo: %o', msg)
            })

            jplayer.on('bps', function (bps) {
                console.log('bps', bps)
            })
            let _ts = 0
            jplayer.on('timeUpdate', function (ts) {
                // console.log('timeUpdate,old,new,timestamp', _ts, ts, ts - _ts);
                _ts = ts
            })
            jplayer.on('error', function (error) {
                console.log('error', error)
            })

            jplayer.on('timeout', function () {
                console.log('timeout')
            })

            jplayer.on('start', function () {
                console.log('start')
            })

            jplayer.on('performance', function (performance) {
                let show = '卡顿'
                if (performance === 2) {
                    show = '非常流畅'
                } else if (performance === 1) {
                    show = '流畅'
                }
                console.log(show)
                //_this.performance = show;
            })
            jplayer.on('buffer', function (buffer) {
                //console.log('buffer', buffer);
            })

            jplayer.on('stats', function (stats) {
                //console.log('stats', stats);
            })

            jplayer.on('kBps', function (kBps) {
                _this.kBps = Math.round(kBps)
            })

            // 显示时间戳 PTS
            jplayer.on('videoFrame', function () {})

            //
            jplayer.on('metadata', function () {})
            return jplayer
        },
    },
}
</script>
<style>
@import '../../template.scss';
.buttons-div {
    width: 100%;
    height: 28px;
    background-color: rgba(0, 0, 0, 0.98);
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: 0;
    bottom: 0;
    user-select: none;
    z-index: 10;
}
.player-btn {
    width: 20px;
    color: rgb(255, 255, 255);
    line-height: 27px;
    margin: 0px 10px;
    padding: 0px 2px;
    cursor: pointer;
    text-align: center;
    font-size: 0.8rem !important;
}

.buttons-div-right {
    position: absolute;
    right: 0;
}
</style>
