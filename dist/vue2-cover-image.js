(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2CoverImage"] = factory();
	else
		root["Vue2CoverImage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vue2CoverImage = __webpack_require__(7);
	
	var _Vue2CoverImage2 = _interopRequireDefault(_Vue2CoverImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vue2coverimage = { Vue2CoverImage: _Vue2CoverImage2.default };
	
	vue2coverimage.install = function (Vue) {
	    Vue.component('vue2-cover-image', _Vue2CoverImage2.default);
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(vue2coverimage);
	}
	
	exports.default = vue2coverimage;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = "data:image/gif;base64,R0lGODlhkAEsAfcAAKrV67TV5YTL7mW+6mrB7HvF6UKz7JvR7Ozt7iKd2trc3eTz+xql6jKt6/P09Eq167jW5tne4Ovs7KnK2lW5653V8D2x68Pj8ieq6zqi1azT593g4tbd4S6e1OXo6Wm02i2s67Pf9Eep2t3q8d7o7uPk5KbN4Z3M4xOj6uXq7NTg5pnE2ReZ2cne6eHp7eHm6Lbh94LB4s7d5dPT0/b5+pfI4sTT263b8t3i5Nvb29Xp84LH6enq6rHV6Far1ZrO6dPn8Gq64QuS1g2g6gmf6qPQ5tnh5tHc4unu8IK61tnk6lSz46LZ9czV2fv7+4fE5Hi52XS84NHg6NjY2N/g4MDe7nvA4tnn7uLs8dbm7tzc3OLi4sbh7u72+vH2+e/w8aHW8ff3+Aad6pTR76bS6LjP2dTW16LU7fj7/LzX5Oj0+pbN6EOu5H3I7cXd6dLl7t3l6YnA28jY4Q2b4src5sDZ5m/B6mS65cHV3+Tk5HbG7srk8Lnc7tXY2RWf5MXZ44fN8Mni7ufn57fS4Ofq68Ta5bXY6vX6/PH4/Eyw4rnZ6aDQ6avY7ujo6N3e39rv+iWk44zK6d3j5s7g6abW7r3a6Nnb3CCn6nTC6s3j7ZHO7WXB7tze3xyj5jKp5Ofs7rHZ7vj6+le56tzm7M7a4Nbb3err61i67MPc6dLf5r7f8IjJ6fL4+tHb4NLZ3Lve7y2l4jiv69Ti6LHY64zP79HX2szZ39/h4mq+6Vy76ur1/IvN79/w+U+47Nbc383c48Tf7FC26uXm5+74/OHj5HPE7Vu/8LXc8NnZ2Qaa4zms5tbf5Mja49Xt+ZDL6c/k79rf4pDG4Vq87Y/M64fK7JPM6JbP63DC61y148fc5uTl5i+q51+558rp+Mrg673c68Db6c3S1IzH5WG+7WC86urz+GG24Ljb63fD6tzd3bPb7/v8/fn5+cHY423E7+73+xWh5jen3r/O1dPj64DK75/T7SCn68vo9luv2XDA5+fx9ku58OHh4a/Q4Ue06v///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NjA2M0E3Q0NEMjBFMTExQjU1NkVCRjI0MTdENEI3MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MDFFNTkyQTJENzkxMUUxQUIyRURDNjY3OEU0MDU5NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDFFNTkyOTJENzkxMUUxQUIyRURDNjY3OEU0MDU5NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjY0M0ZBMDU0MjJFMTExOTg3RjlDNzkwRTY2MTU1OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NjA2M0E3Q0NEMjBFMTExQjU1NkVCRjI0MTdENEI3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1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"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _youtubeThumbnail = __webpack_require__(13);
	
	var _youtubeThumbnail2 = _interopRequireDefault(_youtubeThumbnail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['src', 'width', 'height', 'caption', 'size'],
	    watch: {
	        src: {
	            immediate: true,
	            handler: function handler() {
	                var _this = this;
	
	                setTimeout(function () {
	                    return _this.load();
	                }, 0);
	            }
	        }
	    },
	    methods: {
	        load: function load() {
	            var _this2 = this;
	
	            var img = new Image();
	            img.src = /youtube\.com/i.test(this.src) ? (0, _youtubeThumbnail2.default)(this.src).high.url : this.src;
	            img.onload = function () {
	                return _this2.path = img.src;
	            };
	            img.onerror = function () {
	                return _this2.path = _this2.error;
	            };
	            this.path = this.loading;
	        },
	        text: function text(txt) {
	            var d = document.createElement('div');
	            d.innerHTML = txt;
	            return d.textContent;
	        }
	    },
	    data: function data() {
	        return {
	            path: __webpack_require__(1),
	            error: __webpack_require__(6),
	            loading: __webpack_require__(1)
	        };
	    }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".bg-image[data-v-7b1f25e1]{position:relative;display:inline-block;background-size:cover;background-repeat:no-repeat;background-position:50%}.bg-image .translucent[data-v-7b1f25e1]{background:rgba(0,0,0,.4);color:#fff}.bg-image .blurb[data-v-7b1f25e1]{position:absolute;left:0;right:0;bottom:0;white-space:nowrap;overflow:hidden;text-align:center;text-overflow:ellipsis}", ""]);
	
	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	
	(function (root, factory) {
	  if (true) {
	    module.exports = factory();
	  } else if (typeof define === 'function' && define.amd) {
	    define(factory);
	  } else {
	    root.getYouTubeID = factory();
	  }
	}(this, function (exports) {
	
	  return function (url) {
	    if (/youtu\.?be/.test(url)) {
	
	      // Look first for known patterns
	      var i;
	      var patterns = [
	        /youtu\.be\/([^#\&\?]{11})/,  // youtu.be/<id>
	        /\?v=([^#\&\?]{11})/,         // ?v=<id>
	        /\&v=([^#\&\?]{11})/,         // &v=<id>
	        /embed\/([^#\&\?]{11})/,      // embed/<id>
	        /\/v\/([^#\&\?]{11})/         // /v/<id>
	      ];
	
	      // If any pattern matches, return the ID
	      for (i = 0; i < patterns.length; ++i) {
	        if (patterns[i].test(url)) {
	          return patterns[i].exec(url)[1];
	        }
	      }
	
	      // If that fails, break it apart by certain characters and look 
	      // for the 11 character key
	      var tokens = url.split(/[\/\&\?=#\.\s]/g);
	      for (i = 0; i < tokens.length; ++i) {
	        if (/^[^#\&\?]{11}$/.test(tokens[i])) {
	          return tokens[i];
	        }
	      }
	    }
	
	    return null;
	  };
	
	}));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAADVCAIAAAC+DC5wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzM0ODJCRkNFMjA2ODExODk2RTkyQTZDOUM2QThFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyN0Y2QzE4QzgyMjExMUUzQTA4NEU2Qzc4Qzc3QURDNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyN0Y2QzE4QjgyMjExMUUzQTA4NEU2Qzc4Qzc3QURDNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOEVDMzM0MjcyMDY4MTFCOEFFRTA4RkI1QzRCRUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzQ4MkJGQ0UyMDY4MTE4OTZFOTJBNkM5QzZBOEU2Ii8+IDwvcmRmOkRlc2NyaXB0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"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)
	
	var Component = __webpack_require__(8)(
	  /* script */
	  __webpack_require__(2),
	  /* template */
	  __webpack_require__(9),
	  /* scopeId */
	  "data-v-7b1f25e1",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "bg-image",
	    style: ({
	      width: _vm.width || '150px',
	      height: _vm.height || '150px',
	      'background-image': 'url(' + _vm.path + ')',
	      'background-size': _vm.size || 'cover'
	    })
	  }, [_c('div', {
	    staticClass: "blurb"
	  }, [_vm._t("default", [(_vm.caption) ? _c('div', {
	    staticClass: "translucent",
	    attrs: {
	      "title": _vm.text(_vm.caption)
	    },
	    domProps: {
	      "textContent": _vm._s(_vm.caption)
	    }
	  }) : _vm._e()])], 2)])
	},staticRenderFns: []}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(11)("c7405908", content, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(12)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	
	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  update(obj)
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getYouTubeID = __webpack_require__(5);
	
	module.exports = function(url){
	  var id = getYouTubeID(url);
	
	  if(!id && url.length === 11){
	    id = url
	  }
	
	  return {
	    'default': {
	      url: 'http://img.youtube.com/vi/' + id + '/default.jpg',
	      width: 120,
	      height: 90
	    },
	    medium: {
	      url: 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg',
	      width: 320,
	      height: 180
	    },
	    high: {
	      url: 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg',
	      width: 480,
	      height: 360
	    },
	  }
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue2-cover-image.js.map