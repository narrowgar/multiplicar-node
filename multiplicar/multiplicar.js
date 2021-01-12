//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base}no es un numero`)
            return;
        };

        let data = '';

        console.log('============================================='.green);
        console.log(`============ tabla del ${base} ==================`.green);
        console.log('============================================='.green);

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        resolve(data);

    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base introducida (${base}) no es un numero`)
            return;
        };
        if (!Number(limite)) {
            reject(`el limiete introducico (${limite}) no es un numero`)
            return;
        };

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}