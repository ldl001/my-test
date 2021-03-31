const fs = require('fs');

function hahaha(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function (err, data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

hahaha('./data.txt')
.then(function (data) {
    console.log(data)
})
.catch(function (err) {
    console.log(err)
})