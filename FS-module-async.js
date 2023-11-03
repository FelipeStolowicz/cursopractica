const { readFile, writeFile } = require('fs')

console.log("Empezando")
readFile('./content/subfolder/first.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8',(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/subfolder/result-async.txt',
            `Este es el resultado: ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("Tarea terminada")
            }
        )
    })
})
console.log("Emoezando con la proxima tarea")