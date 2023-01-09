var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Garung<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Kalibawang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Kalikajar<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Kaliwiro<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" /> Kejajar<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_5.png" /> Kepil<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_6.png" /> Kertek<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_7.png" /> Leksono<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_8.png" /> Mojotengah<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_9.png" /> Sapuran<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_10.png" /> Selomerto<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_11.png" /> Sukoharjo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_12.png" /> Wadaslintang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_13.png" /> Watumalang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_14.png" /> Wonosobo<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_15.png" /> <br />'
        });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Rs': 'Rs', 'Puskesmas': 'Puskesmas', 'Poliklinik': 'Poliklinik', 'Posyandu': 'Posyandu', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Rs': 'TextEdit', 'Puskesmas': 'TextEdit', 'Poliklinik': 'TextEdit', 'Posyandu': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Provinsi': 'inline label', 'Rs': 'inline label', 'Puskesmas': 'inline label', 'Poliklinik': 'inline label', 'Posyandu': 'inline label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});