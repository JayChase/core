"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var translate_loader_1 = require("./src/translate.loader");
var translate_service_1 = require("./src/translate.service");
var missing_translation_handler_1 = require("./src/missing-translation-handler");
var translate_parser_1 = require("./src/translate.parser");
var translate_compiler_1 = require("./src/translate.compiler");
var translate_directive_1 = require("./src/translate.directive");
var translate_pipe_1 = require("./src/translate.pipe");
var translate_store_1 = require("./src/translate.store");
var translate_service_2 = require("./src/translate.service");
var translate_service_3 = require("./src/translate.service");
__export(require("./src/translate.loader"));
__export(require("./src/translate.service"));
__export(require("./src/missing-translation-handler"));
__export(require("./src/translate.parser"));
__export(require("./src/translate.compiler"));
__export(require("./src/translate.directive"));
__export(require("./src/translate.pipe"));
var TranslateModule = (function () {
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
            ngModule: TranslateModule,
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
            ngModule: TranslateModule,
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
TranslateModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    translate_pipe_1.TranslatePipe,
                    translate_directive_1.TranslateDirective
                ],
                exports: [
                    translate_pipe_1.TranslatePipe,
                    translate_directive_1.TranslateDirective
                ]
            },] },
];
/** @nocollapse */
TranslateModule.ctorParameters = function () { return []; };
exports.TranslateModule = TranslateModule;
