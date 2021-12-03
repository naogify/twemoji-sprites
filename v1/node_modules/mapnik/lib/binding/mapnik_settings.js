
var path = require('path');
module.exports.paths = {
    'fonts': path.join(__dirname, 'lib/mapnik/fonts'),
    'input_plugins': path.join(__dirname, 'lib/mapnik/input'),
    'mapnik_index': path.join(__dirname, 'bin/mapnik-index'),
    'shape_index': path.join(__dirname, 'bin/shapeindex')
};
module.exports.env = {
    'ICU_DATA': path.join(__dirname, 'share/icu'),
    'GDAL_DATA': path.join(__dirname, 'share/gdal'),
    'PROJ_LIB': path.join(__dirname, 'share/proj')
};

