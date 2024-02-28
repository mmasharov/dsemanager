/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/lists.js":
/*!*********************************!*\
  !*** ./src/js/modules/lists.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillStoreList: () => (/* binding */ fillStoreList)\n/* harmony export */ });\n/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ \"./src/js/services/requests.js\");\n/* harmony import */ var _storeInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeInfo */ \"./src/js/modules/storeInfo.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script */ \"./src/js/script.js\");\n\r\n\r\n\r\n\r\nfunction populateStores(parent, data) {\r\n    // Постраничное заполнение списка объектов\r\n    const btnPrev = document.querySelector('#storeListPrev'),\r\n        btnNext = document.querySelector('#storeListNext'),\r\n        itemsPerPage = 20,\r\n        totalPages = Math.ceil(data.length / itemsPerPage),\r\n        listBlock = document.querySelector(parent),\r\n        pageNumber = document.querySelector('#storesPage');\r\n    let currentPage = 1;\r\n\r\n    pageNumber.textContent = `${currentPage} / ${totalPages}`;\r\n\r\n    function fillPage(page) {\r\n        // Заполнение страницы списка\r\n        const startIndex = (page - 1) * itemsPerPage,\r\n            endIndex = startIndex + itemsPerPage,\r\n            pageItems = data.slice(startIndex, endIndex);\r\n        \r\n        for (let item of pageItems) {\r\n            const listItem = document.createElement('div');\r\n            \r\n            listItem.classList.add('store__list_item')\r\n            listItem.innerHTML = `<span>${item['store_id']}</span><span>${item['store_name']}</span>`;\r\n            listItem.addEventListener('click', () => {\r\n                _script__WEBPACK_IMPORTED_MODULE_2__.state['storeId'] = item['store_id'];\r\n                (0,_storeInfo__WEBPACK_IMPORTED_MODULE_1__.fillStoreInfo)(_script__WEBPACK_IMPORTED_MODULE_2__.state['storeId']);\r\n            });\r\n    \r\n            listBlock.appendChild(listItem);\r\n        }       \r\n    }\r\n\r\n    fillPage(currentPage);\r\n\r\n    // Обработчики кнопок управления списком\r\n    btnPrev.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (currentPage > 1) {\r\n            currentPage -= 1;\r\n            pageNumber.textContent = `${currentPage} / ${totalPages}`;\r\n            listBlock.innerHTML = '<div class=\"store__list_item\"><span>ID</span><span>Название</span></div>';\r\n            fillPage(currentPage);\r\n        } else {\r\n            currentPage = 1;\r\n        }\r\n    });\r\n    btnNext.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (currentPage < totalPages) {\r\n            currentPage += 1;\r\n            pageNumber.textContent = `${currentPage} / ${totalPages}`;\r\n            listBlock.innerHTML = '<div class=\"store__list_item\"><span>ID</span><span>Название</span></div>';\r\n            fillPage(currentPage);\r\n        } else {\r\n            currentPage = totalPages;\r\n        }\r\n    });\r\n}\r\n\r\nconst fillStoreList = (parent) => {\r\n    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:8000/stores/')\r\n        .then(res => populateStores(parent, res));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://dsmanager/./src/js/modules/lists.js?");

/***/ }),

/***/ "./src/js/modules/storeInfo.js":
/*!*************************************!*\
  !*** ./src/js/modules/storeInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillStoreInfo: () => (/* binding */ fillStoreInfo)\n/* harmony export */ });\n/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ \"./src/js/services/requests.js\");\n\r\n\r\nfunction populateStoreInfo(store_id, data) {\r\n    const storeWrapper = document.querySelector('.store__info');\r\n    for (let item in data) {\r\n        const element = storeWrapper.querySelector(`#${item}`);\r\n        if (element.classList.contains('store__info_img')) {\r\n            if (data[item]) {\r\n                element.innerHTML = `<img src=\"storage/stores/${store_id}/${data[item]}\" alt=\"${data[item]}\">`;\r\n            } else {\r\n                element.innerHTML = '<img src=\"storage/default-store.jpg\" alt=\"Default Store Image\">';\r\n            }\r\n        } else {\r\n            element.textContent = data[item];\r\n        }\r\n    }\r\n}\r\n\r\nconst fillStoreInfo = (id) => {\r\n    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)(`http://localhost:8000/stores/${id}`)\r\n        .then(res => populateStoreInfo(id, res));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://dsmanager/./src/js/modules/storeInfo.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   state: () => (/* binding */ state)\n/* harmony export */ });\n/* harmony import */ var _modules_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lists */ \"./src/js/modules/lists.js\");\n/* harmony import */ var _modules_storeInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storeInfo */ \"./src/js/modules/storeInfo.js\");\n\r\n\r\n\r\nlet state = {\r\n    storeId: 0\r\n};\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    (0,_modules_lists__WEBPACK_IMPORTED_MODULE_0__.fillStoreList)('.store__list');\r\n    if (state['storeId']) {\r\n        (0,_modules_storeInfo__WEBPACK_IMPORTED_MODULE_1__.fillStoreInfo)(state['storeId']);\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://dsmanager/./src/js/script.js?");

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResource: () => (/* binding */ getResource)\n/* harmony export */ });\nconst getResource = async (url) => {\r\n    let res = await fetch(url);\r\n\r\n    if(!res.ok) {\r\n        throw new Error(`Could not fetch ${url}, status: ${res.status}`)\r\n    }\r\n\r\n    return await res.json();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://dsmanager/./src/js/services/requests.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;