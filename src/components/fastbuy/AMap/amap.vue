<template>
  <el-amap vid="amapDemo">
    // 添加N个人
    <el-amap-marker v-for="marker in markers" :position="marker.position">
    </el-amap-marker>
  </el-amap>
</template>

<script>
  export default {
    data() {
      return {
        markers: []
      };
    },
    mounted() {
      // 姑且N为2
      // 这样地图上就添加了两个人
      this.markers = [
        {
          position: [121.5273285, 31.21515044]
        }, {
          position: [121.5273286, 31.21515045]
        }
      ];
    }
  };
</script>

<style>

</style>
