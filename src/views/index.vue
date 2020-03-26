<template>
  <div id="app"
       class="articles-container">
       <Articles></Articles>
    <!-- 侧边栏 (暂时去掉，没啥用)-->
    <Slider></Slider>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import Slider from "@/components/slider.vue"; // @ is an alias to /src
import Articles from "@/views/articles.vue"; // @ is an alias to /src
import ArrowUp from "@/components/arrowUp.vue"; // @ is an alias to /src
import { isMobileOrPc } from "@/utils/utils";

@Component({
  components: {
    Slider,
    Articles
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
.articles-container{
    display: flex;
}
</style>
