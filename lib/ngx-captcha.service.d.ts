import { BehaviorSubject } from 'rxjs';
export declare class NgxCaptchaService {
    captchSource: BehaviorSubject<any>;
    captchStatus: import("rxjs").Observable<any>;
    constructor();
    setCaptchaStatus(code: any): void;
}
