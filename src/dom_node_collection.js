class DOMNodeCollection {
    constructor(elements) {
        this.elements = elements;
    }

    html(string) {
        if (string !== undefined) {
            this.elements.forEach( (el) => {
                el.innerHTML = string;
            });
        } else {
            return this.elements[0].innerHTML;
        }
    }

    empty(){
        this.html('');
    }

    append(content){

        if (typeof content === 'string') {
            this.elements.forEach((el) => {
                el.innerHTML += content;
            });
        } else if (content instanceof HTMLElement) {
            this.elements.forEach((el) => {
                el.innerHTML += content.outerHTML;
            });
        } else {
            this.elements.forEach((el) => {
                content.elements.forEach((f) => {
                    el.innerHTML += f.outerHTML;
                });
            });
        }
    }
    addClass(clss){
        this.elements.forEach((el) => {
            el.classList.add(clss);
        });
    }
    removeClass(clss){
        this.elements.forEach((el) => {
            el.classList.remove(clss);
        });
    }

    attr(attrName, value){
        this.elements.forEach((el) => {
            el.setAttribute(attrName, value);
        });
    }

    children(){
        let childs = [];
        this.elements.forEach((el) => {
            let currChildren = Array.from(el.children);
            childs = childs.concat(currChildren);
        });
        return new DOMNodeCollection(childs)
    }

    parent(){
        let parents = [];
        this.elements.forEach((el) => {
            if(!parents.includes(el.parentNode)){
                parents.push(el.parentNode);
            }
        });
        return new DOMNodeCollection(parents);
    }
    find(arg){
        let foundNodes = [];
        this.elements.forEach((el) => {
            foundNodes = foundNodes.concat(Array.from(el.querySelectorAll(arg)))
        });
        return new DOMNodeCollection(foundNodes);
    }
    remove(){
        this.elements.forEach((el) => {
            el.outerHTML = '';
        });
    }
}

module.exports = DOMNodeCollection;