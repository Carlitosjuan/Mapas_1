var wms_layers = [];


        var lyr_Google_Satelite_0 = new ol.layer.Tile({
            'title': 'Google_Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Google_Satelite_Hybrid_1 = new ol.layer.Tile({
            'title': 'Google_Satelite_Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROGRAMACION_DEF_2 = new ol.format.GeoJSON();
var features_PROGRAMACION_DEF_2 = format_PROGRAMACION_DEF_2.readFeatures(json_PROGRAMACION_DEF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROGRAMACION_DEF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROGRAMACION_DEF_2.addFeatures(features_PROGRAMACION_DEF_2);
var lyr_PROGRAMACION_DEF_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROGRAMACION_DEF_2, 
                style: style_PROGRAMACION_DEF_2,
                interactive: true,
    title: 'PROGRAMACION_DEF<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_0.png" /> ALFREDO PENAGOS<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_1.png" /> CARLOS RODRIGUEZ Y NATALY NEIRA<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_2.png" /> CAROLINA MORENO<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_3.png" /> FABIAN DIAZ<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_4.png" /> FREDDY URREGO<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_5.png" /> MARTIN VARGAS<br />\
    <img src="styles/legend/PROGRAMACION_DEF_2_6.png" /> <br />'
        });
var format_SQ_21_30_Carlos_3 = new ol.format.GeoJSON();
var features_SQ_21_30_Carlos_3 = format_SQ_21_30_Carlos_3.readFeatures(json_SQ_21_30_Carlos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SQ_21_30_Carlos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SQ_21_30_Carlos_3.addFeatures(features_SQ_21_30_Carlos_3);
var lyr_SQ_21_30_Carlos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SQ_21_30_Carlos_3, 
                style: style_SQ_21_30_Carlos_3,
                interactive: true,
    title: 'SQ_21_30_Carlos<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_0.png" /> 2020-10-22<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_1.png" /> 2020-10-23<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_2.png" /> 2020-10-24<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_3.png" /> 2020-10-26<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_4.png" /> 2020-10-27<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_5.png" /> 2020-10-28<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_6.png" /> 2020-10-29<br />\
    <img src="styles/legend/SQ_21_30_Carlos_3_7.png" /> <br />'
        });

