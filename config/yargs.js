opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'IMprime en consola la tabla de multiplicar', opts)
    .help()
    .command('crear', 'Crea un archivo con la tabla de la base seleccionada y con el limite seleccionado', opts)
    .argv;

module.exports = {
    argv
}