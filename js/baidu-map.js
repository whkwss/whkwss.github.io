var map = new BMap.Map("map-view"); // 创建Map实例

var cr = new BMap.CopyrightControl({ anchor: BMAP_ANCHOR_TOP_RIGHT }); //设置版权控件位置
//应该可以用数组优化，还没有深入学习JS的数组，我要先把学习赶上了
//北区
var north_point = new BMap.Point(113.347747, 23.171797);
var north_point_1 = new BMap.Point(113.348461, 23.171506);
var north_point_2 = new BMap.Point(113.347518, 23.171498);
var north_point_3 = new BMap.Point(113.346611, 23.171788);
var north_point_4 = new BMap.Point(113.349131, 23.172096);
var north_point_5 = new BMap.Point(113.34958, 23.17156);
var north_point_6 = new BMap.Point(113.347536, 23.170879);
//西区
var west_point = new BMap.Point(113.348508, 23.160427);
var west_point_1 = new BMap.Point(113.349501, 23.161256);
var west_point_2 = new BMap.Point(113.348073, 23.159794);
var west_point_3 = new BMap.Point(113.348531, 23.159333);
var west_point_4 = new BMap.Point(113.347125, 23.159633);
var west_point_5 = new BMap.Point(113.348958, 23.160841);
var west_point_6 = new BMap.Point(113.349012, 23.160035);
//南区
var south_point = new BMap.Point(113.350368, 23.155193);
var south_point_1 = new BMap.Point(113.350408, 23.155178);
var south_point_2 = new BMap.Point(113.350813, 23.155552);
var south_point_3 = new BMap.Point(113.351015, 23.154771);
var south_point_4 = new BMap.Point(113.350076, 23.154668);
var south_point_5 = new BMap.Point(113.351401, 23.154356);
var south_point_6 = new BMap.Point(113.349344, 23.155424);
//东区
var east_point = new BMap.Point(113.355021, 23.155936);
var east_point_1 = new BMap.Point(113.354689, 23.156293);
var east_point_2 = new BMap.Point(113.354994, 23.157315);
var east_point_3 = new BMap.Point(113.356009, 23.155961);
var east_point_4 = new BMap.Point(113.353431, 23.155994);
var east_point_5 = new BMap.Point(113.353243, 23.154763);
var east_point_6 = new BMap.Point(113.356319, 23.156407);
/*加载垃圾桶图标 start*/
var myIcon_normal = new BMap.Icon(
  "./imgs/trash_normal.png",
  new BMap.Size(35, 35)
);
var myIcon_broken = new BMap.Icon(
  "./imgs/trash_broken.png",
  new BMap.Size(35, 35)
);
var myIcon_full = new BMap.Icon("./imgs/trash_full.png", new BMap.Size(35, 35));
/*加载垃圾桶图标 end*/

