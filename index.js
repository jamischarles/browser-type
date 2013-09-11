exports.uaMatch = uaMatch;

if(typeof window != "undefined"){
    exports.browser = uaMatch(navigator.userAgent);
}

function uaMatch(ua){
    ua = ua.toLowerCase();
    
    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
    /(msie) ([\w.]+)/.exec( ua ) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
    [];
    
    return {
        type: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
}



