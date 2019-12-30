/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from "@angular/core";
import { NgxCaptchaService } from './ngx-captcha.service';
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
        { type: Component, args: [{
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
        config: [{ type: Input, args: ["config",] }]
    };
    return NgxCaptchaComponent;
}());
export { NgxCaptchaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpbnNzb2Z0L25neC1jYXB0Y2hhLyIsInNvdXJjZXMiOlsibGliL25neC1jYXB0Y2hhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFBO0FBQ3ZEO0lBV0UsNkJBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUpsQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQU8sSUFBSSxDQUFDO1FBQ3hCLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsZUFBVSxHQUFPLElBQUksQ0FBQztJQUMrQixDQUFDOzs7O0lBQ3RELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDdEM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzth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Q0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDs7WUFDTSxHQUFHLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckUsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFNUM7YUFBTztZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkE1R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixpbUJBQTBDOztpQkFFM0M7Ozs7Z0JBTE8saUJBQWlCOzs7eUJBUXRCLEtBQUssU0FBQyxRQUFROztJQXNHakIsMEJBQUM7Q0FBQSxBQTdHRCxJQTZHQztTQXhHWSxtQkFBbUI7OztJQUU5QixxQ0FBa0M7O0lBQ2xDLDJDQUF3Qjs7SUFDeEIsbUNBQWlCOztJQUNqQix5Q0FBc0I7Ozs7O0lBQ1YsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ3hDYXB0Y2hhU2VydmljZX0gZnJvbSAnLi9uZ3gtY2FwdGNoYS5zZXJ2aWNlJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNhcHRjaGEnLFxuICB0ZW1wbGF0ZVVybDonLi9uZ3gtY2FwdGNoYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1jYXB0Y2hhLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KFwiY29uZmlnXCIpIGNvbmZpZzogYW55ID0ge307XG4gIGNhcHRjaF9pbnB1dDphbnkgPSBudWxsO1xuICBjb2RlOiBhbnkgPSBudWxsO1xuICByZXN1bHRDb2RlOmFueSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FwdGNoU2VydmljZTpOZ3hDYXB0Y2hhU2VydmljZSl7fVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuZm9udCB8fCAhdGhpcy5jb25maWcuZm9udC5zaXplKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1wiZm9udFwiXVtcInNpemVcIl0gPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWcuZm9udCB8fCAhdGhpcy5jb25maWcuZm9udC5mYW1pbHkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbXCJmb250XCJdW1wiZmFtaWx5XCJdID0gXCJBcmlhbFwiO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5zdHJva2VDb2xvcikge1xuICAgICAgICB0aGlzLmNvbmZpZ1tcInN0cm9rZUNvbG9yXCJdID0gXCIjZjIwYzZjXCI7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tcImxlbmd0aFwiXSA9IDY7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmNzc0NsYXNzKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1wiY3NzQ2xhc3NcIl0gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1widHlwZVwiXSA9IDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5jb25maWcuYmFjayB8fCAhdGhpcy5jb25maWcuYmFjay5zdHJva2UpIHtcbiAgICAgICAgdGhpcy5jb25maWdbXCJiYWNrXCJdW1wic3Ryb2tlXCJdID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWcuYmFjayB8fCAhdGhpcy5jb25maWcuYmFjay5zb2xpZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tcImJhY2tcIl1bXCJzb2xpZFwiXSA9IFwiI2YyZWZkMlwiO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUNhcHRjaGEoKTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlQ2FwdGNoYSgpIHtcblxuICAgIHN3aXRjaCh0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICBjYXNlIDE6XG4gIFxuICAgICAgbGV0IGNoYXIgPVxuICAgICAgTWF0aC5yYW5kb20oKVxuICAgICAgICAudG9TdHJpbmcoMjQpXG4gICAgICAgIC5zdWJzdHJpbmcoMiwgdGhpcy5jb25maWcubGVuZ3RoKSArXG4gICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgIC50b1N0cmluZygyNClcbiAgICAgICAgLnN1YnN0cmluZygyLCA0KTtcbiAgICAgIHRoaXMuY29kZSA9IHRoaXMucmVzdWx0Q29kZSA9IGNoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgbGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgbGV0IG9wZXJhdG9ycyA9IFsnKycsJy0nXTtcbiAgICAgIGxldCBvcGVyYXRvciA9IG9wZXJhdG9yc1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3BlcmF0b3JzLmxlbmd0aCkpXTtcbiAgICAgIHRoaXMuY29kZSA9ICBudW0xK29wZXJhdG9yK251bTIrJz0/JztcbiAgICAgIHRoaXMucmVzdWx0Q29kZSA9IChvcGVyYXRvciA9PSAnKycpPyAobnVtMStudW0yKToobnVtMS1udW0yKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNhcHRjYWhDYW52YXM6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwdGNhaENhbnZhc1wiKTtcbiAgICAgIHZhciBjdHggPSBjYXB0Y2FoQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy5iYWNrLnNvbGlkO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhcHRjYWhDYW52YXMud2lkdGgsIGNhcHRjYWhDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICBjYXB0Y2FoQ2FudmFzLnN0eWxlLmxldHRlclNwYWNpbmcgPSAxNSArIFwicHhcIjtcbiAgICAgIGN0eC5mb250ID0gdGhpcy5jb25maWcuZm9udC5zaXplICsgXCIgXCIgKyB0aGlzLmNvbmZpZy5mb250LmZhbWlseTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy5mb250LmNvbG9yO1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICBjdHguZmlsbFRleHQodGhpcy5jb2RlLCA0MCwgNTApO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmJhY2suc3Ryb2tlKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29uZmlnLmJhY2suc3Ryb2tlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhNYXRoLnJhbmRvbSgpICogMzAwLCBNYXRoLnJhbmRvbSgpICogMzAwKTtcbiAgICAgICAgICBjdHgubGluZVRvKE1hdGgucmFuZG9tKCkgKiAzMDAsIE1hdGgucmFuZG9tKCkgKiAzMDApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICAgICBcbiAgICAgIC8vIHRoaXMuY2FwdGNoYUNvZGUuZW1pdChjaGFyKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcGxheUNhcHRjaGEoKSB7XG4gICAgdmFyIG1zZyA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGhpcy5jb2RlLnNwbGl0KCcnKS5qb2luKCcgJykpO1xuICAgIG1zZy5waXRjaCA9IDAuMTtcbiAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLnNwZWFrKG1zZyk7XG4gIH1cblxuICBjaGVja0NhcHRjaGEoKSB7XG4gICAgaWYgKHRoaXMuY2FwdGNoX2lucHV0ICE9IHRoaXMucmVzdWx0Q29kZSkge1xuICAgICAgdGhpcy5jYXB0Y2hTZXJ2aWNlLnNldENhcHRjaGFTdGF0dXMoZmFsc2UpO1xuICAgICAgXG4gICAgfSBlbHNlICB7XG4gICAgICB0aGlzLmNhcHRjaFNlcnZpY2Uuc2V0Q2FwdGNoYVN0YXR1cyh0cnVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==