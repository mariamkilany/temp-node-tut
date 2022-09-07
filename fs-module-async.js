//bulit in module File System
const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./conent/first.txt','utf-8', (err, result) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    const first = result;
    readFile('./conent/second.txt', 'utf-8', (err, result) =>
    {
        if (err)
        {
            console.log(err)
            return
        }
        const second = result
        writeFile('./conent/result.txt', `Here is the result : ${first} ${second} \n `, (err, result) =>
        {
            if (err)
            {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
