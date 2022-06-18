const { crearArchivoTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');
/* const [, , arg3 = 'base=4'] = process.argv;
const [, base = 4] = arg3.split('='); */

/* const base = 5; */

/* console.log(process.argv); */
/* console.log(argv); */

console.clear();

crearArchivoTable( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'created'))
    .catch( err => console.log(err));