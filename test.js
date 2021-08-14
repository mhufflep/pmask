const pmask = require('./pmask-node')
//import pmask from './pmask'

const pm = new pmask();

// Example 1
pm.separators = ['-'];
pm.mask = 'xxx-xxx-xxxx';
pm.x = '#';
pm.fill = true;

console.log(pm.get("1234")); //123-4##-####

// Example 2
pm.separators = ['-', '(', ')'];
pm.mask = 'x-(xxx)-xxx-xxxx';
pm.x = '.';
pm.fill = true;

console.log(pm.get("1234567")); //1-(234)-567-....

// Example 3
pm.separators = ['-', '(', ')'];
pm.mask = 'x-(xxx)-xxx-xxxx';
pm.fill = false;

console.log(pm.get("1234")); //1-(234

// Example 4
pm.separators = ['-', '+', '(', ')'];
pm.mask = '+x-(xxx)-(xxx)-(xx)-(xx)';
pm.x = '#';
pm.fill = true;

console.log(pm.get("12345678902")); //+1-(234)-(567)-(89)-(02)
