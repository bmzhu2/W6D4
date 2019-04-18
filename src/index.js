const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg){
    
    if(typeof arg === "string"){
        let nodeList = document.querySelectorAll(arg);
        return new DOMNodeCollection(Array.from(nodeList));
    } else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    }
}
