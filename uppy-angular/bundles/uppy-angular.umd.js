(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('uppy-angular', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['uppy-angular'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var UppyAngularComponent = /** @class */ (function () {
        function UppyAngularComponent() {
            this.onFileAdd = new i0.EventEmitter();
            this.onFileUpload = new i0.EventEmitter();
            this.uploadResult = new i0.EventEmitter();
        }
        UppyAngularComponent.prototype.ngOnInit = function () {
            var _this = this;
            var Uppy = require('@uppy/core');
            var opts = {
                autoProceed: this.config.options.autoProceed,
                restrictions: this.config.restrictions,
                debug: this.config.options.debug,
            };
            if (this.config.options.locale) {
                Object.assign(opts, { locale: this.config.options.locale });
            }
            var uppy = new Uppy(opts);
            this.uppyInstance = uppy;
            var Dashboard = require('@uppy/dashboard');
            uppy.use(Dashboard, {
                target: '.drag-drop-area',
                id: this.config.options.id,
                theme: this.config.uploaderLook.theme,
                note: this.config.uploaderLook.note,
                height: this.config.uploaderLook.height,
                width: this.config.uploaderLook.width,
                thumbnailWidth: this.config.uploaderLook.thumbnailWidth,
                inline: true,
                showProgressDetails: this.config.statusBarOptions.showProgressDetails,
                browserBackButtonClose: this.config.options.browserBackButtonClose,
                hideUploadButton: this.config.statusBarOptions.hideUploadButton,
                hideRetryButton: this.config.statusBarOptions.hideRetryButton,
                hidePauseResumeButton: this.config.statusBarOptions.hidePauseResumeButton,
                hideCancelButton: this.config.statusBarOptions.hideCancelButton,
                hideAfterFinish: this.config.statusBarOptions.hideAfterFinish,
                hideProgressAfterFinish: this.config.statusBarOptions.hideProgressAfterFinish,
                proudlyDisplayPoweredByUppy: this.config.uploaderLook.proudlyDisplayPoweredByUppy,
                allowMultipleUploads: this.config.options.allowMultipleUploads
            });
            // Plugins
            var companionUrl = this.config.plugins.companionUrl || 'https://companion.uppy.io';
            if (this.config.plugins.GoogleDrive) {
                var GoogleDrive = require('@uppy/google-drive');
                uppy.use(GoogleDrive, { target: Dashboard, companionUrl: companionUrl });
            }
            if (this.config.plugins.Instagram) {
                var Instagram = require('@uppy/instagram');
                uppy.use(Instagram, { target: Dashboard, companionUrl: companionUrl });
            }
            if (this.config.plugins.Facebook) {
                var Facebook = require('@uppy/facebook');
                uppy.use(Facebook, { target: Dashboard, companionUrl: companionUrl });
            }
            if (this.config.plugins.Dropbox) {
                var Dropbox = require('@uppy/dropbox');
                uppy.use(Dropbox, { target: Dashboard, companionUrl: companionUrl });
            }
            if (this.config.plugins.Webcam) {
                var Webcam = require('@uppy/webcam');
                uppy.use(Webcam, { target: Dashboard });
            }
            if (this.config.plugins.ScreenCapture) {
                var ScreenCapture = require('@uppy/screen-capture');
                uppy.use(ScreenCapture, { target: Dashboard });
            }
            if (this.config.uploadAPI.destination && this.config.uploadAPI.destination == 'tus') {
                var Tus = require('@uppy/tus');
                uppy.use(Tus, {
                    endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
                });
            }
            else {
                var XHRUpload = require('@uppy/xhr-upload');
                uppy.use(XHRUpload, {
                    endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
                });
            }
            uppy.on('file-added', function (file) {
                if (_this.config.options.meta) {
                    uppy.setFileMeta(file.id, _this.config.options.meta);
                }
                _this.onFileAdd.emit(file);
            });
            uppy.on('upload', function (data) {
                _this.onFileUpload.emit(data);
            });
            uppy.on('complete', function (result) {
                _this.uploadResult.emit(result);
            });
        };
        return UppyAngularComponent;
    }());
    /** @nocollapse */ UppyAngularComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    /** @nocollapse */ UppyAngularComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.2", type: UppyAngularComponent, selector: "ng-uppy", inputs: { config: "config" }, outputs: { onFileAdd: "onFileAdd", onFileUpload: "onFileUpload", uploadResult: "uploadResult" }, ngImport: i0__namespace, template: "<div class=\"drag-drop-area\"></div>", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ng-uppy',
                        templateUrl: './uppy-angular.component.html',
                        styleUrls: ['./uppy-angular.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                    type: i0.Input
                }], onFileAdd: [{
                    type: i0.Output
                }], onFileUpload: [{
                    type: i0.Output
                }], uploadResult: [{
                    type: i0.Output
                }] } });

    var UppyAngularModule = /** @class */ (function () {
        function UppyAngularModule() {
        }
        return UppyAngularModule;
    }());
    /** @nocollapse */ UppyAngularModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ UppyAngularModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularModule, declarations: [UppyAngularComponent], exports: [UppyAngularComponent] });
    /** @nocollapse */ UppyAngularModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: UppyAngularModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [UppyAngularComponent],
                        imports: [],
                        exports: [UppyAngularComponent]
                    }]
            }] });

    /*
     * Public API Surface of uppy-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UppyAngularComponent = UppyAngularComponent;
    exports.UppyAngularModule = UppyAngularModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=uppy-angular.umd.js.map
