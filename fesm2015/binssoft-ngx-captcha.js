import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCaptchaService {
    constructor() {
        this.captchSource = new BehaviorSubject(null);
        this.captchStatus = this.captchSource.asObservable();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    setCaptchaStatus(code) {
        this.captchSource.next(code);
    }
}
NgxCaptchaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxCaptchaService.ctorParameters = () => [];
/** @nocollapse */ NgxCaptchaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxCaptchaService_Factory() { return new NgxCaptchaService(); }, token: NgxCaptchaService, providedIn: "root" });
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
class NgxCaptchaComponent {
    /**
     * @param {?} captchService
     */
    constructor(captchService) {
        this.captchService = captchService;
        this.config = {};
        this.captch_input = null;
        this.code = null;
        this.resultCode = null;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @return {?}
     */
    createCaptcha() {
        switch (this.config.type) {
            case 1:
                /** @type {?} */
                let char = Math.random()
                    .toString(24)
                    .substring(2, this.config.length) +
                    Math.random()
                        .toString(24)
                        .substring(2, 4);
                this.code = this.resultCode = char.toUpperCase();
                break;
            case 2:
                /** @type {?} */
                let num1 = Math.floor(Math.random() * 99);
                /** @type {?} */
                let num2 = Math.floor(Math.random() * 9);
                /** @type {?} */
                let operators = ['+', '-'];
                /** @type {?} */
                let operator = operators[(Math.floor(Math.random() * operators.length))];
                this.code = num1 + operator + num2 + '=?';
                this.resultCode = (operator == '+') ? (num1 + num2) : (num1 - num2);
                break;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let captcahCanvas = document.getElementById("captcahCanvas");
            /** @type {?} */
            var ctx = captcahCanvas.getContext("2d");
            ctx.fillStyle = this.config.back.solid;
            ctx.fillRect(0, 0, captcahCanvas.width, captcahCanvas.height);
            ctx.beginPath();
            captcahCanvas.style.letterSpacing = 15 + "px";
            ctx.font = this.config.font.size + " " + this.config.font.family;
            ctx.fillStyle = this.config.font.color;
            ctx.textBaseline = "middle";
            ctx.fillText(this.code, 40, 50);
            if (this.config.back.stroke) {
                ctx.strokeStyle = this.config.back.stroke;
                for (var i = 0; i < 150; i++) {
                    ctx.moveTo(Math.random() * 300, Math.random() * 300);
                    ctx.lineTo(Math.random() * 300, Math.random() * 300);
                }
                ctx.stroke();
            }
            // this.captchaCode.emit(char);
        }), 100);
    }
    /**
     * @return {?}
     */
    playCaptcha() {
        /** @type {?} */
        var msg = new SpeechSynthesisUtterance(this.code.split('').join(' '));
        msg.pitch = 0.1;
        window.speechSynthesis.speak(msg);
    }
    /**
     * @return {?}
     */
    checkCaptcha() {
        if (this.captch_input != this.resultCode) {
            this.captchService.setCaptchaStatus(false);
        }
        else {
            this.captchService.setCaptchaStatus(true);
        }
    }
}
NgxCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-captcha',
                template: "<div class=\"captcha-container {{ config.cssClass}}\">\r\n    <canvas id=\"captcahCanvas\" width=\"316\" height=\"80\"></canvas>\r\n    \r\n\r\n    <div class=\"captcha-actions\">\r\n  <input type=\"text\" [(ngModel)]=\"captch_input\" />\r\n  <input type=\"button\" value=\"Check\" (click)=\"checkCaptcha()\" />\r\n  <a href=\"javascript:void(0)\" class=\"cpt-btn\" (click)=\"playCaptcha()\">\uD83D\uDD08</a>\r\n    <a href=\"javascript:void(0)\" class=\"cpt-btn reload\" (click)=\"createCaptcha()\">&#x21bb;</a>\r\n</div>\r\n<div class=\"powered-by\">\r\n  powered by BinsSoft\r\n</div>\r\n</div>",
                styles: [".captcha-container{width:315px;box-shadow:1px 1px 1px 0 #ccc}.captcha-actions input[type=text]{padding:5px;border:1px solid #ccc;border-radius:10px 0 0 10px;outline:0}.captcha-actions input[type=button]{outline:0;padding:6px;border:none;background:#ccc;border-radius:0 10px 10px 0}.captcha-actions a{padding:10px;cursor:pointer;font-size:15px;font-weight:700;text-decoration:none;color:#222}.captcha-container .powered-by{font-size:11px;font-family:Arial;color:#ccc;padding:5px;display:block!important}"]
            }] }
];
/** @nocollapse */
NgxCaptchaComponent.ctorParameters = () => [
    { type: NgxCaptchaService }
];
NgxCaptchaComponent.propDecorators = {
    config: [{ type: Input, args: ["config",] }]
};
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
class NgxCaptchaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxCaptchaModule,
            providers: [NgxCaptchaService]
        };
    }
}
NgxCaptchaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxCaptchaComponent],
                imports: [
                    FormsModule
                ],
                exports: [NgxCaptchaComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: binssoft-ngx-captcha.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCaptchaComponent, NgxCaptchaModule, NgxCaptchaService };
//# sourceMappingURL=binssoft-ngx-captcha.js.map
