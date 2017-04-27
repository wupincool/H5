<template>
	<div class="amap-page-container" style="height: 90%;">
	    <el-amap :vid="'amap-vue'" :zoom="zoom" :map-manager="amapManager" :plugin="plugin" :events="events">
	       <el-amap-marker v-for="marker in markers" :position="marker"></el-amap-marker>
	    </el-amap>
	    <button v-on:click="addMarker" style=" z-index: 10000;">addMarker</button>
	    <button v-on:click="getMap" style=" z-index: 10000;">get map</button>
	    <button type="button" name="button" v-on:click="addZoom" style=" z-index: 10000;">zoom++</button>
	    <button type="button" name="button" v-on:click="subZoom" style=" z-index: 10000;">zoom--</button>
	    <button type="button" name="button" v-on:click="changeCenter" style=" z-index: 10000;">change center</button>
	</div>
</template>

<script>
import { AMapManager } from 'vue-amap';
let amapManager = new AMapManager();
export default {
  name: 'amap-page',
  data: function() {
    return {
      vid: 'amap-vue-1',
      zoom: 12,
      amapManager: amapManager,
      markers: [],
      events: {
        'moveend': () => {
          let mapCenter = this.amapManager.getMap().getCenter();
          this.center = [mapCenter.getLng(), mapCenter.getLat()];
        },
        'zoomchange': () => {
          this.zoom = this.amapManager.getMap().getZoom();
        },
        'click': (e) => {
        	console.log(e.lnglat.lng);
        	console.log(e.lnglat.lat);
        	this.markers = [];
        	this.markers.push([e.lnglat.lng, e.lnglat.lat]);
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(o) {
            // console.log(o);
          }
        }
      }]
    };
  },
  methods: {
    getMap: function() {
      console.log(this.amapManager.getMap());
      console.log(this.center);
    },
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    addZoom() {
      this.zoom++;
    },
    subZoom() {
      this.zoom--;
    },
    changeCenter() {
      this.center = [this.center[0] + 0.1, this.center[1] + 0.1];
      console.log(this.center);
    }
  }
};
</script>

<style>
</style>
