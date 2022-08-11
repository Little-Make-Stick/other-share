<!-- 1 X 1 -->
<template>
  <div class="main_compent">
    <div class="box_site11">
      <div v-for="item in playerPanels" :key="item.ref" class="div_site11" :ref="item.ref"  :style="item.style"
           @click="click(item.id)" @mouseover="mouseOver(item.id)" @mouseleave="mouseLeave(item.id)">
        <CommPlayer  :ref="item.playerRef"></CommPlayer>
      </div>
    </div>
  </div>
</template>
<script>
import CommPlayer from "@/views/moudle/compement/CommPlayer";
export default {
  components:{CommPlayer},
  data(){
    return{
      active: 'border:1px solid #F00', //选中时的边框 
      unActive: 'border:1px solid #14edc5', //没选中时的边框
      currentBoxNum:-1, //当前选择框，-1是没有选择
      playerPanels:[ //播放面板
        {id:0,ref:'playerBox110',style:'border:1px solid #14edc5',playerRef:"jsPLayer110",active:false}
      ]
    }
  },
  methods:{
    /** BOX 点击事件  */
    click(number){
      for(let i in this.playerPanels){
        if (i == number){
          if (this.playerPanels[i].active){
            // 本来就选中的则取消
            this.playerPanels[i].active = false;
            this.playerPanels[i].style = this.unActive;
            this.currentBoxNum = -1;

          }else{
            // 没选中的就选中
            this.playerPanels[i].active = true;
            this.playerPanels[i].style = this.active;
            this.currentBoxNum = number;
          }
        }else{
          // 其它box 恢复原状态
          this.playerPanels[i].active = false;
          this.playerPanels[i].style = this.unActive;
        }
      }
    },
    /** BOX 移入 事件 */
    mouseOver(number) {
      if (!this.playerPanels[number].active){
        this.playerPanels[number].style = this.active;
      }

    },
    /** BOX 移出 事件 */
    mouseLeave(number) {
      if (!this.playerPanels[number].active){
        this.playerPanels[number].style = this.unActive;
      }
    },
    /** 给父组件 播放调用 */
    play(videoUrl){
      //选择可播放的 面板
      if (this.currentBoxNum != -1){
        // 选中某个格子播放
        this.$refs[this.playerPanels[this.currentBoxNum].playerRef][0].play(videoUrl)
        return;
      }
      // 没选中则一直向后找，哪个格子有空就播放
      for(let i in this.playerPanels){
        if (!this.$refs[this.playerPanels[i].playerRef][0].isPlaying()){
          this.$refs[this.playerPanels[i].playerRef][0].play(videoUrl)
          return;
        }
      }
    },
  },

  beforeDestroy(){
    console.log("*****MultiScr2X2 destroy*******");
  },
}
</script>
<style lang="scss">
@import "../../template.scss";
.main_compent{
  width:100%;
  height:100%;
}
.box_site11 {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  flex-wrap: wrap;

  .div_main11 {
    width: 100%;
    height: 100%;
    border: 1px solid #14edc5;
    box-sizing: border-box;

  }
  .div_site11 {
    width: 100%;
    height: 100%;
    border: 1px solid #14edc5;
    box-sizing: border-box;
  }
}
</style>
