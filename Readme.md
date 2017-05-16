# orthos.js

corrects utf-8 combined greek diacritics from precombined of all sorts


## Installation

## API

````javascript
    var orthos = require('./orthos');
````

three methods:

convert string to combined version

````javascript
    let combined = orthos.toComb(rawStr)
````
get plain string, i.e. without only stress symbols

````javascript
    let plain = orthos.plain(combined)
````
downcase symbol

````javascript
    let downcased = orthos.dc(sym)
````



## License

  GNU GPL
