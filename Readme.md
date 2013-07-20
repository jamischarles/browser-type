
# browser-type

  get browser type

## Installation

  Install with [component(1)](http://component.io):

    $ component install brighthas/browser-type
    
  Install for node.js
  
    $ npm install --save browser-type

## Example

    var browser = require("browser-type").browser,
        uaMatch = require("browser-type").uaMatch;
        
    var browser2 = uaMatch(/* user-agent info */);
    
    browser.type // msie / opera ...
    browser.version  // 22.1 23 ...

## License

  MIT
