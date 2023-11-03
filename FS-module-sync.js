const fs = require('fs')

//readfileSync
console.log("Empezando")
const first = fs.readFileSync('./content/subfolder/first.txt', 'utf8')
const second = fs.readFileSync('./content/subfolder/second.txt', 'utf8')

//writefileSync, crear nuevo archivo de texto con el calor dado, si ya tiene valor se borra y se escribe lo dado. Para no sobre escribir se agrega un {flag:'a'} con coma despues del argumento
fs.writeFileSync(
    './content/subfolder/result.txt', //Directorio
    `Aca esta el ${first}, ${second}`, //Texto a agregar
    { flag: 'a' } //Para no sobreescribir
)
console.log("Tarea terminada")
console.log("Empezando con la proxima tarea")