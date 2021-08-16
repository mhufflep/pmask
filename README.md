# pmask.js
   A tiny JavaScript module that converts phone number by given pattern (mask)


## Attributes
  
  ``` javascript
  separators : Array
  mask       : String 
  x          : Char 
  fill       : Boolean
  ```
 
  ```
  separators are splitting digits

  mask is a pattern, use any symbol that 
  not included in separators to place a digit.

  x is a symbol that will be placed instead of number if 
  some of the digits is missing and fill parameter is set to true
  ```
   
## Methods
  Each attribute has its own setter and getter named with lowercase.
 
  ``` javascript
    // Reset all attributes to default state
    reset() : void
    
    // Get transformed given number
    get(number: String) : String
  ```
## Usage

``` javascript
import pmask from './pmask'
```
or there is also `pmask-node.js` provided for **Node.js**

```javascript
const pmask = require('./pmask-node');

const pm = new pmask();

pm.separators = ['-', '(', ')'];
pm.mask = 'x-(xxx)-xxx-xxxx';
pm.fill = false;

console.log(pm.get("1234")); //1-(234
```
Look inside `test.js` file to see more examples.
