/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var NgxCaptchaService = /** @class */ (function () {
    function NgxCaptchaService() {
        this.captchSource = new BehaviorSubject(null);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxCaptchaService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxCaptchaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxCaptchaService_Factory() { return new NgxCaptchaService(); }, token: NgxCaptchaService, providedIn: "root" });
    return NgxCaptchaService;
}());
export { NgxCaptchaService };
if (false) {
    /** @type {?} */
    NgxCaptchaService.prototype.captchSource;
    /** @type {?} */
    NgxCaptchaService.prototype.captchStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaW5zc29mdC9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2FwdGNoYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUNyQztJQU9FO1FBRkEsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFakIsNENBQWdCOzs7O0lBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBWEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NEJBSkQ7Q0FjQyxBQVpELElBWUM7U0FUWSxpQkFBaUI7OztJQUU1Qix5Q0FBeUM7O0lBQ3pDLHlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENhcHRjaGFTZXJ2aWNlIHtcblxuICBjYXB0Y2hTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBjYXB0Y2hTdGF0dXMgPSB0aGlzLmNhcHRjaFNvdXJjZS5hc09ic2VydmFibGUoKTsgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0Q2FwdGNoYVN0YXR1cyhjb2RlKSB7XG4gICAgdGhpcy5jYXB0Y2hTb3VyY2UubmV4dChjb2RlKTtcbiAgfVxufVxuIl19