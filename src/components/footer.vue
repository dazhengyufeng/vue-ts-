
<template>
  <div class="footer"> 技术探索路上的一只菜鸟 </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  font-weight: bold;
  margin: auto;
  left: 0;
  right: 0;
  /* top: 0; */
  bottom: 0;
}
</style>

