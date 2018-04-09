(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Vue2CoverImage", [], factory);
	else if(typeof exports === 'object')
		exports["Vue2CoverImage"] = factory();
	else
		root["Vue2CoverImage"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Vue2CoverImage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import Vue2CoverImage from 'vue2-cover-image';
Vue.component('vue2-cover-image', { template: '<div>!</div>' });

/* harmony default export */ var Vue2CoverImage = ({
    props: ['src', 'multi', 'thumbnail', 'title', 'mode', 'preload', 'ui'],
    components: {
        //'vue2-cover-image': Vue2CoverImage,
    },
    created: function created() {},
    mounted: function mounted() {},
    methods: {
        onTime: function onTime() {
            this.position = this.$refs.audio.currentTime;
        },
        onData: function onData() {
            if (this.$refs.audio) {
                this.total = this.$refs.audio.duration;
                this.$emit('load');
            }
        },
        onPlay: function onPlay() {
            this.playing = true;
            this.$emit('play');
        },
        onPause: function onPause() {
            this.playing = false;
            this.$emit('pause');
        },
        onWait: function onWait() {
            this.waiting = true;
            this.$emit('buffer');
        },
        onAbort: function onAbort() {
            this.aborted = true;
            this.$emit('error');
            console.log("abort: ", 11);
        },
        onReady: function onReady() {
            this.waiting = this.aborted = false;
        },
        toggle: function toggle() {
            if (!this.playing) {
                if (!this.multi) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = document.getElementsByTagName('audio')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var a = _step.value;

                            a.pause();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                this.$refs.audio.play();
            } else {
                this.$refs.audio.pause();
            }
        },
        hms: function hms(secs) {
            var date = new Date(null);
            date.setSeconds(secs);
            return date.toISOString().substr(14, 5);
        }
    },
    data: function data() {
        return {
            total: 0,
            position: 0,
            audio: null,
            playing: false,
            loaded: false,
            waiting: false,
            aborted: false
        };
    },

    computed: {
        classes: function classes() {
            return this.ui ? this.ui.classes || {} : {};
        },
        icons: function icons() {
            return this.ui ? this.ui.icons || {} : {};
        },
        labels: function labels() {
            return this.ui ? this.ui.labels || {} : {};
        },
        pos: function pos() {
            return this.hms(this.position);
        },
        tots: function tots() {
            return this.hms(this.total);
        }
    },
    watch: {
        playing: function playing() {
            this.waiting = this.aborted = false;
        },
        position: function position(a, b) {
            this.waiting = this.aborted = false;

            if (Math.abs(a - b) > 1) {
                this.$refs.audio.currentTime = a;
            }
        },
        src: function src() {
            this.loaded = this.waiting = this.aborted = this.playing = false;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f397a9a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Vue2CoverImage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'inline-block': _vm.mode === 'mini'}},[(_vm.mode === 'mini')?_c('div',[(_vm.aborted)?_c('i',{staticClass:"fa fa-fw fa-warning text-danger",class:( _obj = {}, _obj[_vm.icons.size || 'fa-lg'] = true, _obj ),attrs:{"title":"Failed to load file"}}):(_vm.waiting)?_c('i',{staticClass:"fa fa-fw fa-spin fa-spinner",class:( _obj$1 = {}, _obj$1[_vm.icons.size || 'fa-lg'] = true, _obj$1 )}):_c('a',{class:( _obj$2 = {}, _obj$2[_vm.classes.btn] = true, _obj$2 ),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.toggle($event)}}},[(_vm.playing)?_c('span',[_c('i',{staticClass:"fa fa-fw",class:( _obj$3 = {}, _obj$3[_vm.icons.pause || 'fa-pause'] = true, _obj$3[_vm.icons.size || 'fa-lg'] = true, _obj$3 )}),_vm._v(" "+_vm._s(_vm.labels.pause))]):_c('span',[_c('i',{staticClass:"fa fa-fw",class:( _obj$4 = {}, _obj$4[_vm.icons.play || 'fa-play'] = true, _obj$4[_vm.icons.size || 'fa-lg'] = true, _obj$4 )}),_vm._v(" "+_vm._s(_vm.labels.play))])])]):_c('div',{staticClass:"flex-fit"},[(!!_vm.thumbnail)?_c('div',{staticClass:"thumb"},[_c('vue2-cover-image',{attrs:{"src":_vm.thumbnail,"height":"54px","width":"54px"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"song-title"},[(_vm.title)?_c('div',{staticStyle:{"margin":"0 0 10px"}},[_c('b',[_vm._v(_vm._s(_vm.title))])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex-fit"},[_c('span',[(_vm.aborted)?_c('i',{staticClass:"fa fa-fw fa-warning text-danger",class:( _obj$5 = {}, _obj$5[_vm.icons.size || 'fa-lg'] = true, _obj$5 ),attrs:{"title":"Failed to load file"}}):(_vm.waiting)?_c('i',{staticClass:"fa fa-fw fa-spin fa-spinner",class:( _obj$6 = {}, _obj$6[_vm.icons.size || 'fa-lg'] = true, _obj$6 )}):_c('a',{class:( _obj$7 = {}, _obj$7[_vm.classes.btn] = true, _obj$7 ),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.toggle($event)}}},[(_vm.playing)?_c('span',[_c('i',{staticClass:"fa fa-fw",class:( _obj$8 = {}, _obj$8[_vm.icons.pause || 'fa-pause'] = true, _obj$8[_vm.icons.size || 'fa-lg'] = true, _obj$8 )}),_vm._v(" "+_vm._s(_vm.labels.pause))]):_c('span',[_c('i',{staticClass:"fa fa-fw",class:( _obj$9 = {}, _obj$9[_vm.icons.play || 'fa-play'] = true, _obj$9[_vm.icons.size || 'fa-lg'] = true, _obj$9 )}),_vm._v(" "+_vm._s(_vm.labels.play))])])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.position),expression:"position"}],staticStyle:{"display":"inline-block"},attrs:{"type":"range","min":"0","max":_vm.total,"title":"track","step":"any","disabled":_vm.aborted},domProps:{"value":(_vm.position)},on:{"__r":function($event){_vm.position=$event.target.value}}}),_vm._v(" "),(_vm.total > 0)?_c('span',[_vm._v(_vm._s(_vm.pos)+" / "+_vm._s(_vm.tots))]):_vm._e()])])]),_vm._v(" "),_c('audio',{ref:"audio",attrs:{"src":_vm.src,"preload":_vm.preload || 'metadata',"autoplay":false},on:{"play":_vm.onPlay,"ended":_vm.onPause,"pause":_vm.onPause,"loadeddata":_vm.onData,"loadedmetadata":_vm.onData,"timeupdate":_vm.onTime,"waiting":_vm.onWait,"stalled":_vm.onWait,"canPlay":_vm.onReady,"error":_vm.onAbort}},[_vm._v("\n        Audio tag not supported\n    ")])])
var _obj;
var _obj$1;
var _obj$2;
var _obj$3;
var _obj$4;
var _obj$5;
var _obj$6;
var _obj$7;
var _obj$8;
var _obj$9;}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Vue2CoverImage.vue
function injectStyle (context) {
  __webpack_require__(1)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f397a9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  Vue2CoverImage,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Vue2CoverImage = (Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue2CoverImagePlugin", function() { return src_Vue2CoverImagePlugin; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Vue2CoverImage", function() { return components_Vue2CoverImage; });


var src_Vue2CoverImagePlugin = function Vue2CoverImagePlugin(Vue, params) {
    Vue.component('vue2-cover-image', components_Vue2CoverImage);
};

components_Vue2CoverImage.install = src_Vue2CoverImagePlugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (components_Vue2CoverImage);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("5c0c6afc", content, true, {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "div.flex-fit[data-v-2f397a9a]{display:flex;flex-direction:row;min-width:200px;align-items:center}div.flex-fit span[data-v-2f397a9a]{font-size:12px}input[type=range][data-v-2f397a9a]{flex:1;margin:0 10px;outline:none}.song-title[data-v-2f397a9a]{flex:1;margin-left:10px}input[type=range][data-v-2f397a9a]{-webkit-appearance:none;border:1px solid #fff;width:100%}input[type=range][data-v-2f397a9a]::-webkit-slider-runnable-track{width:100%;height:3px;background:#ddd;border:none;border-radius:3px}input[type=range][data-v-2f397a9a]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:12px;width:12px;border-radius:50%;background:maroon;margin-top:-4px;cursor:pointer}input[type=range][data-v-2f397a9a]:focus{outline:none}input[type=range][data-v-2f397a9a]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range][data-v-2f397a9a]::-moz-range-track{width:100%;height:3px;background:#ddd;border:none;border-radius:3px}input[type=range][data-v-2f397a9a]::-moz-range-thumb{border:none;height:12px;width:12px;border-radius:50%;background:maroon;cursor:pointer}input[type=range][data-v-2f397a9a]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input[type=range][data-v-2f397a9a]::-ms-track{width:100%;height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range][data-v-2f397a9a]::-ms-fill-lower{background:#777;border-radius:10px}input[type=range][data-v-2f397a9a]::-ms-fill-upper{background:#ddd;border-radius:10px}input[type=range][data-v-2f397a9a]::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#daa520}input[type=range][data-v-2f397a9a]:focus::-ms-fill-lower{background:#888}input[type=range][data-v-2f397a9a]:focus::-ms-fill-upper{background:#ccc}.inline-block[data-v-2f397a9a]{display:inline-block}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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


/***/ })
/******/ ]);
});