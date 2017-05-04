export default class MapService {
    constructor(obj) {
        this.mapData = obj
    }

    //初始化高德地图
    initMap() {
        this.oScript = document.createElement('script')
        this.oScript.src = 'http://webapi.amap.com/maps?v=1.3&key=' + this.mapData.key + '&&plugin=AMap.Geocoder,AMap.Riding,AMap.Walking,AMap.Driving'
        document.getElementsByTagName("head")[0].appendChild(this.oScript)
        return new Promise((resolve, reject) => {
            this.oScript.onload = () => { //当地图文件加载完后，初始化地图
                this.map = new AMap.Map(this.mapData.id, this.mapData.mapStyle)
                resolve()
            }
        });
    }


    //展示地图控件
    showMapTool(obj) {
        if (obj.isOverView && ((typeof obj.isOverView) == 'boolean')) { //展示鹰眼
            this.map.plugin(["AMap.OverView"], () => {
                let view = new AMap.OverView()
                this.map.addControl(view)
            })
        }
        if (obj.isScale && ((typeof obj.isScale) == 'boolean')) { //展示比例尺插件
            this.map.plugin(["AMap.Scale"], () => {
                let scale = new AMap.Scale()
                this.map.addControl(scale)
            })
        }
        if (obj.isToolBar && ((typeof obj.isToolBar) == 'boolean')) { //展示地图工具条
            this.map.plugin(["AMap.ToolBar"], () => {
                let tool = new AMap.ToolBar()
                this.map.addControl(tool)
            })
        }

    }

    //定位
    showLocation() {
        // return 666
        return new Promise((resolve, reject) => {
            this.map.plugin('AMap.Geolocation', () => {
                let geolocation = new AMap.Geolocation()
                this.map.addControl(geolocation)
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', (data) => {
                    resolve(data)
                })
                AMap.event.addListener(geolocation, 'error', () => {
                    reject('定位失败！')
                })
            })
        })
    }

    //关键字搜索
    searchByKeyword(obj) { //http://lbs.amap.com/api/javascript-api/example/poi-search/keywords-search/
            return new Promise((resolve, reject) => {
                AMap.service(["AMap.PlaceSearch"], () => {
                    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                        pageSize: obj.pageSize,
                        pageIndex: obj.pageIndex,
                        // city: "010",
                        map: obj.showResultInMap ? this.map : '',
                        panel: ""
                    });
                    //关键字查询
                    // console.log(obj.key)
                    placeSearch.search(obj.key ? obj.key : '', (status, result) => {
                        if (status === 'complete' && result.info === 'OK') {
                            let returnObj = result.poiList
                            resolve(returnObj)
                        } else {
                            reject('搜索不到您您想要的结果！')
                        }
                    })
                })
            })
        }
        //周边搜索
    searchNearBy(obj) { //http://lbs.amap.com/api/javascript-api/example/poi-search/around-search/
            return new Promise((resolve, reject) => {
                AMap.service(["AMap.PlaceSearch"], () => {

                    // !obj.type &&  (obj.type = '')
                    //  obj.map =  obj.showResultInMap ? this.map : ''

                    let placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                        pageSize: obj.pageSize,
                        // city: '010',
                        type: obj.type ? obj.type : '',
                        pageIndex: obj.pageIndex,
                        map: obj.showResultInMap ? this.map : '',
                        panel: ''
                    });

                    placeSearch.searchNearBy(obj.key ? obj.key : '', obj.lngLat, 1000, (status, result) => {
                        if (status === 'complete' && result.info === 'OK') {
                            let returnObj = result.poiList
                            resolve(returnObj)
                        } else {
                            reject('搜索出错啦！')
                        }
                    })
                })
            })
        }
        //输入提示，选中提示项自动查询
    inputTipAndSearch() { //http://lbs.amap.com/api/javascript-api/example/poi-search/search-after-enter-prompt/

    }

    //点击地图获取经纬度坐标
    clickMap(callback) { //http://lbs.amap.com/api/javascript-api/example/map/click-to-get-lnglat/
        this.map.on('click', (e) => {
            let lnglat = []
            lnglat[0] = e.lnglat.getLng()
            lnglat[1] = e.lnglat.getLat()
            this.lnglat = lnglat
            callback && callback()
        });
    }

    //逆地理编码(把经纬度转换成地址信息)
    lngLatToAddress(lnglat) {
            return new Promise((resolve, reject) => {
                let geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });
                geocoder.getAddress(lnglat, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        resolve(result.regeocode)
                    } else {
                        reject('获取地址信息出错啦！')
                    }
                })
            })
        }
        //出行路线规划及调用原生APP导航
    planWay(planObj) {
        let obj = { //默认为步行
            map: this.map,
            panel: planObj.wrapId ? planObj.wrapId : ''
        }
        return new Promise((resolve, reject) => { //默认为步行
            let plan = new AMap.Walking(obj)
            if (planObj.isRiding) { //如果为骑行
                plan = new AMap.Riding(obj)
            } else if (planObj.isDriving) { //如果为驾车
                plan = new AMap.Driving(obj)
            } 

            if (planObj.searchObj) { //如果是按名称规划路线
                plan.search(planObj.searchObj, (status, result) => {
                    if (status === 'complete' && result.info === 'OK') {
                        fn()
                    }
                })
            } else { //如果是按经纬度规划路线
                plan.search(planObj.searchOrigin, planObj.searchDestination, (status, result) => {
                    if (status === 'complete' && result.info === 'OK') {
                        fn()
                    } else {
                        reject('抱歉暂时不能为您规划想要的出行路线！')
                    }
                })
            }
        })

        function fn() {
            if (!planObj.wrapId) {
                resolve(result.routes)
            } else if (planObj.native) {
                driving.searchOnAMAP({
                    origin: result.origin,
                    destination: result.destination
                })
            }
        }
    }

    //设置地图中心点
    setMapCenter(lnglat) {
        this.map.setCenter(lnglat)
    }

    //设置地图级别
    setMapZoom(zoom) {
        this.map.setZoom(zoom)
    }

    //gps坐标转高德经纬度
    static gpsTransform(obj) {//加上static可以不用实例化使用该方法，详见文档说明
        return new Promise((resolve, reject) => {
            let  para
            let request = new XMLHttpRequest()
            request.open('post', 'http://restapi.amap.com/v3/assistant/coordinate/convert')
            switch(Object.prototype.toString.call(obj.lnglat)){
                case '[object String]':para = 'key=' + obj.key + '&locations=' + obj.lnglat + '&coordsys=gps';break; 
                case '[object Array]':para='key=' + obj.key + '&locations=' + obj.lnglat[0]+','+obj.lnglat[1]+ '&coordsys=gps';break; 
            }
            request.send(para)
            request.onload = () => {
                resolve(request.response)
            }
            request.onerror = (e) => {
                reject('e')
            }
        })
    }

    //计算两点之间的距离
    caculateDistance(twoPoint) {
        let lnglat1 = new AMap.LngLat(twoPoint.one[0], twoPoint.one[1])
        let lnglat2 = new AMap.LngLat(twoPoint.two[0], twoPoint.two[1])
        return Math.round(lnglat1.distance(lnglat2))
    }

    //无需实例化地图的经纬度转真实地址（web服务api）
    static webLnglatToAddress(obj) {
        return new Promise((resolve, reject) => {
            let para
            let request = new XMLHttpRequest()
            request.open('post', 'http://restapi.amap.com/v3/geocode/regeo')        
            switch(Object.prototype.toString.call(obj.lnglat)){
                case '[object String]':para = 'key=' + obj.key + '&location=' + obj.lnglat + '&extensions=all';break; 
                case '[object Array]':para='key=' + obj.key + '&location=' + obj.lnglat[0]+','+obj.lnglat[1]+ '&extensions=all';break; 
            }
            request.send(para)
            request.onload = () => {
                resolve(JSON.parse(request.response))
            }
            request.onerror = (e) => {
                reject('e')
            }
        })
    }
}