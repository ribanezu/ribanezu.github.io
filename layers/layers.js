ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([407519.226292, 4458768.697046, 459432.128387, 4498213.020829]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BARRIOS_1 = new ol.format.GeoJSON();
var features_BARRIOS_1 = format_BARRIOS_1.readFeatures(json_BARRIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BARRIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_1.addFeatures(features_BARRIOS_1);
var lyr_BARRIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOS_1, 
                style: style_BARRIOS_1,
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_1.png" /> BARRIOS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BARRIOS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BARRIOS_1];
lyr_BARRIOS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'geodb_oid': 'geodb_oid', 'CODDIS': 'CODDIS', 'NOMDIS': 'NOMDIS', 'CODBAR': 'CODBAR', 'CODDISTRIT': 'CODDISTRIT', 'CODBARRIO': 'CODBARRIO', 'NOMBRE': 'NOMBRE', 'ORIG_FID': 'ORIG_FID', });
lyr_BARRIOS_1.set('fieldImages', {'OBJECTID': '', 'geodb_oid': '', 'CODDIS': '', 'NOMDIS': '', 'CODBAR': '', 'CODDISTRIT': '', 'CODBARRIO': '', 'NOMBRE': '', 'ORIG_FID': '', });
lyr_BARRIOS_1.set('fieldLabels', {'OBJECTID': 'no label', 'geodb_oid': 'no label', 'CODDIS': 'no label', 'NOMDIS': 'no label', 'CODBAR': 'no label', 'CODDISTRIT': 'no label', 'CODBARRIO': 'no label', 'NOMBRE': 'no label', 'ORIG_FID': 'no label', });
lyr_BARRIOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});