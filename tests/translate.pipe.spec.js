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
Object.defineProperty(exports, "__esModule", { value: true });
var translate_pipe_1 = require("../src/translate.pipe");
var index_1 = require("../index");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var Observable_1 = require("rxjs/Observable");
var FakeChangeDetectorRef = (function (_super) {
    __extends(FakeChangeDetectorRef, _super);
    function FakeChangeDetectorRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeChangeDetectorRef.prototype.markForCheck = function () { };
    FakeChangeDetectorRef.prototype.detach = function () { };
    FakeChangeDetectorRef.prototype.detectChanges = function () { };
    FakeChangeDetectorRef.prototype.checkNoChanges = function () { };
    FakeChangeDetectorRef.prototype.reattach = function () { };
    return FakeChangeDetectorRef;
}(core_1.ChangeDetectorRef));
var App = (function () {
    function App(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return App;
}());
App.decorators = [
    { type: core_1.Injectable },
    { type: core_1.Component, args: [{
                selector: 'hmx-app',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: "{{'TEST' | translate}}"
            },] },
];
/** @nocollapse */
App.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
]; };
var translations = { "TEST": "This is a test" };
var FakeLoader = (function () {
    function FakeLoader() {
    }
    FakeLoader.prototype.getTranslation = function (lang) {
        return Observable_1.Observable.of(translations);
    };
    return FakeLoader;
}());
describe('TranslatePipe', function () {
    var injector;
    var translate;
    var translatePipe;
    var ref;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                index_1.TranslateModule.forRoot({
                    loader: { provide: index_1.TranslateLoader, useClass: FakeLoader }
                })
            ],
            declarations: [App]
        });
        injector = testing_1.getTestBed();
        translate = injector.get(index_1.TranslateService);
        ref = new FakeChangeDetectorRef();
        translatePipe = new translate_pipe_1.TranslatePipe(translate, ref);
    });
    afterEach(function () {
        injector = undefined;
        translate = undefined;
        translations = { "TEST": "This is a test" };
        translatePipe = undefined;
        ref = undefined;
    });
    it('is defined', function () {
        expect(translate_pipe_1.TranslatePipe).toBeDefined();
        expect(translatePipe).toBeDefined();
        expect(translatePipe instanceof translate_pipe_1.TranslatePipe).toBeTruthy();
    });
    it('should translate a string', function () {
        translate.setTranslation('en', { "TEST": "This is a test" });
        translate.use('en');
        expect(translatePipe.transform('TEST')).toEqual("This is a test");
    });
    it('should call markForChanges when it translates a string', function () {
        translate.setTranslation('en', { "TEST": "This is a test" });
        translate.use('en');
        spyOn(ref, 'markForCheck').and.callThrough();
        translatePipe.transform('TEST');
        expect(ref.markForCheck).toHaveBeenCalled();
    });
    it('should translate a string with object parameters', function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param}}" });
        translate.use('en');
        expect(translatePipe.transform('TEST', { param: "with param" })).toEqual("This is a test with param");
    });
    it('should translate a string with object as string parameters', function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param}}" });
        translate.use('en');
        expect(translatePipe.transform('TEST', '{param: "with param"}')).toEqual("This is a test with param");
        expect(translatePipe.transform('TEST', '{"param": "with param"}')).toEqual("This is a test with param");
        expect(translatePipe.transform('TEST', "{param: 'with param'}")).toEqual("This is a test with param");
        expect(translatePipe.transform('TEST', "{'param' : 'with param'}")).toEqual("This is a test with param");
    });
    it('should translate a string with object as multiple string parameters', function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param1}} {{param2}}" });
        translate.use('en');
        expect(translatePipe.transform('TEST', '{param1: "with param-1", param2: "and param-2"}'))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', '{"param1": "with param-1", "param2": "and param-2"}'))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', "{param1: 'with param-1', param2: 'and param-2'}"))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', "{'param1' : 'with param-1', 'param2': 'and param-2'}"))
            .toEqual("This is a test with param-1 and param-2");
    });
    it('should translate a string with object as nested string parameters', function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param.one}} {{param.two}}" });
        translate.use('en');
        expect(translatePipe.transform('TEST', '{param: {one: "with param-1", two: "and param-2"}}'))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', '{"param": {"one": "with param-1", "two": "and param-2"}}'))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', "{param: {one: 'with param-1', two: 'and param-2'}}"))
            .toEqual("This is a test with param-1 and param-2");
        expect(translatePipe.transform('TEST', "{'param' : {'one': 'with param-1', 'two': 'and param-2'}}"))
            .toEqual("This is a test with param-1 and param-2");
    });
    it('should update the value when the parameters change', function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param}}" });
        translate.use('en');
        spyOn(translatePipe, 'updateValue').and.callThrough();
        spyOn(ref, 'markForCheck').and.callThrough();
        expect(translatePipe.transform('TEST', { param: "with param" })).toEqual("This is a test with param");
        // same value, shouldn't call 'updateValue' again
        expect(translatePipe.transform('TEST', { param: "with param" })).toEqual("This is a test with param");
        // different param, should call 'updateValue'
        expect(translatePipe.transform('TEST', { param: "with param2" })).toEqual("This is a test with param2");
        expect(translatePipe.updateValue).toHaveBeenCalledTimes(2);
        expect(ref.markForCheck).toHaveBeenCalledTimes(2);
    });
    it("should throw if you don't give an object parameter", function () {
        translate.setTranslation('en', { "TEST": "This is a test {{param}}" });
        translate.use('en');
        var param = 'param: "with param"';
        expect(function () {
            translatePipe.transform('TEST', param);
        }).toThrowError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + param);
    });
    describe('should update translations on lang change', function () {
        it('with fake loader', function (done) {
            translate.setTranslation('en', { "TEST": "This is a test" });
            translate.setTranslation('fr', { "TEST": "C'est un test" });
            translate.use('en');
            expect(translatePipe.transform('TEST')).toEqual("This is a test");
            // this will be resolved at the next lang change
            var subscription = translate.onLangChange.subscribe(function (res) {
                expect(res.lang).toEqual('fr');
                expect(translatePipe.transform('TEST')).toEqual("C'est un test");
                subscription.unsubscribe();
                done();
            });
            translate.use('fr');
        });
        it('with file loader', function (done) {
            translate.use('en');
            expect(translatePipe.transform('TEST')).toEqual("This is a test");
            // this will be resolved at the next lang change
            var subscription = translate.onLangChange.subscribe(function (res) {
                // let it update the translations
                setTimeout(function () {
                    expect(res.lang).toEqual('fr');
                    expect(translatePipe.transform('TEST')).toEqual("C'est un test");
                    subscription.unsubscribe();
                    done();
                });
            });
            translations = { "TEST": "C'est un test" };
            translate.use('fr');
        });
        it('should detect changes with OnPush', function () {
            var fixture = testing_1.TestBed.createComponent(App);
            fixture.detectChanges();
            expect(fixture.debugElement.nativeElement.innerHTML).toEqual("TEST");
            translate.use('en');
            fixture.detectChanges();
            expect(fixture.debugElement.nativeElement.innerHTML).toEqual("This is a test");
        });
    });
    describe('should update translations on default lang change', function () {
        it('with fake loader', function (done) {
            translate.setTranslation('en', { "TEST": "This is a test" });
            translate.setTranslation('fr', { "TEST": "C'est un test" });
            translate.setDefaultLang('en');
            expect(translatePipe.transform('TEST')).toEqual("This is a test");
            // this will be resolved at the next lang change
            var subscription = translate.onDefaultLangChange.subscribe(function (res) {
                expect(res.lang).toEqual('fr');
                expect(translatePipe.transform('TEST')).toEqual("C'est un test");
                subscription.unsubscribe();
                done();
            });
            translate.setDefaultLang('fr');
        });
        it('with file loader', function (done) {
            translate.setDefaultLang('en');
            expect(translatePipe.transform('TEST')).toEqual("This is a test");
            // this will be resolved at the next lang change
            var subscription = translate.onDefaultLangChange.subscribe(function (res) {
                // let it update the translations
                setTimeout(function () {
                    expect(res.lang).toEqual('fr');
                    expect(translatePipe.transform('TEST')).toEqual("C'est un test");
                    subscription.unsubscribe();
                    done();
                });
            });
            translations = { "TEST": "C'est un test" };
            translate.setDefaultLang('fr');
        });
        it('should detect changes with OnPush', function () {
            var fixture = testing_1.TestBed.createComponent(App);
            fixture.detectChanges();
            expect(fixture.debugElement.nativeElement.innerHTML).toEqual("TEST");
            translate.setDefaultLang('en');
            fixture.detectChanges();
            expect(fixture.debugElement.nativeElement.innerHTML).toEqual("This is a test");
        });
    });
});
