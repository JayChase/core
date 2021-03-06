"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Observable_1 = require("rxjs/Observable");
var testing_1 = require("@angular/core/testing");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/take");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/zip");
var translations = { "TEST": "This is a test" };
var FakeLoader = (function () {
    function FakeLoader() {
    }
    FakeLoader.prototype.getTranslation = function (lang) {
        return Observable_1.Observable.of(translations);
    };
    return FakeLoader;
}());
describe('TranslateService', function () {
    var injector;
    var translate;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                index_1.TranslateModule.forRoot({
                    loader: { provide: index_1.TranslateLoader, useClass: FakeLoader }
                })
            ]
        });
        injector = testing_1.getTestBed();
        translate = injector.get(index_1.TranslateService);
    });
    afterEach(function () {
        injector = undefined;
        translate = undefined;
        translations = { "TEST": "This is a test" };
    });
    it('is defined', function () {
        expect(index_1.TranslateService).toBeDefined();
        expect(translate).toBeDefined();
        expect(translate instanceof index_1.TranslateService).toBeTruthy();
    });
    it('should be able to get translations', function () {
        translations = { "TEST": "This is a test", "TEST2": "This is another test" };
        translate.use('en');
        // this will request the translation from the backend because we use a static files loader for TranslateService
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('This is a test');
        });
        // this will request the translation from downloaded translations without making a request to the backend
        translate.get('TEST2').subscribe(function (res) {
            expect(res).toEqual('This is another test');
        });
    });
    it('should be able to get an array translations', function () {
        translations = { "TEST": "This is a test", "TEST2": "This is another test2" };
        translate.use('en');
        // this will request the translation from the backend because we use a static files loader for TranslateService
        translate.get(['TEST', 'TEST2']).subscribe(function (res) {
            expect(res).toEqual(translations);
        });
    });
    it("should fallback to the default language", function () {
        translations = {};
        translate.use('fr');
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('TEST');
            translate.setDefaultLang('nl');
            translate.setTranslation('nl', { "TEST": "Dit is een test" });
            translate.get('TEST').subscribe(function (res2) {
                expect(res2).toEqual('Dit is een test');
                expect(translate.getDefaultLang()).toEqual('nl');
            });
        });
    });
    it("should use the default language by default", function () {
        translate.setDefaultLang('nl');
        translate.setTranslation('nl', { "TEST": "Dit is een test" });
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('Dit is een test');
        });
    });
    it("should return the key when it doesn't find a translation", function () {
        translate.use('en');
        translate.get('TEST2').subscribe(function (res) {
            expect(res).toEqual('TEST2');
        });
    });
    it("should return the key when you haven't defined any translation", function () {
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('TEST');
        });
    });
    it('should return an empty value', function () {
        translate.setDefaultLang('en');
        translate.setTranslation('en', { "TEST": "" });
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('');
        });
    });
    it('should be able to get translations with params', function () {
        translations = { "TEST": "This is a test {{param}}" };
        translate.use('en');
        translate.get('TEST', { param: 'with param' }).subscribe(function (res) {
            expect(res).toEqual('This is a test with param');
        });
    });
    it('should be able to get translations with nested params', function () {
        translations = { "TEST": "This is a test {{param.value}}" };
        translate.use('en');
        translate.get('TEST', { param: { value: 'with param' } }).subscribe(function (res) {
            expect(res).toEqual('This is a test with param');
        });
    });
    it('should throw if you forget the key', function () {
        translate.use('en');
        expect(function () {
            translate.get(undefined);
        }).toThrowError('Parameter "key" required');
        expect(function () {
            translate.get('');
        }).toThrowError('Parameter "key" required');
        expect(function () {
            translate.get(null);
        }).toThrowError('Parameter "key" required');
        expect(function () {
            translate.instant(undefined);
        }).toThrowError('Parameter "key" required');
    });
    it('should be able to get translations with nested keys', function () {
        translations = { "TEST": { "TEST": "This is a test" }, "TEST2": { "TEST2": { "TEST2": "This is another test" } } };
        translate.use('en');
        translate.get('TEST.TEST').subscribe(function (res) {
            expect(res).toEqual('This is a test');
        });
        translate.get('TEST2.TEST2.TEST2').subscribe(function (res) {
            expect(res).toEqual('This is another test');
        });
    });
    it("should merge translations if option shouldMerge is true", function (done) {
        translations = {};
        translate.setTranslation('en', { "TEST": { "sub1": "value1" } }, true);
        translate.setTranslation('en', { "TEST": { "sub2": "value2" } }, true);
        translate.use('en');
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual({ "sub1": "value1", "sub2": "value2" });
            expect(translations).toEqual({});
            done();
        });
    });
    it("shouldn't call the current loader if you set the translation yourself", function (done) {
        translations = {};
        translate.setTranslation('en', { "TEST": "This is a test" });
        translate.use('en');
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('This is a test');
            expect(translations).toEqual({});
            done();
        });
    });
    it('should be able to stream a translation for the current language', function (done) {
        translations = { "TEST": "This is a test" };
        translate.use('en');
        translate.stream('TEST').subscribe(function (res) {
            expect(res).toEqual('This is a test');
            done();
        });
    });
    it('should be able to stream a translation of an array for the current language', function (done) {
        var tr = { "TEST": "This is a test", "TEST2": "This is a test2" };
        translate.setTranslation('en', tr);
        translate.use('en');
        translate.stream(['TEST', 'TEST2']).subscribe(function (res) {
            expect(res).toEqual(tr);
            done();
        });
    });
    it('should initially return the same value for streaming and non-streaming get', function (done) {
        translations = { "TEST": "This is a test" };
        translate.use('en');
        translate.stream('TEST').zip(translate.get('TEST')).subscribe(function (value) {
            var streamed = value[0], nonStreamed = value[1];
            expect(streamed).toEqual('This is a test');
            expect(streamed).toEqual(nonStreamed);
            done();
        });
    });
    it('should update streaming translations on language change', function (done) {
        translations = { "TEST": "This is a test" };
        translate.use('en');
        translate.stream('TEST').take(3).toArray().subscribe(function (res) {
            var expected = ['This is a test', 'Dit is een test', 'This is a test'];
            expect(res).toEqual(expected);
            done();
        });
        translate.setTranslation('nl', { "TEST": "Dit is een test" });
        translate.use('nl');
        translate.use('en');
    });
    it('should update streaming translations of an array on language change', function (done) {
        var en = { "TEST": "This is a test", "TEST2": "This is a test2" };
        var nl = { "TEST": "Dit is een test", "TEST2": "Dit is een test2" };
        translate.setTranslation('en', en);
        translate.use('en');
        translate.stream(['TEST', 'TEST2']).take(3).toArray().subscribe(function (res) {
            var expected = [en, nl, en];
            expect(res).toEqual(expected);
            done();
        });
        translate.setTranslation('nl', nl);
        translate.use('nl');
        translate.use('en');
    });
    it('should interpolate the same param into each streamed value', function (done) {
        translations = { "TEST": "This is a test {{param}}" };
        translate.use('en');
        translate.stream('TEST', { param: 'with param' }).take(3).toArray().subscribe(function (res) {
            var expected = [
                'This is a test with param',
                'Dit is een test with param',
                'This is a test with param'
            ];
            expect(res).toEqual(expected);
            done();
        });
        translate.setTranslation('nl', { "TEST": "Dit is een test {{param}}" });
        translate.use('nl');
        translate.use('en');
    });
    it('should be able to get instant translations', function () {
        translate.setTranslation('en', { "TEST": "This is a test" });
        translate.use('en');
        expect(translate.instant('TEST')).toEqual('This is a test');
    });
    it('should be able to get instant translations of an array', function () {
        var tr = { "TEST": "This is a test", "TEST2": "This is a test2" };
        translate.setTranslation('en', tr);
        translate.use('en');
        expect(translate.instant(['TEST', 'TEST2'])).toEqual(tr);
    });
    it('should return the key if instant translations are not available', function () {
        translate.setTranslation('en', { "TEST": "This is a test" });
        translate.use('en');
        expect(translate.instant('TEST2')).toEqual('TEST2');
    });
    it('should trigger an event when the translation value changes', function () {
        translate.setTranslation('en', {});
        translate.onTranslationChange.subscribe(function (event) {
            expect(event.translations).toBeDefined();
            expect(event.translations["TEST"]).toEqual("This is a test");
            expect(event.lang).toBe('en');
        });
        translate.set("TEST", "This is a test", 'en');
    });
    it('should trigger an event when the lang changes', function () {
        var tr = { "TEST": "This is a test" };
        translate.setTranslation('en', tr);
        translate.onLangChange.subscribe(function (event) {
            expect(event.lang).toBe('en');
            expect(event.translations).toEqual(tr);
        });
        translate.use('en');
    });
    it('should be able to reset a lang', function (done) {
        translate.use('en');
        // this will request the translation from the backend because we use a static files loader for TranslateService
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual(translations['TEST']);
            // reset the lang as if it was never initiated
            translate.resetLang('en');
            expect(translate.instant('TEST')).toEqual('TEST');
            translate.get('TEST').subscribe(function (res2) {
                expect(res2).toEqual('TEST'); // because the loader is "pristine" as if it was never called
                done();
            });
        });
    });
    it('should be able to reload a lang', function () {
        translations = {};
        translate.use('en');
        // this will request the translation from the loader
        translate.get('TEST').subscribe(function (res) {
            expect(res).toEqual('TEST');
            translations = { "TEST": "This is a test 2" };
            // reset the lang as if it was never initiated
            translate.reloadLang('en').subscribe(function (res2) {
                expect(translate.instant('TEST')).toEqual(translations['TEST']);
            });
        });
    });
    it('should be able to add new langs', function () {
        translate.addLangs(['pl', 'es']);
        expect(translate.getLangs()).toEqual(['pl', 'es']);
        translate.addLangs(['fr']);
        translate.addLangs(['pl', 'fr']);
        expect(translate.getLangs()).toEqual(['pl', 'es', 'fr']);
        // this will request the translation from the backend because we use a static files loader for TranslateService
        translate.use('en').subscribe(function (res) {
            expect(translate.getLangs()).toEqual(['pl', 'es', 'fr', 'en']);
            translate.addLangs(['de']);
            expect(translate.getLangs()).toEqual(['pl', 'es', 'fr', 'en', 'de']);
        });
    });
    it('should be able to get the browserLang', function () {
        var browserLang = translate.getBrowserLang();
        expect(browserLang).toBeDefined();
        expect(typeof browserLang === 'string').toBeTruthy();
    });
    it('should be able to get the browserCultureLang', function () {
        var browserCultureLand = translate.getBrowserCultureLang();
        expect(browserCultureLand).toBeDefined();
        expect(typeof browserCultureLand === 'string').toBeTruthy();
    });
    it('should not make duplicate requests', testing_1.fakeAsync(function () {
        var getTranslationCalls = 0;
        spyOn(translate.currentLoader, 'getTranslation').and.callFake(function () {
            getTranslationCalls += 1;
            return Observable_1.Observable.timer(1000).mapTo(Observable_1.Observable.of(translations));
        });
        translate.use('en');
        translate.use('en');
        testing_1.tick(1001);
        expect(getTranslationCalls).toEqual(1);
    }));
});
