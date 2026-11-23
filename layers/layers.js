var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASWILAYAH_1 = new ol.format.GeoJSON();
var features_BATASWILAYAH_1 = format_BATASWILAYAH_1.readFeatures(json_BATASWILAYAH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWILAYAH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWILAYAH_1.addFeatures(features_BATASWILAYAH_1);
var lyr_BATASWILAYAH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASWILAYAH_1, 
                style: style_BATASWILAYAH_1,
                popuplayertitle: 'BATAS WILAYAH',
                interactive: true,
                title: '<img src="styles/legend/BATASWILAYAH_1.png" /> BATAS WILAYAH'
            });
var format_LOKASIPROKLIM_2 = new ol.format.GeoJSON();
var features_LOKASIPROKLIM_2 = format_LOKASIPROKLIM_2.readFeatures(json_LOKASIPROKLIM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKASIPROKLIM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKASIPROKLIM_2.addFeatures(features_LOKASIPROKLIM_2);
var lyr_LOKASIPROKLIM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOKASIPROKLIM_2, 
                style: style_LOKASIPROKLIM_2,
                popuplayertitle: 'LOKASI PROKLIM',
                interactive: true,
                title: '<img src="styles/legend/LOKASIPROKLIM_2.png" /> LOKASI PROKLIM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASWILAYAH_1.setVisible(true);lyr_LOKASIPROKLIM_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASWILAYAH_1,lyr_LOKASIPROKLIM_2];
lyr_BATASWILAYAH_1.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LOKASIPROKLIM_2.set('fieldAliases', {'fid': 'fid', 'LOKASI PROGRAM KAMPUNG IKLIM': 'LOKASI PROGRAM KAMPUNG IKLIM', 'TAHUN PROKLIM': 'TAHUN PROKLIM', 'PENGHARGAAN': 'PENGHARGAAN', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BATASWILAYAH_1.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LOKASIPROKLIM_2.set('fieldImages', {'fid': 'TextEdit', 'LOKASI PROGRAM KAMPUNG IKLIM': 'TextEdit', 'TAHUN PROKLIM': 'TextEdit', 'PENGHARGAAN': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_BATASWILAYAH_1.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_LOKASIPROKLIM_2.set('fieldLabels', {'fid': 'hidden field', 'LOKASI PROGRAM KAMPUNG IKLIM': 'inline label - always visible', 'TAHUN PROKLIM': 'inline label - always visible', 'PENGHARGAAN': 'inline label - always visible', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', });
lyr_LOKASIPROKLIM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});