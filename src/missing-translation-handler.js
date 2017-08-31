"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
FakeMissingTranslationHandler.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };
exports.FakeMissingTranslationHandler = FakeMissingTranslationHandler;
