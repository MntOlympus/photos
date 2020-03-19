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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/austincapaviella/Desktop/FEC/photos/client/index.jsx: Unexpected token, expected \\\",\\\" (14:16)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m      images\\u001b[33m:\\u001b[39m []\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m      view\\u001b[33m:\\u001b[39m \\u001b[36mtrue\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Object.raiseWithData (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Object.raise (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:710:17)\\n    at Object.unexpected (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:8610:16)\\n    at Object.expect (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:8596:28)\\n    at Object.parseObj (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10202:14)\\n    at Object.parseExprAtom (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9836:28)\\n    at Object.parseExprAtom (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:4543:20)\\n    at Object.parseExprSubscripts (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Object.parseMaybeUnary (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9459:21)\\n    at Object.parseExprOps (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9329:23)\\n    at Object.parseMaybeConditional (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9302:23)\\n    at Object.parseMaybeAssign (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9257:21)\\n    at Object.parseMaybeAssign (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9289:25)\\n    at Object.parseExpression (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:9209:23)\\n    at Object.parseStatementContent (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11045:23)\\n    at Object.parseStatement (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10916:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11490:25)\\n    at Object.parseBlockBody (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11477:10)\\n    at Object.parseBlock (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11461:10)\\n    at Object.parseFunctionBody (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10477:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10446:10)\\n    at Object.parseMethod (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10408:10)\\n    at Object.pushClassMethod (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11896:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11813:12)\\n    at Object.parseClassMember (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11755:10)\\n    at withTopicForbiddingContext (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11710:14)\\n    at Object.withTopicForbiddingContext (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:10791:14)\\n    at Object.parseClassBody (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11687:10)\\n    at Object.parseClass (/Users/austincapaviella/Desktop/FEC/photos/node_modules/@babel/parser/lib/index.js:11661:22)\");\n\n//# sourceURL=webpack:///./client/index.jsx?");

/***/ })

/******/ });