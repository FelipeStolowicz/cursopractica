const path = require(`path`);

//Separador de directorio
console.log(path.sep)

//Para encontrar el directorio
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

//Par
const directorioFirst = path.resolve(__dirname, 'content', 'subfolder', 'first.txt')
const directorioSecond = path.resolve(__dirname, 'content', 'subfolder', 'second.txt')