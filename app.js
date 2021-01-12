const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(` ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'crear':

        //console.log(argv);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('archivo creado: ' + colors.red(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}


/* let parametro = argv[2]
let base = parametro.split('=')[1]
crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e)); */