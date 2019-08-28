# orthos.js

convert to utf-8 combined ancient greek diacritics from precombined of all sorts


## Installation

## API

````javascript
  import {oxia, comb, plain, strip} from 'orthos'
````

methods:

convert string to combined version:

````javascript
    let combined = comb(rawStr)
````
string without stress symbols:

````javascript
    let plain = plain(combined)
````
string without any accent:

````javascript
    let stripped = strip(sym)
````

fix possible varia to oxia:

````javascript
    let fixed = oxia(sym)
````


## License

  GNU GPL
