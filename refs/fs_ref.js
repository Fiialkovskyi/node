const fs = require('fs');
const path = require('path');

// File System
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) throw new Error(err);

//     console.log('dir was created')
// })

fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'hellooo sss world', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('the file was created');
    }

    
});