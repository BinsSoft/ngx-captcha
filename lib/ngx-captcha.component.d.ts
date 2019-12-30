import { OnChanges } from "@angular/core";
import { NgxCaptchaService } from './ngx-captcha.service';
export declare class NgxCaptchaComponent implements OnChanges {
    private captchService;
    config: any;
    captch_input: any;
    code: any;
    resultCode: any;
    constructor(captchService: NgxCaptchaService);
    ngOnChanges(): void;
    createCaptcha(): void;
    playCaptcha(): void;
    checkCaptcha(): void;
}
