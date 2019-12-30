(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@binssoft/ngx-captcha', ['exports', '@angular/core', 'rxjs', '@angular/forms'], factory) :
    (global = global || self, factory((global.binssoft = global.binssoft || {}, global.binssoft['ngx-captcha'] = {}), global.ng.core, global.rxjs, global.ng.forms));
}(this, (function (exports, core, rxjs, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-captcha.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCaptchaService = /** @class */ (function () {
        function NgxCaptchaService() {
            this.captchSource = new rxjs.BehaviorSubject(null);
            this.captchStatus = this.captchSource.asObservable();
        }
        /**
         * @param {?} code
         * @return {?}
         */
        NgxCaptchaService.prototype.setCaptchaStatus = /**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            this.captchSource.next(code);
        };
        NgxCaptchaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxCaptchaService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxCaptchaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxCaptchaService_Factory() { return new NgxCaptchaService(); }, token: NgxCaptchaService, providedIn: "root" });
        return NgxCaptchaService;
    }());
    if (false) {
        /** @type {?} */
        NgxCaptchaService.prototype.captchSource;
        /** @type {?} */
        NgxCaptchaService.prototype.captchStatus;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-captcha.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCaptchaComponent = /** @class */ (function () {
        function NgxCaptchaComponent(captchService) {
            this.captchService = captchService;
            this.config = {};
            this.captch_input = null;
            this.code = null;
            this.resultCode = null;
        }
        /**
         * @return {?}
         */
        NgxCaptchaComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this.config) {
                if (!this.config.font || !this.config.font.size) {
                    this.config["font"]["size"] = "40px";
                }
                if (!this.config.font || !this.config.font.family) {
                    this.config["font"]["family"] = "Arial";
                }
                if (!this.config.strokeColor) {
                    this.config["strokeColor"] = "#f20c6c";
                }
                if (!this.config.length) {
                    this.config["length"] = 6;
                }
                if (!this.config.cssClass) {
                    this.config["cssClass"] = '';
                }
                if (!this.config.type) {
                    this.config["type"] = 1;
                }
                if (!this.config.back || !this.config.back.stroke) {
                    this.config["back"]["stroke"] = "";
                }
                if (!this.config.back || !this.config.back.solid) {
                    this.config["back"]["solid"] = "#f2efd2";
                }
                this.createCaptcha();
            }
        };
        /**
         * @return {?}
         */
        NgxCaptchaComponent.prototype.createCaptcha = /**
         * @return {?}
         */
        function () {
            var _this = this;
            switch (this.config.type) {
                case 1:
                    /** @type {?} */
                    var char = Math.random()
                        .toString(24)
                        .substring(2, this.config.length) +
                        Math.random()
                            .toString(24)
                            .substring(2, 4);
                    this.code = this.resultCode = char.toUpperCase();
                    break;
                case 2:
                    /** @type {?} */
                    var num1 = Math.floor(Math.random() * 99);
                    /** @type {?} */
                    var num2 = Math.floor(Math.random() * 9);
                    /** @type {?} */
                    var operators = ['+', '-'];
                    /** @type {?} */
                    var operator = operators[(Math.floor(Math.random() * operators.length))];
                    this.code = num1 + operator + num2 + '=?';
                    this.resultCode = (operator == '+') ? (num1 + num2) : (num1 - num2);
                    break;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var captcahCanvas = document.getElementById("captcahCanvas");
                /** @type {?} */
                var ctx = captcahCanvas.getContext("2d");
                ctx.fillStyle = _this.config.back.solid;
                ctx.fillRect(0, 0, captcahCanvas.width, captcahCanvas.height);
                ctx.beginPath();
                captcahCanvas.style.letterSpacing = 15 + "px";
                ctx.font = _this.config.font.size + " " + _this.config.font.family;
                ctx.fillStyle = _this.config.font.color;
                ctx.textBaseline = "middle";
                ctx.fillText(_this.code, 40, 50);
                if (_this.config.back.stroke) {
                    ctx.strokeStyle = _this.config.back.stroke;
                    for (var i = 0; i < 150; i++) {
                        ctx.moveTo(Math.random() * 300, Math.random() * 300);
                        ctx.lineTo(Math.random() * 300, Math.random() * 300);
                    }
                    ctx.stroke();
                }
                // this.captchaCode.emit(char);
            }), 100);
        };
        /**
         * @return {?}
         */
        NgxCaptchaComponent.prototype.playCaptcha = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var msg = new SpeechSynthesisUtterance(this.code.split('').join(' '));
            msg.pitch = 0.1;
            window.speechSynthesis.speak(msg);
        };
        /**
         * @return {?}
         */
        NgxCaptchaComponent.prototype.checkCaptcha = /**
         * @return {?}
         */
        function () {
            if (this.captch_input != this.resultCode) {
                this.captchService.setCaptchaStatus(false);
            }
            else {
                this.captchService.setCaptchaStatus(true);
            }
        };
        NgxCaptchaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-captcha',
                        template: "<div class=\"captcha-container {{ config.cssClass}}\">\r\n    <canvas id=\"captcahCanvas\" width=\"316\" height=\"80\"></canvas>\r\n    \r\n\r\n    <div class=\"captcha-actions\">\r\n  <input type=\"text\" [(ngModel)]=\"captch_input\" />\r\n  <input type=\"button\" value=\"Check\" (click)=\"checkCaptcha()\" />\r\n  <a href=\"javascript:void(0)\" class=\"cpt-btn\" (click)=\"playCaptcha()\">\uD83D\uDD08</a>\r\n    <a href=\"javascript:void(0)\" class=\"cpt-btn reload\" (click)=\"createCaptcha()\">&#x21bb;</a>\r\n</div>\r\n<div class=\"powered-by\">\r\n  powered by BinsSoft\r\n</div>\r\n</div>",
                        styles: [".captcha-container{width:315px;box-shadow:1px 1px 1px 0 #ccc}.captcha-actions input[type=text]{padding:5px;border:1px solid #ccc;border-radius:10px 0 0 10px;outline:0}.captcha-actions input[type=button]{outline:0;padding:6px;border:none;background:#ccc;border-radius:0 10px 10px 0}.captcha-actions a{padding:10px;cursor:pointer;font-size:15px;font-weight:700;text-decoration:none;color:#222}.captcha-container .powered-by{font-size:11px;font-family:Arial;color:#ccc;padding:5px;display:block!important}"]
                    }] }
        ];
        /** @nocollapse */
        NgxCaptchaComponent.ctorParameters = function () { return [
            { type: NgxCaptchaService }
        ]; };
        NgxCaptchaComponent.propDecorators = {
            config: [{ type: core.Input, args: ["config",] }]
        };
        return NgxCaptchaComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxCaptchaComponent.prototype.config;
        /** @type {?} */
        NgxCaptchaComponent.prototype.captch_input;
        /** @type {?} */
        NgxCaptchaComponent.prototype.code;
        /** @type {?} */
        NgxCaptchaComponent.prototype.resultCode;
        /**
         * @type {?}
         * @private
         */
        NgxCaptchaComponent.prototype.captchService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-captcha.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCaptchaModule = /** @class */ (function () {
        function NgxCaptchaModule() {
        }
        /**
         * @return {?}
         */
        NgxCaptchaModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: NgxCaptchaModule,
                providers: [NgxCaptchaService]
            };
        };
        NgxCaptchaModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxCaptchaComponent],
                        imports: [
                            forms.FormsModule
                        ],
                        exports: [NgxCaptchaComponent]
                    },] }
        ];
        return NgxCaptchaModule;
    }());

    exports.NgxCaptchaComponent = NgxCaptchaComponent;
    exports.NgxCaptchaModule = NgxCaptchaModule;
    exports.NgxCaptchaService = NgxCaptchaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=binssoft-ngx-captcha.umd.js.map
