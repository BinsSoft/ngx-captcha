/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from "@angular/core";
import { NgxCaptchaService } from './ngx-captcha.service';
export class NgxCaptchaComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpbnNzb2Z0L25neC1jYXB0Y2hhLyIsInNvdXJjZXMiOlsibGliL25neC1jYXB0Y2hhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFBO0FBTXZELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFNOUIsWUFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBSmxDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBTyxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFRLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQU8sSUFBSSxDQUFDO0lBQytCLENBQUM7Ozs7SUFDdEQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDdEM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFH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LENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCxXQUFXOztZQUNMLEdBQUcsR0FBRyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFNUM7YUFBTztZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7WUE1R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpbUJBQTBDOzthQUUzQzs7OztZQUxPLGlCQUFpQjs7O3FCQVF0QixLQUFLLFNBQUMsUUFBUTs7OztJQUFmLHFDQUFrQzs7SUFDbEMsMkNBQXdCOztJQUN4QixtQ0FBaUI7O0lBQ2pCLHlDQUFzQjs7Ozs7SUFDViw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05neENhcHRjaGFTZXJ2aWNlfSBmcm9tICcuL25neC1jYXB0Y2hhLnNlcnZpY2UnXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2FwdGNoYScsXG4gIHRlbXBsYXRlVXJsOicuL25neC1jYXB0Y2hhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWNhcHRjaGEuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoXCJjb25maWdcIikgY29uZmlnOiBhbnkgPSB7fTtcbiAgY2FwdGNoX2lucHV0OmFueSA9IG51bGw7XG4gIGNvZGU6IGFueSA9IG51bGw7XG4gIHJlc3VsdENvZGU6YW55ID0gbnVsbDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXB0Y2hTZXJ2aWNlOk5neENhcHRjaGFTZXJ2aWNlKXt9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5mb250IHx8ICF0aGlzLmNvbmZpZy5mb250LnNpemUpIHtcbiAgICAgICAgdGhpcy5jb25maWdbXCJmb250XCJdW1wic2l6ZVwiXSA9IFwiNDBweFwiO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5mb250IHx8ICF0aGlzLmNvbmZpZy5mb250LmZhbWlseSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tcImZvbnRcIl1bXCJmYW1pbHlcIl0gPSBcIkFyaWFsXCI7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnN0cm9rZUNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1wic3Ryb2tlQ29sb3JcIl0gPSBcIiNmMjBjNmNcIjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWcubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1wibGVuZ3RoXCJdID0gNjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWcuY3NzQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5jb25maWdbXCJjc3NDbGFzc1wiXSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWdbXCJ0eXBlXCJdID0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5iYWNrIHx8ICF0aGlzLmNvbmZpZy5iYWNrLnN0cm9rZSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tcImJhY2tcIl1bXCJzdHJva2VcIl0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5iYWNrIHx8ICF0aGlzLmNvbmZpZy5iYWNrLnNvbGlkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW1wiYmFja1wiXVtcInNvbGlkXCJdID0gXCIjZjJlZmQyXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlQ2FwdGNoYSgpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVDYXB0Y2hhKCkge1xuXG4gICAgc3dpdGNoKHRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgXG4gICAgICBsZXQgY2hhciA9XG4gICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgIC50b1N0cmluZygyNClcbiAgICAgICAgLnN1YnN0cmluZygyLCB0aGlzLmNvbmZpZy5sZW5ndGgpICtcbiAgICAgIE1hdGgucmFuZG9tKClcbiAgICAgICAgLnRvU3RyaW5nKDI0KVxuICAgICAgICAuc3Vic3RyaW5nKDIsIDQpO1xuICAgICAgdGhpcy5jb2RlID0gdGhpcy5yZXN1bHRDb2RlID0gY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICBsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgIGxldCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBsZXQgb3BlcmF0b3JzID0gWycrJywnLSddO1xuICAgICAgbGV0IG9wZXJhdG9yID0gb3BlcmF0b3JzWyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcGVyYXRvcnMubGVuZ3RoKSldO1xuICAgICAgdGhpcy5jb2RlID0gIG51bTErb3BlcmF0b3IrbnVtMisnPT8nO1xuICAgICAgdGhpcy5yZXN1bHRDb2RlID0gKG9wZXJhdG9yID09ICcrJyk/IChudW0xK251bTIpOihudW0xLW51bTIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY2FwdGNhaENhbnZhczogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXB0Y2FoQ2FudmFzXCIpO1xuICAgICAgdmFyIGN0eCA9IGNhcHRjYWhDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLmJhY2suc29saWQ7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FwdGNhaENhbnZhcy53aWR0aCwgY2FwdGNhaENhbnZhcy5oZWlnaHQpO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGNhcHRjYWhDYW52YXMuc3R5bGUubGV0dGVyU3BhY2luZyA9IDE1ICsgXCJweFwiO1xuICAgICAgY3R4LmZvbnQgPSB0aGlzLmNvbmZpZy5mb250LnNpemUgKyBcIiBcIiArIHRoaXMuY29uZmlnLmZvbnQuZmFtaWx5O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29uZmlnLmZvbnQuY29sb3I7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmNvZGUsIDQwLCA1MCk7XG4gICAgICBpZiAodGhpcy5jb25maWcuYmFjay5zdHJva2UpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb25maWcuYmFjay5zdHJva2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcbiAgICAgICAgICBjdHgubW92ZVRvKE1hdGgucmFuZG9tKCkgKiAzMDAsIE1hdGgucmFuZG9tKCkgKiAzMDApO1xuICAgICAgICAgIGN0eC5saW5lVG8oTWF0aC5yYW5kb20oKSAqIDMwMCwgTWF0aC5yYW5kb20oKSAqIDMwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgIFxuICAgICAgLy8gdGhpcy5jYXB0Y2hhQ29kZS5lbWl0KGNoYXIpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBwbGF5Q2FwdGNoYSgpIHtcbiAgICB2YXIgbXNnID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0aGlzLmNvZGUuc3BsaXQoJycpLmpvaW4oJyAnKSk7XG4gICAgbXNnLnBpdGNoID0gMC4xO1xuICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsobXNnKTtcbiAgfVxuXG4gIGNoZWNrQ2FwdGNoYSgpIHtcbiAgICBpZiAodGhpcy5jYXB0Y2hfaW5wdXQgIT0gdGhpcy5yZXN1bHRDb2RlKSB7XG4gICAgICB0aGlzLmNhcHRjaFNlcnZpY2Uuc2V0Q2FwdGNoYVN0YXR1cyhmYWxzZSk7XG4gICAgICBcbiAgICB9IGVsc2UgIHtcbiAgICAgIHRoaXMuY2FwdGNoU2VydmljZS5zZXRDYXB0Y2hhU3RhdHVzKHRydWUpO1xuICAgIH1cbiAgfVxufVxuIl19