const fs = require('fs');
const path = require('path');

// File System
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) throw new Error(err);

//     console.log('dir was created')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'hellooo s sad sad ss world', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('the file was created');
//         fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), 
//         '--- new note ---', 
//         (err) => {
//             if (err) throw err;
//             console.log('file was changed');
//         })

//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (err, data) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         )
//     }
// });

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err;
        console.log('renamed');
    } 
)