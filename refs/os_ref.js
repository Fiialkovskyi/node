const os = require('os');

// Платформа
console.log(os.platform());  // ---> win32

// Архитектура
console.log(os.arch()); // ---> x64

// Информация о процессорах
console.log(os.cpus());

// Свободная память
console.log(os.freemem());

// Всего памяти 
console.log(os.totalmem());

// Корневая директория на ПК
console.log(os.homedir());

// Сколько система работает
console.log(os.uptime());