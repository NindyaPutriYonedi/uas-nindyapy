var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_perumahan_1 = new ol.format.GeoJSON();
var features_perumahan_1 = format_perumahan_1.readFeatures(json_perumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan_1.addFeatures(features_perumahan_1);
var lyr_perumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan_1, 
                style: style_perumahan_1,
                popuplayertitle: "perumahan",
                interactive: true,
    title: 'perumahan<br />\
    <img src="styles/legend/perumahan_1_0.png" /> <br />'
        });
var format_rumah_2 = new ol.format.GeoJSON();
var features_rumah_2 = format_rumah_2.readFeatures(json_rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_2.addFeatures(features_rumah_2);
var lyr_rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_2, 
                style: style_rumah_2,
                popuplayertitle: "rumah",
                interactive: true,
                title: '<img src="styles/legend/rumah_2.png" /> rumah'
            });
var format_mesjid_3 = new ol.format.GeoJSON();
var features_mesjid_3 = format_mesjid_3.readFeatures(json_mesjid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid_3.addFeatures(features_mesjid_3);
var lyr_mesjid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid_3, 
                style: style_mesjid_3,
                popuplayertitle: "mesjid",
                interactive: true,
                title: '<img src="styles/legend/mesjid_3.png" /> mesjid'
            });
var format_pos_4 = new ol.format.GeoJSON();
var features_pos_4 = format_pos_4.readFeatures(json_pos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pos_4.addFeatures(features_pos_4);
var lyr_pos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pos_4, 
                style: style_pos_4,
                popuplayertitle: "pos",
                interactive: true,
                title: '<img src="styles/legend/pos_4.png" /> pos'
            });
var format_minimarket_5 = new ol.format.GeoJSON();
var features_minimarket_5 = format_minimarket_5.readFeatures(json_minimarket_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minimarket_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minimarket_5.addFeatures(features_minimarket_5);
var lyr_minimarket_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_minimarket_5, 
                style: style_minimarket_5,
                popuplayertitle: "minimarket",
                interactive: true,
                title: '<img src="styles/legend/minimarket_5.png" /> minimarket'
            });
var format_lapangan_6 = new ol.format.GeoJSON();
var features_lapangan_6 = format_lapangan_6.readFeatures(json_lapangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_6.addFeatures(features_lapangan_6);
var lyr_lapangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_6, 
                style: style_lapangan_6,
                popuplayertitle: "lapangan",
                interactive: true,
                title: '<img src="styles/legend/lapangan_6.png" /> lapangan'
            });
var format_taman_7 = new ol.format.GeoJSON();
var features_taman_7 = format_taman_7.readFeatures(json_taman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taman_7.addFeatures(features_taman_7);
var lyr_taman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taman_7, 
                style: style_taman_7,
                popuplayertitle: "taman",
                interactive: true,
                title: '<img src="styles/legend/taman_7.png" /> taman'
            });
var format_jalan_8 = new ol.format.GeoJSON();
var features_jalan_8 = format_jalan_8.readFeatures(json_jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_8.addFeatures(features_jalan_8);
var lyr_jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_8, 
                style: style_jalan_8,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_8.png" /> jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_perumahan_1.setVisible(true);lyr_rumah_2.setVisible(true);lyr_mesjid_3.setVisible(true);lyr_pos_4.setVisible(true);lyr_minimarket_5.setVisible(true);lyr_lapangan_6.setVisible(true);lyr_taman_7.setVisible(true);lyr_jalan_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_perumahan_1,lyr_rumah_2,lyr_mesjid_3,lyr_pos_4,lyr_minimarket_5,lyr_lapangan_6,lyr_taman_7,lyr_jalan_8];
lyr_perumahan_1.set('fieldAliases', {'id': 'id', });
lyr_rumah_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Luas': 'Luas', });
lyr_mesjid_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_pos_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_minimarket_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_lapangan_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_taman_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalan_8.set('fieldAliases', {'id': 'id', });
lyr_perumahan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_rumah_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Luas': 'Range', });
lyr_mesjid_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_pos_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_minimarket_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_lapangan_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_taman_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalan_8.set('fieldImages', {'id': 'TextEdit', });
lyr_perumahan_1.set('fieldLabels', {'id': 'no label', });
lyr_rumah_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Luas': 'no label', });
lyr_mesjid_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_pos_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_minimarket_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_lapangan_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_taman_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_jalan_8.set('fieldLabels', {'id': 'no label', });
lyr_jalan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});