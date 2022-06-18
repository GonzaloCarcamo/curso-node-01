const fs = require('fs');
const colors = require('colors');

const crearArchivoTable = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for(let i = 1 ; i <= hasta ; i++){
            salida += `${base} x ${i} = ${base * i} \n`
        }

       if(listar == true){
        console.log('--------------------------------'.yellow);
        console.log('Imprimir la tabla del ', colors.bgYellow( base ));
        console.log('--------------------------------'.yellow);
        console.log(salida);
       }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return colors.america('tabla-' + base + '.txt');
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTable
}