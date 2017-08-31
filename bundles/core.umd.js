(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/Observable"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/Observable", "rxjs/add/observable/of", "rxjs/add/operator/concat", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/switchMap", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["ngx-translate-core"] = factory(require("@angular/core"), require("rxjs/Observable"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["ngx-translate-core"] = factory(root["@angular/core"], root["rxjs/Observable"], root["rxjs/add/observable/of"], root["rxjs/add/operator/concat"], root["rxjs/add/operator/map"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/switchMap"], root["rxjs/add/operator/take"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(10);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(16);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(17);
__webpack_require__(19);
__webpack_require__(18);
var translate_store_1 = __webpack_require__(9);
var translate_loader_1 = __webpack_require__(4);
var translate_compiler_1 = __webpack_require__(3);
var missing_translation_handler_1 = __webpack_require__(2);
var translate_parser_1 = __webpack_require__(5);
var util_1 = __webpack_require__(6);
exports.USE_STORE = new core_1.OpaqueToken('USE_STORE');
exports.USE_DEFAULT_LANG = new core_1.OpaqueToken('USE_DEFAULT_LANG');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     */
    function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang, isolate) {
        if (useDefaultLang === void 0) { useDefaultLang = true; }
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new core_1.EventEmitter();
        this._onLangChange = new core_1.EventEmitter();
        this._onDefaultLangChange = new core_1.EventEmitter();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Observable_1.Observable.of(this.translations[lang]);
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return Observable_1.Observable.of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = _this.compiler.compileTranslations(res, lang);
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        translations = this.compiler.compileTranslations(translations, lang);
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = util_1.mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : Observable_1.Observable.of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!util_1.isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return Observable_1.Observable.create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Observable_1.Observable.of(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param key
     * @param interpolateParams
     * @returns {any} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = function (key, interpolateParams) {
        var _this = this;
        if (!util_1.isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return this
            .get(key, interpolateParams)
            .concat(this.onLangChange.switchMap(function (event) {
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return Observable_1.Observable.of(res);
            }
        }));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!util_1.isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key, after compiling it
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    return TranslateService;
}());
TranslateService = __decorate([
    core_1.Injectable(),
    __param(5, core_1.Inject(exports.USE_DEFAULT_LANG)),
    __param(6, core_1.Inject(exports.USE_STORE)),
    __metadata("design:paramtypes", [translate_store_1.TranslateStore,
        translate_loader_1.TranslateLoader,
        translate_compiler_1.TranslateCompiler,
        translate_parser_1.TranslateParser,
        missing_translation_handler_1.MissingTranslationHandler, Boolean, Boolean])
], TranslateService);
exports.TranslateService = TranslateService;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
exports.MissingTranslationHandler = MissingTranslationHandler;
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return FakeMissingTranslationHandler;
}());
FakeMissingTranslationHandler = __decorate([
    core_1.Injectable()
], FakeMissingTranslationHandler);
exports.FakeMissingTranslationHandler = FakeMissingTranslationHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TranslateCompiler = (function () {
    function TranslateCompiler() {
    }
    return TranslateCompiler;
}());
exports.TranslateCompiler = TranslateCompiler;
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
var TranslateFakeCompiler = (function (_super) {
    __extends(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeCompiler.prototype.compile = function (value, lang) {
        return value;
    };
    TranslateFakeCompiler.prototype.compileTranslations = function (translations, lang) {
        return translations;
    };
    return TranslateFakeCompiler;
}(TranslateCompiler));
TranslateFakeCompiler = __decorate([
    core_1.Injectable()
], TranslateFakeCompiler);
exports.TranslateFakeCompiler = TranslateFakeCompiler;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(10);
var core_1 = __webpack_require__(0);
var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
exports.TranslateLoader = TranslateLoader;
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return Observable_1.Observable.of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));
TranslateFakeLoader = __decorate([
    core_1.Injectable()
], TranslateFakeLoader);
exports.TranslateFakeLoader = TranslateFakeLoader;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var util_1 = __webpack_require__(6);
var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
exports.TranslateParser = TranslateParser;
var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = expr;
        }
        return result;
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (util_1.isDefined(target) && util_1.isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    TranslateDefaultParser.prototype.interpolateFunction = function (fn, params) {
        return fn(params);
    };
    TranslateDefaultParser.prototype.interpolateString = function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return util_1.isDefined(r) ? r : substring;
        });
    };
    return TranslateDefaultParser;
}(TranslateParser));
TranslateDefaultParser = __decorate([
    core_1.Injectable()
], TranslateDefaultParser);
exports.TranslateDefaultParser = TranslateDefaultParser;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
exports.equals = equals;
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
exports.isDefined = isDefined;
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
exports.isObject = isObject;
function mergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}
exports.mergeDeep = mergeDeep;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var util_1 = __webpack_require__(6);
var translate_service_1 = __webpack_require__(1);
var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (!util_1.equals(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = util_1.isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (util_1.isDefined(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.getContent = function (node) {
        return util_1.isDefined(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (util_1.isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    return TranslateDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TranslateDirective.prototype, "translate", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TranslateDirective.prototype, "translateParams", null);
TranslateDirective = __decorate([
    core_1.Directive({
        selector: '[translate],[ngx-translate]'
    }),
    __metadata("design:paramtypes", [translate_service_1.TranslateService, core_1.ElementRef, core_1.ChangeDetectorRef])
], TranslateDirective);
exports.TranslateDirective = TranslateDirective;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var translate_service_1 = __webpack_require__(1);
var util_1 = __webpack_require__(6);
var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (util_1.equals(query, this.lastKey) && util_1.equals(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (util_1.isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    core_1.Injectable(),
    core_1.Pipe({
        name: 'translate',
        pure: false // required to update the value when the promise is resolved
    }),
    __metadata("design:paramtypes", [translate_service_1.TranslateService, core_1.ChangeDetectorRef])
], TranslatePipe);
exports.TranslatePipe = TranslatePipe;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new core_1.EventEmitter();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new core_1.EventEmitter();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new core_1.EventEmitter();
    }
    return TranslateStore;
}());
exports.TranslateStore = TranslateStore;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var translate_loader_1 = __webpack_require__(4);
var translate_service_1 = __webpack_require__(1);
var missing_translation_handler_1 = __webpack_require__(2);
var translate_parser_1 = __webpack_require__(5);
var translate_compiler_1 = __webpack_require__(3);
var translate_directive_1 = __webpack_require__(7);
var translate_pipe_1 = __webpack_require__(8);
var translate_store_1 = __webpack_require__(9);
var translate_service_2 = __webpack_require__(1);
var translate_service_3 = __webpack_require__(1);
__export(__webpack_require__(4));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(5));
__export(__webpack_require__(3));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
var TranslateModule = TranslateModule_1 = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule_1,
            providers: [
                config.loader || { provide: translate_loader_1.TranslateLoader, useClass: translate_loader_1.TranslateFakeLoader },
                config.compiler || { provide: translate_compiler_1.TranslateCompiler, useClass: translate_compiler_1.TranslateFakeCompiler },
                config.parser || { provide: translate_parser_1.TranslateParser, useClass: translate_parser_1.TranslateDefaultParser },
                config.missingTranslationHandler || { provide: missing_translation_handler_1.MissingTranslationHandler, useClass: missing_translation_handler_1.FakeMissingTranslationHandler },
                translate_store_1.TranslateStore,
                { provide: translate_service_2.USE_STORE, useValue: config.isolate },
                { provide: translate_service_3.USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                translate_service_1.TranslateService
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule_1,
            providers: [
                config.loader || { provide: translate_loader_1.TranslateLoader, useClass: translate_loader_1.TranslateFakeLoader },
                config.compiler || { provide: translate_compiler_1.TranslateCompiler, useClass: translate_compiler_1.TranslateFakeCompiler },
                config.parser || { provide: translate_parser_1.TranslateParser, useClass: translate_parser_1.TranslateDefaultParser },
                config.missingTranslationHandler || { provide: missing_translation_handler_1.MissingTranslationHandler, useClass: missing_translation_handler_1.FakeMissingTranslationHandler },
                { provide: translate_service_2.USE_STORE, useValue: config.isolate },
                { provide: translate_service_3.USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                translate_service_1.TranslateService
            ]
        };
    };
    return TranslateModule;
}());
TranslateModule = TranslateModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            translate_pipe_1.TranslatePipe,
            translate_directive_1.TranslateDirective
        ],
        exports: [
            translate_pipe_1.TranslatePipe,
            translate_directive_1.TranslateDirective
        ]
    })
], TranslateModule);
exports.TranslateModule = TranslateModule;
var TranslateModule_1;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YWE3MGU0ZGE2OWUwOTkwYTlhMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zbGF0ZS5jb21waWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRlLmxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRlLnBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zbGF0ZS5zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0NBQTRFO0FBQzVFLDJDQUEyQztBQUUzQyx3QkFBZ0M7QUFDaEMsd0JBQWtDO0FBQ2xDLHdCQUFpQztBQUNqQyx3QkFBK0I7QUFDL0Isd0JBQWlDO0FBQ2pDLHdCQUFxQztBQUNyQyx3QkFBbUM7QUFDbkMsd0JBQWdDO0FBRWhDLCtDQUFpRDtBQUNqRCxnREFBbUQ7QUFDbkQsa0RBQXVEO0FBQ3ZELDJEQUF5RztBQUN6RyxnREFBbUQ7QUFDbkQsb0NBQTRDO0FBRS9CLGlCQUFTLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLHdCQUFnQixHQUFHLElBQUksa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBdUJwRSxJQUFhLGdCQUFnQjtJQTRHekI7Ozs7Ozs7OztPQVNHO0lBQ0gsMEJBQW1CLEtB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O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiY29yZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwicnhqcy9PYnNlcnZhYmxlXCIsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiLCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtdHJhbnNsYXRlLWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LXRyYW5zbGF0ZS1jb3JlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcInJ4anMvT2JzZXJ2YWJsZVwiXSwgcm9vdFtcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZhYTcwZTRkYTY5ZTA5OTBhOWEwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPcGFxdWVUb2tlbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCI7XHJcblxyXG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi90cmFuc2xhdGUuc3RvcmVcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXJ9IGZyb20gXCIuL3RyYW5zbGF0ZS5sb2FkZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVDb21waWxlcn0gZnJvbSBcIi4vdHJhbnNsYXRlLmNvbXBpbGVyXCI7XHJcbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtc30gZnJvbSBcIi4vbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGFyc2VyfSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XHJcbmltcG9ydCB7bWVyZ2VEZWVwLCBpc0RlZmluZWR9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VfU1RPUkUgPSBuZXcgT3BhcXVlVG9rZW4oJ1VTRV9TVE9SRScpO1xyXG5leHBvcnQgY29uc3QgVVNFX0RFRkFVTFRfTEFORyA9IG5ldyBPcGFxdWVUb2tlbignVVNFX0RFRkFVTFRfTEFORycpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50IHtcclxuICAgIHRyYW5zbGF0aW9uczogYW55O1xyXG4gICAgbGFuZzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmdDaGFuZ2VFdmVudCB7XHJcbiAgICBsYW5nOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbnM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50IHtcclxuICAgIGxhbmc6IHN0cmluZztcclxuICAgIHRyYW5zbGF0aW9uczogYW55O1xyXG59XHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgbmF2aWdhdG9yOiBhbnk7XHJcbn1cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2FkaW5nVHJhbnNsYXRpb25zOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwcml2YXRlIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcclxuICAgIHByaXZhdGUgX29uTGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4oKTtcclxuICAgIHByaXZhdGUgX29uRGVmYXVsdExhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4oKTtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRMYW5nOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50TGFuZzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbGFuZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgX3RyYW5zbGF0aW9uczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF90cmFuc2xhdGlvblJlcXVlc3RzOiBhbnkgID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcclxuICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cclxuICAgICAqL1xyXG4gICAgZ2V0IG9uVHJhbnNsYXRpb25DaGFuZ2UoKTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25UcmFuc2xhdGlvbkNoYW5nZSA6IHRoaXMuc3RvcmUub25UcmFuc2xhdGlvbkNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXHJcbiAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD59XHJcbiAgICAgKi9cclxuICAgIGdldCBvbkxhbmdDaGFuZ2UoKTogRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9vbkxhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uTGFuZ0NoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcclxuICAgICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50Pn1cclxuICAgICAqL1xyXG4gICAgZ2V0IG9uRGVmYXVsdExhbmdDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uRGVmYXVsdExhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uRGVmYXVsdExhbmdDaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBsYW5nIHRvIGZhbGxiYWNrIHdoZW4gdHJhbnNsYXRpb25zIGFyZSBtaXNzaW5nIG9uIHRoZSBjdXJyZW50IGxhbmdcclxuICAgICAqL1xyXG4gICAgZ2V0IGRlZmF1bHRMYW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2RlZmF1bHRMYW5nIDogdGhpcy5zdG9yZS5kZWZhdWx0TGFuZztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGVmYXVsdExhbmcoZGVmYXVsdExhbmc6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2N1cnJlbnRMYW5nIDogdGhpcy5zdG9yZS5jdXJyZW50TGFuZztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY3VycmVudExhbmcoY3VycmVudExhbmc6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY3VycmVudExhbmcgPSBjdXJyZW50TGFuZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBnZXQgbGFuZ3MoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxhbmdzKGxhbmdzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYW5ncyA9IGxhbmdzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUubGFuZ3MgPSBsYW5ncztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXHJcbiAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgKi9cclxuICAgIGdldCB0cmFuc2xhdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fdHJhbnNsYXRpb25zIDogdGhpcy5zdG9yZS50cmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHN0b3JlIGFuIGluc3RhbmNlIG9mIHRoZSBzdG9yZSAodGhhdCBpcyBzdXBwb3NlZCB0byBiZSB1bmlxdWUpXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXHJcbiAgICAgKiBAcGFyYW0gY29tcGlsZXIgQW4gaW5zdGFuY2Ugb2YgdGhlIGNvbXBpbGVyIGN1cnJlbnRseSB1c2VkXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VyIEFuIGluc3RhbmNlIG9mIHRoZSBwYXJzZXIgY3VycmVudGx5IHVzZWRcclxuICAgICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gaXNvbGF0ZSB3aGV0aGVyIHRoaXMgc2VydmljZSBzaG91bGQgdXNlIHRoZSBzdG9yZSBvciBub3RcclxuICAgICAqIEBwYXJhbSB1c2VEZWZhdWx0TGFuZyB3aGV0aGVyIHdlIHNob3VsZCB1c2UgZGVmYXVsdCBsYW5ndWFnZSB0cmFuc2xhdGlvbiB3aGVuIGN1cnJlbnQgbGFuZ3VhZ2UgdHJhbnNsYXRpb24gaXMgbWlzc2luZy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0b3JlOiBUcmFuc2xhdGVTdG9yZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjdXJyZW50TG9hZGVyOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY29tcGlsZXI6IFRyYW5zbGF0ZUNvbXBpbGVyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHBhcnNlcjogVHJhbnNsYXRlUGFyc2VyLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KFVTRV9ERUZBVUxUX0xBTkcpIHByaXZhdGUgdXNlRGVmYXVsdExhbmc6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChVU0VfU1RPUkUpIHByaXZhdGUgaXNvbGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gbGFuZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYobGFuZyA9PT0gdGhpcy5kZWZhdWx0TGFuZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGVuZGluZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGRlZmF1bHRMYW5nIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmRlZmF1bHRMYW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRMYW5nID0gbGFuZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGVuZGluZy50YWtlKDEpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVmYXVsdExhbmcobGFuZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBsYW5ndWFnZVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdXNlZFxyXG4gICAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyB0aGUgbGFuZyBjdXJyZW50bHkgdXNlZFxyXG4gICAgICogQHBhcmFtIGxhbmdcclxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gZG9uJ3QgY2hhbmdlIHRoZSBsYW5ndWFnZSBpZiB0aGUgbGFuZ3VhZ2UgZ2l2ZW4gaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgICAgIGlmKGxhbmcgPT09IHRoaXMuY3VycmVudExhbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGVuZGluZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGN1cnJlbnRMYW5nIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmN1cnJlbnRMYW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gbGFuZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGVuZGluZy50YWtlKDEpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTGFuZyhsYW5nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmc7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gd2UgaGF2ZSB0aGlzIGxhbmd1YWdlLCByZXR1cm4gYW4gT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxhbmcobGFuZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcclxuICAgICAqIEBwYXJhbSBsYW5nXHJcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwqPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBwZW5kaW5nOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgICAgIC8vIGlmIHRoaXMgbGFuZ3VhZ2UgaXMgdW5hdmFpbGFibGUsIGFzayBmb3IgaXRcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ10gfHwgdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5nKTtcclxuICAgICAgICAgICAgcGVuZGluZyA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGVuZGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZSB3aXRoIHRoZSBjdXJyZW50IGxvYWRlclxyXG4gICAgICogYW5kIHBhc3NlcyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxyXG4gICAgICogQHBhcmFtIGxhbmdcclxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5zaGFyZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMudGFrZSgxKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGVUcmFuc2xhdGlvbnMocmVzLCBsYW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbnVhbGx5IHNldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZVxyXG4gICAgICogYWZ0ZXIgcGFzc2luZyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxyXG4gICAgICogQHBhcmFtIGxhbmdcclxuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnNcclxuICAgICAqIEBwYXJhbSBzaG91bGRNZXJnZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nLCB0cmFuc2xhdGlvbnM6IE9iamVjdCwgc2hvdWxkTWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIHRyYW5zbGF0aW9ucyA9IHRoaXMuY29tcGlsZXIuY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnMsIGxhbmcpO1xyXG4gICAgICAgIGlmKHNob3VsZE1lcmdlICYmIHRoaXMudHJhbnNsYXRpb25zW2xhbmddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gbWVyZ2VEZWVwKHRoaXMudHJhbnNsYXRpb25zW2xhbmddLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XHJcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBsYW5nc1xyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExhbmdzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGxhbmdzXHJcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRMYW5ncyhsYW5nczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIGxhbmdzLmZvckVhY2goKGxhbmc6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmdzLnB1c2gobGFuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3NcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVMYW5ncygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZExhbmdzKE9iamVjdC5rZXlzKHRoaXMudHJhbnNsYXRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcclxuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnNcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnM6IGFueSwga2V5OiBhbnksIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogYW55IHtcclxuICAgICAgICBsZXQgcmVzOiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gICAgICAgIGlmKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKGxldCBrIG9mIGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2tdID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgcmVzdWx0W2tdLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG9ic2VydmFibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVyZ2VkT2JzOiBhbnk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgb2Yga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9icyA9IHR5cGVvZiByZXN1bHRba10uc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHRba10gOiBPYnNlcnZhYmxlLm9mKHJlc3VsdFtrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIG1lcmdlZE9icyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRPYnMgPSBvYnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkT2JzID0gbWVyZ2VkT2JzLm1lcmdlKG9icyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE9icy50b0FycmF5KCkubWFwKChhcnI6IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5W2luZGV4XV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0cmFuc2xhdGlvbnMsIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5kZWZhdWx0TGFuZyAmJiB0aGlzLmRlZmF1bHRMYW5nICE9PSB0aGlzLmN1cnJlbnRMYW5nICYmIHRoaXMudXNlRGVmYXVsdExhbmcpIHtcclxuICAgICAgICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ10sIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyA9IHtrZXksIHRyYW5zbGF0ZVNlcnZpY2U6IHRoaXN9O1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgaW50ZXJwb2xhdGVQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMgPSB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuaGFuZGxlKHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcyA6IGtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHthbnl9IHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgICAgIGlmKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcImtleVwiIHJlcXVpcmVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBsb2FkaW5nIGEgbmV3IHRyYW5zbGF0aW9uIHRvIHVzZVxyXG4gICAgICAgIGlmKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25Db21wbGV0ZSA9IChyZXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBvbkVycm9yID0gKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHJlcywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uQ29tcGxldGUsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHRyYW5zbGF0ZWQgdmFsdWVzIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKSB3aGljaCB1cGRhdGVzXHJcbiAgICAgKiB3aGVuZXZlciB0aGUgbGFuZ3VhZ2UgY2hhbmdlcy5cclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xyXG4gICAgICogQHJldHVybnMge2FueX0gQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJlYW0oa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PiB7XHJcbiAgICAgICAgaWYoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgIC5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcylcclxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLm9uTGFuZ0NoYW5nZS5zd2l0Y2hNYXAoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KGV2ZW50LnRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXHJcbiAgICAgKiBBbGwgcnVsZXMgcmVnYXJkaW5nIHRoZSBjdXJyZW50IGxhbmd1YWdlLCB0aGUgcHJlZmVycmVkIGxhbmd1YWdlIG9mIGV2ZW4gZmFsbGJhY2sgbGFuZ3VhZ2VzIHdpbGwgYmUgdXNlZCBleGNlcHQgYW55IHByb21pc2UgaGFuZGxpbmcuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBzdHJpbmcgfCBhbnkge1xyXG4gICAgICAgIGlmKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcImtleVwiIHJlcXVpcmVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gICAgICAgIGlmKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleVtpbmRleF1dID0ga2V5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleSwgYWZ0ZXIgY29tcGlsaW5nIGl0XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSBsYW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVtrZXldID0gdGhpcy5jb21waWxlci5jb21waWxlKHZhbHVlLCBsYW5nKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XHJcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xyXG4gICAgICogQHBhcmFtIGxhbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VMYW5nKGxhbmc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgICAgIHRoaXMub25MYW5nQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZGVmYXVsdCBsYW5nLCB1c2UgdGhlIG9uZSB0aGF0IHdlIGp1c3Qgc2V0XHJcbiAgICAgICAgaWYoIXRoaXMuZGVmYXVsdExhbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIHRoZSBkZWZhdWx0IGxhbmdcclxuICAgICAqIEBwYXJhbSBsYW5nXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlRGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XHJcbiAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gbGFuZ1xyXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbG9hZExhbmcobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB0aGlzLnJlc2V0TGFuZyhsYW5nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgaW5uZXIgdHJhbnNsYXRpb25cclxuICAgICAqIEBwYXJhbSBsYW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXNldExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBicm93c2VyTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XHJcbiAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZyB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlO1xyXG5cclxuICAgICAgICBpZihicm93c2VyTGFuZy5pbmRleE9mKCctJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGJyb3dzZXJMYW5nLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnXycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJMYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY3VsdHVyZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlLURFXCJcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJyb3dzZXJDdWx0dXJlTGFuZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJyb3dzZXJDdWx0dXJlTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XHJcbiAgICAgICAgYnJvd3NlckN1bHR1cmVMYW5nID0gYnJvd3NlckN1bHR1cmVMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmc7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUga2V5IHRoYXQncyBtaXNzaW5nIGluIHRyYW5zbGF0aW9uIGZpbGVzXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAga2V5OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhbiBpbnN0YW5jZSBvZiB0aGUgc2VydmljZSB0aGF0IHdhcyB1bmFibGUgdG8gdHJhbnNsYXRlIHRoZSBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1RyYW5zbGF0ZVNlcnZpY2V9XHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnRlcnBvbGF0aW9uIHBhcmFtcyB0aGF0IHdlcmUgcGFzc2VkIGFsb25nIGZvciB0cmFuc2xhdGluZyB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIHtNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zfSBwYXJhbXMgY29udGV4dCBmb3IgcmVzb2x2aW5nIGEgbWlzc2luZyB0cmFuc2xhdGlvblxyXG4gICAgICogQHJldHVybnMge2FueX0gYSB2YWx1ZSBvciBhbiBvYnNlcnZhYmxlXHJcbiAgICAgKiBJZiBpdCByZXR1cm5zIGEgdmFsdWUsIHRoZW4gdGhpcyB2YWx1ZSBpcyB1c2VkLlxyXG4gICAgICogSWYgaXQgcmV0dXJuIGFuIG9ic2VydmFibGUsIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGlzIG9ic2VydmFibGUgd2lsbCBiZSB1c2VkIChleGNlcHQgaWYgdGhlIG1ldGhvZCB3YXMgXCJpbnN0YW50XCIpLlxyXG4gICAgICogSWYgaXQgZG9lc24ndCByZXR1cm4gdGhlbiB0aGUga2V5IHdpbGwgYmUgdXNlZCBhcyBhIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGhhbmRsZShwYXJhbXM6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMpOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGhhbmRsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgbWlzc2luZyB0cmFuc2xhdGlvbiBoYW5kbGVyIGF0IGFsbFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcclxuICAgIGhhbmRsZShwYXJhbXM6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwYXJhbXMua2V5O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlQ29tcGlsZXIge1xyXG4gICAgYWJzdHJhY3QgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBzdHJpbmcgfCBGdW5jdGlvbjtcclxuICAgIGFic3RyYWN0IGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlQ29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XHJcbiAgICBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSwgbGFuZzogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90cmFuc2xhdGUuY29tcGlsZXIudHMiLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYW5zbGF0ZUxvYWRlciB7XHJcbiAgICBhYnN0cmFjdCBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGxvYWRlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBsb2FkZXIgYXQgYWxsXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlTG9hZGVyIGV4dGVuZHMgVHJhbnNsYXRlTG9hZGVyIHtcclxuICAgIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2Yoe30pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90cmFuc2xhdGUubG9hZGVyLnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYW5zbGF0ZVBhcnNlciB7XHJcbiAgICAvKipcclxuICAgICAqIEludGVycG9sYXRlcyBhIHN0cmluZyB0byByZXBsYWNlIHBhcmFtZXRlcnNcclxuICAgICAqIFwiVGhpcyBpcyBhIHt7IGtleSB9fVwiID09PiBcIlRoaXMgaXMgYSB2YWx1ZVwiLCB3aXRoIHBhcmFtcyA9IHsga2V5OiBcInZhbHVlXCIgfVxyXG4gICAgICogQHBhcmFtIGV4cHJcclxuICAgICAqIEBwYXJhbSBwYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGludGVycG9sYXRlKGV4cHI6IHN0cmluZyB8IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgdmFsdWUgZnJvbSBhbiBvYmplY3QgYnkgY29tcG9zZWQga2V5XHJcbiAgICAgKiBwYXJzZXIuZ2V0VmFsdWUoeyBrZXkxOiB7IGtleUE6ICd2YWx1ZUknIH19LCAna2V5MS5rZXlBJykgPT0+ICd2YWx1ZUknXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRWYWx1ZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnlcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGVmYXVsdFBhcnNlciBleHRlbmRzIFRyYW5zbGF0ZVBhcnNlciB7XHJcbiAgICB0ZW1wbGF0ZU1hdGNoZXI6IFJlZ0V4cCA9IC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xyXG5cclxuICAgIHB1YmxpYyBpbnRlcnBvbGF0ZShleHByOiBzdHJpbmcgfCBGdW5jdGlvbiwgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBleHByID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmludGVycG9sYXRlU3RyaW5nKGV4cHIsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBleHByID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLmludGVycG9sYXRlRnVuY3Rpb24oZXhwciwgcGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYW4gdW5yZWxhdGVkIFRyYW5zbGF0ZVNlcnZpY2UgdGVzdCBkZXBlbmRzIG9uIGl0XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGV4cHIgYXMgc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgICAgICAga2V5ID0gJyc7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBrZXkgKz0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZihpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgICAgICAgICAga2V5ID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigha2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtleSArPSAnLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlKGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGVycG9sYXRlRnVuY3Rpb24oZm46IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gZm4ocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGVycG9sYXRlU3RyaW5nKGV4cHI6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCAoc3Vic3RyaW5nOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMuZ2V0VmFsdWUocGFyYW1zLCBiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChyKSA/IHIgOiBzdWJzdHJpbmc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RyYW5zbGF0ZS5wYXJzZXIudHMiLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4vKipcclxuICogQG5hbWUgZXF1YWxzXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBEZXRlcm1pbmVzIGlmIHR3byBvYmplY3RzIG9yIHR3byB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQuXHJcbiAqXHJcbiAqIFR3byBvYmplY3RzIG9yIHZhbHVlcyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50IGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XHJcbiAqXHJcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXHJcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBhcmUgb2YgdGhlIHNhbWUgdHlwZSBhbmQgYWxsIG9mIHRoZWlyIHByb3BlcnRpZXMgYXJlIGVxdWFsIGJ5XHJcbiAqICAgY29tcGFyaW5nIHRoZW0gd2l0aCBgZXF1YWxzYC5cclxuICpcclxuICogQHBhcmFtIHsqfSBvMSBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHsqfSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG8xID09PSBvMikgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChvMSAhPT0gbzEgJiYgbzIgIT09IG8yKSByZXR1cm4gdHJ1ZTsgLy8gTmFOID09PSBOYU5cclxuICAgIGxldCB0MSA9IHR5cGVvZiBvMSwgdDIgPSB0eXBlb2YgbzIsIGxlbmd0aDogbnVtYmVyLCBrZXk6IGFueSwga2V5U2V0OiBhbnk7XHJcbiAgICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvMSkpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8yKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9IG8xLmxlbmd0aCkgPT0gbzIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVxdWFscyhvMVtrZXldLCBvMltrZXldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvMikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXlTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gbzIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvMltrZXldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBhbnksIHNvdXJjZTogYW55KTogYW55IHtcclxuICAgIHRhcmdldCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGFyZ2V0KSk7XHJcbiAgICBzb3VyY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xyXG4gICAgbGV0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XHJcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdXRpbC50cyIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdDaGVja2VkLCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7ZXF1YWxzLCBpc0RlZmluZWR9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50fSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUcmFuc2xhdGlvbkNoYW5nZUV2ZW50fSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnR9IGZyb20gXCIuL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3RyYW5zbGF0ZV0sW25neC10cmFuc2xhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgbGFzdFBhcmFtczogYW55O1xyXG4gICAgY3VycmVudFBhcmFtczogYW55O1xyXG4gICAgb25MYW5nQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBvbkRlZmF1bHRMYW5nQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBvblRyYW5zbGF0aW9uQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRyYW5zbGF0ZShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja05vZGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0cmFuc2xhdGVQYXJhbXMocGFyYW1zOiBhbnkpIHtcclxuICAgICAgICBpZighZXF1YWxzKHRoaXMuY3VycmVudFBhcmFtcywgcGFyYW1zKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIG9mIHRoZSBjdXJyZW50IGxhbmcgY2hhbmdlXHJcbiAgICAgICAgaWYoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xyXG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5sYW5nID09PSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXModHJ1ZSwgZXZlbnQudHJhbnNsYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXHJcbiAgICAgICAgaWYoIXRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkRlZmF1bHRMYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlIGNoYW5nZXNcclxuICAgICAgICBpZighdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1YiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja05vZGVzKGZvcmNlVXBkYXRlID0gZmFsc2UsIHRyYW5zbGF0aW9ucz86IGFueSkge1xyXG4gICAgICAgIGxldCBub2RlczogTm9kZUxpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5XHJcbiAgICAgICAgaWYoIW5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyB3ZSBhZGQgdGhlIGtleSBhcyBjb250ZW50XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5rZXkpO1xyXG4gICAgICAgICAgICBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogYW55ID0gbm9kZXNbaV07XHJcbiAgICAgICAgICAgIGlmKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gbm9kZSB0eXBlIDMgaXMgYSB0ZXh0IG5vZGVcclxuICAgICAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZm9yY2VVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXN0S2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVzZSB0aGUgY29udGVudCBhcyBhIGtleSwgbm90IHRoZSB0cmFuc2xhdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjb250ZW50IHdhcyBjaGFuZ2VkIGZyb20gdGhlIHVzZXIsIHdlJ2xsIHVzZSBpdCBhcyBhIHJlZmVyZW5jZSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5vcmlnaW5hbENvbnRlbnQgJiYgZm9yY2VVcGRhdGUpIHsgLy8gdGhlIGNvbnRlbnQgc2VlbXMgb2ssIGJ1dCB0aGUgbGFuZyBoYXMgY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXN0S2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IG5vZGUub3JpZ2luYWxDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoa2V5LCBub2RlLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGtleTogc3RyaW5nLCBub2RlOiBhbnksIHRyYW5zbGF0aW9uczogYW55KSB7XHJcbiAgICAgICAgaWYoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gdGhpcy5jdXJyZW50UGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBhcmFtcyA9IHRoaXMuY3VycmVudFBhcmFtcztcclxuXHJcbiAgICAgICAgICAgIGxldCBvblRyYW5zbGF0aW9uID0gKHJlczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgIT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IGtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFub2RlLm9yaWdpbmFsQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS5jdXJyZW50VmFsdWUgPSBpc0RlZmluZWQocmVzKSA/IHJlcyA6IChub2RlLm9yaWdpbmFsQ29udGVudCB8fCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBpbiB0aGUgb3JpZ2luYWwgY29udGVudCB0byBwcmVzZXJ2ZSBzcGFjZXMgdGhhdCB3ZSBtaWdodCBoYXZlIHRyaW1tZWRcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudChub2RlLCB0aGlzLmtleSA/IG5vZGUuY3VycmVudFZhbHVlIDogbm9kZS5vcmlnaW5hbENvbnRlbnQucmVwbGFjZShrZXksIG5vZGUuY3VycmVudFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZihpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrZXksIHRoaXMuY3VycmVudFBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRlbnQobm9kZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb250ZW50KG5vZGU6IGFueSwgY29udGVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90cmFuc2xhdGUuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHtQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCwgRGVmYXVsdExhbmdDaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7ZXF1YWxzLCBpc0RlZmluZWR9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd0cmFuc2xhdGUnLFxyXG4gICAgcHVyZTogZmFsc2UgLy8gcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSB3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcclxuICAgIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIGxhc3RLZXk6IHN0cmluZztcclxuICAgIGxhc3RQYXJhbXM6IGFueVtdO1xyXG4gICAgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+O1xyXG4gICAgb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PjtcclxuICAgIG9uRGVmYXVsdExhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCwgdHJhbnNsYXRpb25zPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9uVHJhbnNsYXRpb24gPSAocmVzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJlcyAhPT0gdW5kZWZpbmVkID8gcmVzIDoga2V5O1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gdGhpcy50cmFuc2xhdGUuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKS5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHF1ZXJ5OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZighcXVlcnkgfHwgcXVlcnkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGFzayBhbm90aGVyIHRpbWUgZm9yIHRoZSBzYW1lIGtleSwgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXHJcbiAgICAgICAgaWYoZXF1YWxzKHF1ZXJ5LCB0aGlzLmxhc3RLZXkpICYmIGVxdWFscyhhcmdzLCB0aGlzLmxhc3RQYXJhbXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGludGVycG9sYXRlUGFyYW1zOiBPYmplY3Q7XHJcbiAgICAgICAgaWYoaXNEZWZpbmVkKGFyZ3NbMF0pICYmIGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgYWNjZXB0IG9iamVjdHMgd3JpdHRlbiBpbiB0aGUgdGVtcGxhdGUgc3VjaCBhcyB7bjoxfSwgeyduJzoxfSwge246J3YnfVxyXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgd2h5IHdlIG1pZ2h0IG5lZWQgdG8gY2hhbmdlIGl0IHRvIHJlYWwgSlNPTiBvYmplY3RzIHN1Y2ggYXMge1wiblwiOjF9IG9yIHtcIm5cIjpcInZcIn1cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZEFyZ3M6IHN0cmluZyA9IGFyZ3NbMF1cclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcJyk/KFthLXpBLVowLTlfXSspKFxcJyk/KFxccyk/Oi9nLCAnXCIkMlwiOicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzooXFxzKT8oXFwnKSguKj8pKFxcJykvZywgJzpcIiQzXCInKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBKU09OLnBhcnNlKHZhbGlkQXJncyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFdyb25nIHBhcmFtZXRlciBpbiBUcmFuc2xhdGVQaXBlLiBFeHBlY3RlZCBhIHZhbGlkIE9iamVjdCwgcmVjZWl2ZWQ6ICR7YXJnc1swXX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgcXVlcnksIGluIGNhc2UgaXQgY2hhbmdlc1xyXG4gICAgICAgIHRoaXMubGFzdEtleSA9IHF1ZXJ5O1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgcGFyYW1zLCBpbiBjYXNlIHRoZXkgY2hhbmdlXHJcbiAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gYXJncztcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZVxyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzdWJzY3JpcHRpb24gdG8gb25MYW5nQ2hhbmdlLCBjbGVhbiBpdFxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uVHJhbnNsYXRpb25DaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIHRyYW5zbGF0aW9ucyBjaGFuZ2VcclxuICAgICAgICBpZighdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sYXN0S2V5ICYmIGV2ZW50LmxhbmcgPT09IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcywgZXZlbnQudHJhbnNsYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXHJcbiAgICAgICAgaWYoIXRoaXMub25MYW5nQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sYXN0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gbnVsbDsgLy8gd2Ugd2FudCB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCByZXR1cm4gdGhlIHNhbWUgdmFsdWUgdW50aWwgaXQncyBiZWVuIHVwZGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcywgZXZlbnQudHJhbnNsYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25EZWZhdWx0TGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgZGVmYXVsdCBsYW5ndWFnZSBjaGFuZ2VzXHJcbiAgICAgICAgaWYoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxhc3RLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBudWxsOyAvLyB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgc2FtZSB2YWx1ZSB1bnRpbCBpdCdzIGJlZW4gdXBkYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFuIGFueSBleGlzdGluZyBzdWJzY3JpcHRpb24gdG8gY2hhbmdlIGV2ZW50c1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2Rpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMub25MYW5nQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90cmFuc2xhdGUucGlwZS50cyIsImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTdG9yZSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVmYXVsdExhbmc6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudExhbmc6IHN0cmluZyA9IHRoaXMuZGVmYXVsdExhbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXHJcbiAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2xhdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogYW4gYXJyYXkgb2YgbGFuZ3NcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxhbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcclxuICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXHJcbiAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSk7XHJcbiAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXHJcbiAgICAgKiBvbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgKiB9KTtcclxuICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RyYW5zbGF0ZS5zdG9yZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlcn0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5sb2FkZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0gZnJvbSBcIi4vc3JjL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5wYXJzZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVDb21waWxlciwgVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmNvbXBpbGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlRGlyZWN0aXZlfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGlwZVwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnN0b3JlXCI7XHJcbmltcG9ydCB7VVNFX1NUT1JFfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVU0VfREVGQVVMVF9MQU5HfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUubG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUuY29tcGlsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5kaXJlY3RpdmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyB7XHJcbiAgICBsb2FkZXI/OiBQcm92aWRlcjtcclxuICAgIGNvbXBpbGVyPzogUHJvdmlkZXI7XHJcbiAgICBwYXJzZXI/OiBQcm92aWRlcjtcclxuICAgIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI/OiBQcm92aWRlcjtcclxuICAgIC8vIGlzb2xhdGUgdGhlIHNlcnZpY2UgaW5zdGFuY2UsIG9ubHkgd29ya3MgZm9yIGxhenkgbG9hZGVkIG1vZHVsZXMgb3IgY29tcG9uZW50cyB3aXRoIHRoZSBcInByb3ZpZGVyc1wiIHByb3BlcnR5XHJcbiAgICBpc29sYXRlPzogYm9vbGVhbjtcclxuICAgIHVzZURlZmF1bHRMYW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNb2R1bGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciByb290IG1vZHVsZSB0byBwcm92aWRlIHRoZSBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0ge1RyYW5zbGF0ZU1vZHVsZUNvbmZpZ30gY29uZmlnXHJcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBUcmFuc2xhdGVNb2R1bGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXHJcbiAgICAgICAgICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wYXJzZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXJ9LFxyXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTdG9yZSxcclxuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBVU0VfU1RPUkUsIHVzZVZhbHVlOiBjb25maWcuaXNvbGF0ZX0sXHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogVVNFX0RFRkFVTFRfTEFORywgdXNlVmFsdWU6IGNvbmZpZy51c2VEZWZhdWx0TGFuZ30sXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcclxuICAgICAqIEBwYXJhbSB7VHJhbnNsYXRlTW9kdWxlQ29uZmlnfSBjb25maWdcclxuICAgICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBUcmFuc2xhdGVNb2R1bGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUcmFuc2xhdGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxvYWRlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUxvYWRlcn0sXHJcbiAgICAgICAgICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wYXJzZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXJ9LFxyXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfHwge3Byb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcn0sXHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGV9LFxyXG4gICAgICAgICAgICAgICAge3Byb3ZpZGU6IFVTRV9ERUZBVUxUX0xBTkcsIHVzZVZhbHVlOiBjb25maWcudXNlRGVmYXVsdExhbmd9LFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRlU2VydmljZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE4X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9