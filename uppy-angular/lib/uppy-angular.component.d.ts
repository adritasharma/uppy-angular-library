import { OnInit, EventEmitter } from '@angular/core';
import { UppyConfig } from './uppy-config';
import * as i0 from "@angular/core";
export declare class UppyAngularComponent implements OnInit {
    constructor();
    config: UppyConfig;
    onFileAdd: EventEmitter<any>;
    onFileUpload: EventEmitter<any>;
    uploadResult: EventEmitter<any>;
    uppyInstance: any;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UppyAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UppyAngularComponent, "ng-uppy", never, { "config": "config"; }, { "onFileAdd": "onFileAdd"; "onFileUpload": "onFileUpload"; "uploadResult": "uploadResult"; }, never, never>;
}
