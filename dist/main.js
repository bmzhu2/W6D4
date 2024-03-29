/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(elements) {\n        this.elements = elements;\n    }\n\n    html(string) {\n        if (string !== undefined) {\n            this.elements.forEach( (el) => {\n                el.innerHTML = string;\n            });\n        } else {\n            return this.elements[0].innerHTML;\n        }\n    }\n\n    empty(){\n        this.html('');\n    }\n\n    append(content){\n\n        if (typeof content === 'string') {\n            this.elements.forEach((el) => {\n                el.innerHTML += content;\n            });\n        } else if (content instanceof HTMLElement) {\n            this.elements.forEach((el) => {\n                el.innerHTML += content.outerHTML;\n            });\n        } else {\n            this.elements.forEach((el) => {\n                content.elements.forEach((f) => {\n                    el.innerHTML += f.outerHTML;\n                });\n            });\n        }\n    }\n    addClass(clss){\n        this.elements.forEach((el) => {\n            el.classList.add(clss);\n        });\n    }\n    removeClass(clss){\n        this.elements.forEach((el) => {\n            el.classList.remove(clss);\n        });\n    }\n\n    attr(attrName, value){\n        this.elements.forEach((el) => {\n            el.setAttribute(attrName, value);\n        });\n    }\n\n    children(){\n        let childs = [];\n        this.elements.forEach((el) => {\n            let currChildren = Array.from(el.children);\n            childs = childs.concat(currChildren);\n        });\n        return new DOMNodeCollection(childs)\n    }\n\n    parent(){\n        let parents = [];\n        this.elements.forEach((el) => {\n            if(!parents.includes(el.parentNode)){\n                parents.push(el.parentNode);\n            }\n        });\n        return new DOMNodeCollection(parents);\n    }\n    find(arg){\n        let foundNodes = [];\n        this.elements.forEach((el) => {\n            foundNodes = foundNodes.concat(Array.from(el.querySelectorAll(arg)))\n        });\n        return new DOMNodeCollection(foundNodes);\n    }\n    remove(){\n        this.elements.forEach((el) => {\n            el.outerHTML = '';\n        });\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg){\n    \n    if(typeof arg === \"string\"){\n        let nodeList = document.querySelectorAll(arg);\n        return new DOMNodeCollection(Array.from(nodeList));\n    } else if (arg instanceof HTMLElement) {\n        return new DOMNodeCollection([arg]);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });