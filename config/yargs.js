const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe: 'Es la base de la tabla para multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: 'false',
        describe: 'Indica si se va a listar la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta donde se imprimirá la tabla'
    })
    .check((argv, options) => {
        //console.log('yargs', argv)
        if( isNaN(argv.b )){
            throw 'La base debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;