function marker_set_north() {
  //加载垃圾桶标记
  var marker_1 = new BMap.Marker(north_point_1, { icon: myIcon_normal });
  var marker_2 = new BMap.Marker(north_point_2, { icon: myIcon_normal });
  var marker_3 = new BMap.Marker(north_point_3, { icon: myIcon_normal });
  var marker_4 = new BMap.Marker(north_point_4, { icon: myIcon_normal });
  var marker_5 = new BMap.Marker(north_point_5, { icon: myIcon_full });
  var marker_6 = new BMap.Marker(north_point_6, { icon: myIcon_broken });
  //加载垃圾桶标签
  map.addOverlay(marker_1);
  map.addOverlay(marker_2);
  map.addOverlay(marker_3);
  map.addOverlay(marker_4);
  map.addOverlay(marker_5);
  map.addOverlay(marker_6);
  //加载文字标签
  var label_1 = new BMap.Label("001:正常", { offset: new BMap.Size(20, -10) });
  var label_2 = new BMap.Label("002:正常", { offset: new BMap.Size(20, -10) });
  var label_3 = new BMap.Label("003:正常", { offset: new BMap.Size(20, -10) });
  var label_4 = new BMap.Label("004:正常", { offset: new BMap.Size(20, -10) });
  var label_5 = new BMap.Label("005:已满", { offset: new BMap.Size(20, -10) });
  var label_6 = new BMap.Label("006:损坏", { offset: new BMap.Size(20, -10) });
  //添加文字标签
  marker_1.setLabel(label_1);
  marker_2.setLabel(label_2);
  marker_3.setLabel(label_3);
  marker_4.setLabel(label_4);
  marker_5.setLabel(label_5);
  marker_6.setLabel(label_6);
}
function marker_set_west() {
  //加载垃圾桶标记
  var marker_1 = new BMap.Marker(west_point_1, { icon: myIcon_normal });
  var marker_2 = new BMap.Marker(west_point_2, { icon: myIcon_normal });
  var marker_3 = new BMap.Marker(west_point_3, { icon: myIcon_normal });
  var marker_4 = new BMap.Marker(west_point_4, { icon: myIcon_normal });
  var marker_5 = new BMap.Marker(west_point_5, { icon: myIcon_full });
  var marker_6 = new BMap.Marker(west_point_6, { icon: myIcon_broken });
  //加载垃圾桶标签
  map.addOverlay(marker_1);
  map.addOverlay(marker_2);
  map.addOverlay(marker_3);
  map.addOverlay(marker_4);
  map.addOverlay(marker_5);
  map.addOverlay(marker_6);
  //加载文字标签
  var label_1 = new BMap.Label("001:正常", { offset: new BMap.Size(20, -10) });
  var label_2 = new BMap.Label("002:正常", { offset: new BMap.Size(20, -10) });
  var label_3 = new BMap.Label("003:正常", { offset: new BMap.Size(20, -10) });
  var label_4 = new BMap.Label("004:正常", { offset: new BMap.Size(20, -10) });
  var label_5 = new BMap.Label("005:已满", { offset: new BMap.Size(20, -10) });
  var label_6 = new BMap.Label("006:损坏", { offset: new BMap.Size(20, -10) });
  //添加文字标签
  marker_1.setLabel(label_1);
  marker_2.setLabel(label_2);
  marker_3.setLabel(label_3);
  marker_4.setLabel(label_4);
  marker_5.setLabel(label_5);
  marker_6.setLabel(label_6);
}
function marker_set_south() {
  //加载垃圾桶标记
  var marker_1 = new BMap.Marker(south_point_1, { icon: myIcon_normal });
  var marker_2 = new BMap.Marker(south_point_2, { icon: myIcon_normal });
  var marker_3 = new BMap.Marker(south_point_3, { icon: myIcon_normal });
  var marker_4 = new BMap.Marker(south_point_4, { icon: myIcon_normal });
  var marker_5 = new BMap.Marker(south_point_5, { icon: myIcon_full });
  var marker_6 = new BMap.Marker(south_point_6, { icon: myIcon_broken });
  //加载垃圾桶标签
  map.addOverlay(marker_1);
  map.addOverlay(marker_2);
  map.addOverlay(marker_3);
  map.addOverlay(marker_4);
  map.addOverlay(marker_5);
  map.addOverlay(marker_6);
  //加载文字标签
  var label_1 = new BMap.Label("001:正常", { offset: new BMap.Size(20, -10) });
  var label_2 = new BMap.Label("002:正常", { offset: new BMap.Size(20, -10) });
  var label_3 = new BMap.Label("003:正常", { offset: new BMap.Size(20, -10) });
  var label_4 = new BMap.Label("004:正常", { offset: new BMap.Size(20, -10) });
  var label_5 = new BMap.Label("005:已满", { offset: new BMap.Size(20, -10) });
  var label_6 = new BMap.Label("006:损坏", { offset: new BMap.Size(20, -10) });
  //添加文字标签
  marker_1.setLabel(label_1);
  marker_2.setLabel(label_2);
  marker_3.setLabel(label_3);
  marker_4.setLabel(label_4);
  marker_5.setLabel(label_5);
  marker_6.setLabel(label_6);
}
function marker_set_east() {
  //加载垃圾桶标记
  var marker_1 = new BMap.Marker(east_point_1, { icon: myIcon_normal });
  var marker_2 = new BMap.Marker(east_point_2, { icon: myIcon_normal });
  var marker_3 = new BMap.Marker(east_point_3, { icon: myIcon_normal });
  var marker_4 = new BMap.Marker(east_point_4, { icon: myIcon_normal });
  var marker_5 = new BMap.Marker(east_point_5, { icon: myIcon_full });
  var marker_6 = new BMap.Marker(east_point_6, { icon: myIcon_broken });
  //加载垃圾桶标签
  map.addOverlay(marker_1);
  map.addOverlay(marker_2);
  map.addOverlay(marker_3);
  map.addOverlay(marker_4);
  map.addOverlay(marker_5);
  map.addOverlay(marker_6);
  //加载文字标签
  var label_1 = new BMap.Label("001:正常", { offset: new BMap.Size(20, -10) });
  var label_2 = new BMap.Label("002:正常", { offset: new BMap.Size(20, -10) });
  var label_3 = new BMap.Label("003:正常", { offset: new BMap.Size(20, -10) });
  var label_4 = new BMap.Label("004:正常", { offset: new BMap.Size(20, -10) });
  var label_5 = new BMap.Label("005:已满", { offset: new BMap.Size(20, -10) });
  var label_6 = new BMap.Label("006:损坏", { offset: new BMap.Size(20, -10) });
  //添加文字标签
  marker_1.setLabel(label_1);
  marker_2.setLabel(label_2);
  marker_3.setLabel(label_3);
  marker_4.setLabel(label_4);
  marker_5.setLabel(label_5);
  marker_6.setLabel(label_6);
}
function map_init() {
  map.centerAndZoom(north_point, 18);
  map.setCurrentCity("广州"); // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  map.addControl(
    new BMap.MapTypeControl({
      mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })
  );
  map.addControl(cr); //添加版权控件
  cr.addCopyright({
    id: 1,
    content:
      "<a href='https://www.scut.edu.cn/new/'><img src='./imgs/scut_logo.png' width='250px'></a>",
    bounds: map.getBounds()
  });
  marker_set_north();
}

$(function() {
  map_init();
  $("#south").click(function() {
    map.centerAndZoom(south_point, 18);
    marker_set_south();
  });
  $("#north").click(function() {
    map.centerAndZoom(north_point, 18);
    marker_set_north();
  });
  $("#west").click(function() {
    map.centerAndZoom(west_point, 18);
    marker_set_west();
  });
  $("#east").click(function() {
    map.centerAndZoom(east_point, 18);
    marker_set_east();
  });
});
