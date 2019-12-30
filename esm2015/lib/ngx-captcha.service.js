/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxCaptchaService {
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
/** @nocollapse */ NgxCaptchaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxCaptchaService_Factory() { return new NgxCaptchaService(); }, token: NgxCaptchaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxCaptchaService.prototype.captchSource;
    /** @type {?} */
    NgxCaptchaService.prototype.captchStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaW5zc29mdC9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2FwdGNoYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUlyQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBRkEsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFakIsZ0JBQWdCLENBQUMsSUFBSTtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFHQyx5Q0FBeUM7O0lBQ3pDLHlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neENhcHRjaGFTZXJ2aWNlIHtcblxuICBjYXB0Y2hTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBjYXB0Y2hTdGF0dXMgPSB0aGlzLmNhcHRjaFNvdXJjZS5hc09ic2VydmFibGUoKTsgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0Q2FwdGNoYVN0YXR1cyhjb2RlKSB7XG4gICAgdGhpcy5jYXB0Y2hTb3VyY2UubmV4dChjb2RlKTtcbiAgfVxufVxuIl19