lyr_Google_Satelite_0.setVisible(true);lyr_Google_Satelite_Hybrid_1.setVisible(true);lyr_PROGRAMACION_DEF_2.setVisible(true);lyr_SQ_21_30_Carlos_3.setVisible(true);
var layersList = [lyr_Google_Satelite_0,lyr_Google_Satelite_Hybrid_1,lyr_PROGRAMACION_DEF_2,lyr_SQ_21_30_Carlos_3];
lyr_PROGRAMACION_DEF_2.set('fieldAliases', {'CODIGO_SIG': 'CODIGO_SIG', 'PREDIAL': 'PREDIAL', 'FOLIO_MATR': 'FOLIO_MATR', 'OBSERVACIO': 'OBSERVACIO', 'NOM_PREDIO': 'NOM_PREDIO', 'NOMBRE_S_2': 'NOMBRE_S_2', 'FECHA': 'FECHA', 'INGENIER_1': 'INGENIER_1', 'GRUPO': 'GRUPO', 'NO': 'NO', 'CODIGO_S_1': 'CODIGO_S_1', 'NOMBRE_PRE': 'NOMBRE_PRE', 'VEREDA': 'VEREDA', 'SOLIC': 'SOLIC', 'CC': 'CC', 'TELEFONO': 'TELEFONO', 'FOLIO': 'FOLIO', 'PREDIAL_1': 'PREDIAL_1', 'FOLIO1': 'FOLIO1', 'FECHA_1': 'FECHA_1', 'ING': 'ING', 'ABOGADO': 'ABOGADO', 'ESTADO': 'ESTADO', 'OBSERVAC_1': 'OBSERVAC_1', 'F16': 'F16', 'F17': 'F17', 'F18': 'F18', 'F19': 'F19', 'Id': 'Id', 'CODIGO_S_2': 'CODIGO_S_2', 'vereda_cat': 'vereda_cat', 'nombre_p_1': 'nombre_p_1', 'area_solic': 'area_solic', 'matricula_': 'matricula_', 'estado_1': 'estado_1', 'NO_1': 'NO_1', 'CODIGO_S_3': 'CODIGO_S_3', 'vereda_c_1': 'vereda_c_1', 'NOMBRE': 'NOMBRE', 'vereda_ubi': 'vereda_ubi', 'nombre_p_2': 'nombre_p_2', 'cedula_cat': 'cedula_cat', 'matricula1': 'matricula1', 'NO_SOLI': 'NO_SOLI', 'CONCEPTO_T': 'CONCEPTO_T', 'CONCEPTO_J': 'CONCEPTO_J', 'RESPONSABL': 'RESPONSABL', 'INGENIERO': 'INGENIERO', 'FECHA_VISI': 'FECHA_VISI', });
lyr_SQ_21_30_Carlos_3.set('fieldAliases', {'CODIGO_SIG': 'CODIGO_SIG', 'PREDIAL': 'PREDIAL', 'FOLIO_MATR': 'FOLIO_MATR', 'OBSERVACIO': 'OBSERVACIO', 'NOM_PREDIO': 'NOM_PREDIO', 'NOMBRE_S_2': 'NOMBRE_S_2', 'FECHA': 'FECHA', 'INGENIER_1': 'INGENIER_1', 'GRUPO': 'GRUPO', 'NO': 'NO', 'CODIGO_S_1': 'CODIGO_S_1', 'NOMBRE_PRE': 'NOMBRE_PRE', 'VEREDA': 'VEREDA', 'SOLIC': 'SOLIC', 'CC': 'CC', 'TELEFONO': 'TELEFONO', 'FOLIO': 'FOLIO', 'PREDIAL_1': 'PREDIAL_1', 'FOLIO1': 'FOLIO1', 'FECHA_1': 'FECHA_1', 'ING': 'ING', 'ABOGADO': 'ABOGADO', 'ESTADO': 'ESTADO', 'OBSERVAC_1': 'OBSERVAC_1', 'F16': 'F16', 'F17': 'F17', 'F18': 'F18', 'F19': 'F19', 'Id': 'Id', 'CODIGO_S_2': 'CODIGO_S_2', 'vereda_cat': 'vereda_cat', 'nombre_p_1': 'nombre_p_1', 'area_solic': 'area_solic', 'matricula_': 'matricula_', 'estado_1': 'estado_1', 'NO_1': 'NO_1', 'CODIGO_S_3': 'CODIGO_S_3', 'vereda_c_1': 'vereda_c_1', 'NOMBRE': 'NOMBRE', 'vereda_ubi': 'vereda_ubi', 'nombre_p_2': 'nombre_p_2', 'cedula_cat': 'cedula_cat', 'matricula1': 'matricula1', 'NO_SOLI': 'NO_SOLI', 'CONCEPTO_T': 'CONCEPTO_T', 'CONCEPTO_J': 'CONCEPTO_J', 'RESPONSABL': 'RESPONSABL', 'INGENIERO': 'INGENIERO', 'FECHA_VISI': 'FECHA_VISI', });
lyr_PROGRAMACION_DEF_2.set('fieldImages', {'CODIGO_SIG': 'TextEdit', 'PREDIAL': 'TextEdit', 'FOLIO_MATR': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'NOM_PREDIO': 'TextEdit', 'NOMBRE_S_2': 'TextEdit', 'FECHA': 'DateTime', 'INGENIER_1': 'TextEdit', 'GRUPO': 'TextEdit', 'NO': 'TextEdit', 'CODIGO_S_1': 'TextEdit', 'NOMBRE_PRE': 'TextEdit', 'VEREDA': 'TextEdit', 'SOLIC': 'TextEdit', 'CC': 'TextEdit', 'TELEFONO': 'TextEdit', 'FOLIO': 'TextEdit', 'PREDIAL_1': 'TextEdit', 'FOLIO1': 'TextEdit', 'FECHA_1': 'DateTime', 'ING': 'TextEdit', 'ABOGADO': 'TextEdit', 'ESTADO': 'TextEdit', 'OBSERVAC_1': 'TextEdit', 'F16': 'TextEdit', 'F17': 'TextEdit', 'F18': 'TextEdit', 'F19': 'TextEdit', 'Id': 'TextEdit', 'CODIGO_S_2': 'TextEdit', 'vereda_cat': 'TextEdit', 'nombre_p_1': 'TextEdit', 'area_solic': 'TextEdit', 'matricula_': 'TextEdit', 'estado_1': 'TextEdit', 'NO_1': 'TextEdit', 'CODIGO_S_3': 'TextEdit', 'vereda_c_1': 'TextEdit', 'NOMBRE': 'TextEdit', 'vereda_ubi': 'TextEdit', 'nombre_p_2': 'TextEdit', 'cedula_cat': 'TextEdit', 'matricula1': 'TextEdit', 'NO_SOLI': 'TextEdit', 'CONCEPTO_T': 'TextEdit', 'CONCEPTO_J': 'TextEdit', 'RESPONSABL': 'TextEdit', 'INGENIERO': 'TextEdit', 'FECHA_VISI': 'DateTime', });
lyr_SQ_21_30_Carlos_3.set('fieldImages', {'CODIGO_SIG': 'TextEdit', 'PREDIAL': 'TextEdit', 'FOLIO_MATR': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'NOM_PREDIO': 'TextEdit', 'NOMBRE_S_2': 'TextEdit', 'FECHA': 'DateTime', 'INGENIER_1': 'TextEdit', 'GRUPO': 'TextEdit', 'NO': 'TextEdit', 'CODIGO_S_1': 'TextEdit', 'NOMBRE_PRE': 'TextEdit', 'VEREDA': 'TextEdit', 'SOLIC': 'TextEdit', 'CC': 'TextEdit', 'TELEFONO': 'TextEdit', 'FOLIO': 'TextEdit', 'PREDIAL_1': 'TextEdit', 'FOLIO1': 'TextEdit', 'FECHA_1': 'DateTime', 'ING': 'TextEdit', 'ABOGADO': 'TextEdit', 'ESTADO': 'TextEdit', 'OBSERVAC_1': 'TextEdit', 'F16': 'TextEdit', 'F17': 'TextEdit', 'F18': 'TextEdit', 'F19': 'TextEdit', 'Id': 'TextEdit', 'CODIGO_S_2': 'TextEdit', 'vereda_cat': 'TextEdit', 'nombre_p_1': 'TextEdit', 'area_solic': 'TextEdit', 'matricula_': 'TextEdit', 'estado_1': 'TextEdit', 'NO_1': 'TextEdit', 'CODIGO_S_3': 'TextEdit', 'vereda_c_1': 'TextEdit', 'NOMBRE': 'TextEdit', 'vereda_ubi': 'TextEdit', 'nombre_p_2': 'TextEdit', 'cedula_cat': 'TextEdit', 'matricula1': 'TextEdit', 'NO_SOLI': 'TextEdit', 'CONCEPTO_T': 'TextEdit', 'CONCEPTO_J': 'TextEdit', 'RESPONSABL': 'TextEdit', 'INGENIERO': 'TextEdit', 'FECHA_VISI': 'DateTime', });
lyr_PROGRAMACION_DEF_2.set('fieldLabels', {'CODIGO_SIG': 'no label', 'PREDIAL': 'no label', 'FOLIO_MATR': 'no label', 'OBSERVACIO': 'no label', 'NOM_PREDIO': 'no label', 'NOMBRE_S_2': 'no label', 'FECHA': 'no label', 'INGENIER_1': 'no label', 'GRUPO': 'no label', 'NO': 'no label', 'CODIGO_S_1': 'no label', 'NOMBRE_PRE': 'no label', 'VEREDA': 'no label', 'SOLIC': 'no label', 'CC': 'no label', 'TELEFONO': 'no label', 'FOLIO': 'no label', 'PREDIAL_1': 'no label', 'FOLIO1': 'no label', 'FECHA_1': 'no label', 'ING': 'no label', 'ABOGADO': 'no label', 'ESTADO': 'no label', 'OBSERVAC_1': 'no label', 'F16': 'no label', 'F17': 'no label', 'F18': 'no label', 'F19': 'no label', 'Id': 'no label', 'CODIGO_S_2': 'no label', 'vereda_cat': 'no label', 'nombre_p_1': 'no label', 'area_solic': 'no label', 'matricula_': 'no label', 'estado_1': 'no label', 'NO_1': 'no label', 'CODIGO_S_3': 'no label', 'vereda_c_1': 'header label', 'NOMBRE': 'header label', 'vereda_ubi': 'header label', 'nombre_p_2': 'header label', 'cedula_cat': 'header label', 'matricula1': 'header label', 'NO_SOLI': 'header label', 'CONCEPTO_T': 'no label', 'CONCEPTO_J': 'no label', 'RESPONSABL': 'no label', 'INGENIERO': 'header label', 'FECHA_VISI': 'header label', });
lyr_SQ_21_30_Carlos_3.set('fieldLabels', {'CODIGO_SIG': 'header label', 'PREDIAL': 'header label', 'FOLIO_MATR': 'header label', 'OBSERVACIO': 'no label', 'NOM_PREDIO': 'no label', 'NOMBRE_S_2': 'no label', 'FECHA': 'no label', 'INGENIER_1': 'no label', 'GRUPO': 'no label', 'NO': 'no label', 'CODIGO_S_1': 'no label', 'NOMBRE_PRE': 'no label', 'VEREDA': 'header label', 'SOLIC': 'header label', 'CC': 'no label', 'TELEFONO': 'no label', 'FOLIO': 'no label', 'PREDIAL_1': 'no label', 'FOLIO1': 'no label', 'FECHA_1': 'no label', 'ING': 'no label', 'ABOGADO': 'no label', 'ESTADO': 'no label', 'OBSERVAC_1': 'no label', 'F16': 'no label', 'F17': 'no label', 'F18': 'no label', 'F19': 'no label', 'Id': 'no label', 'CODIGO_S_2': 'no label', 'vereda_cat': 'no label', 'nombre_p_1': 'no label', 'area_solic': 'no label', 'matricula_': 'header label', 'estado_1': 'no label', 'NO_1': 'no label', 'CODIGO_S_3': 'no label', 'vereda_c_1': 'header label', 'NOMBRE': 'header label', 'vereda_ubi': 'header label', 'nombre_p_2': 'header label', 'cedula_cat': 'header label', 'matricula1': 'header label', 'NO_SOLI': 'header label', 'CONCEPTO_T': 'no label', 'CONCEPTO_J': 'no label', 'RESPONSABL': 'header label', 'INGENIERO': 'header label', 'FECHA_VISI': 'header label', });
lyr_SQ_21_30_Carlos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});