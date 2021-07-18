import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class UppyAngularComponent {
    constructor() {
        this.onFileAdd = new EventEmitter();
        this.onFileUpload = new EventEmitter();
        this.uploadResult = new EventEmitter();
    }
    ngOnInit() {
        const Uppy = require('@uppy/core');
        const opts = {
            autoProceed: this.config.options.autoProceed,
            restrictions: this.config.restrictions,
            debug: this.config.options.debug,
        };
        if (this.config.options.locale) {
            Object.assign(opts, { locale: this.config.options.locale });
        }
        var uppy = new Uppy(opts);
        this.uppyInstance = uppy;
        const Dashboard = require('@uppy/dashboard');
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
        const companionUrl = this.config.plugins.companionUrl || 'https://companion.uppy.io';
        if (this.config.plugins.GoogleDrive) {
            const GoogleDrive = require('@uppy/google-drive');
            uppy.use(GoogleDrive, { target: Dashboard, companionUrl: companionUrl });
        }
        if (this.config.plugins.Instagram) {
            const Instagram = require('@uppy/instagram');
            uppy.use(Instagram, { target: Dashboard, companionUrl: companionUrl });
        }
        if (this.config.plugins.Facebook) {
            const Facebook = require('@uppy/facebook');
            uppy.use(Facebook, { target: Dashboard, companionUrl: companionUrl });
        }
        if (this.config.plugins.Dropbox) {
            const Dropbox = require('@uppy/dropbox');
            uppy.use(Dropbox, { target: Dashboard, companionUrl: companionUrl });
        }
        if (this.config.plugins.Webcam) {
            const Webcam = require('@uppy/webcam');
            uppy.use(Webcam, { target: Dashboard });
        }
        if (this.config.plugins.ScreenCapture) {
            const ScreenCapture = require('@uppy/screen-capture');
            uppy.use(ScreenCapture, { target: Dashboard });
        }
        if (this.config.uploadAPI.destination && this.config.uploadAPI.destination == 'tus') {
            const Tus = require('@uppy/tus');
            uppy.use(Tus, {
                endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
            });
        }
        else {
            const XHRUpload = require('@uppy/xhr-upload');
            uppy.use(XHRUpload, {
                endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
            });
        }
        uppy.on('file-added', (file) => {
            if (this.config.options.meta) {
                uppy.setFileMeta(file.id, this.config.options.meta);
            }
            this.onFileAdd.emit(file);
        });
        uppy.on('upload', (data) => {
            this.onFileUpload.emit(data);
        });
        uppy.on('complete', (result) => {
            this.uploadResult.emit(result);
        });
    }
}
/** @nocollapse */ UppyAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UppyAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ UppyAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.2", type: UppyAngularComponent, selector: "ng-uppy", inputs: { config: "config" }, outputs: { onFileAdd: "onFileAdd", onFileUpload: "onFileUpload", uploadResult: "uploadResult" }, ngImport: i0, template: "<div class=\"drag-drop-area\"></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UppyAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng-uppy',
                    templateUrl: './uppy-angular.component.html',
                    styleUrls: ['./uppy-angular.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], onFileAdd: [{
                type: Output
            }], onFileUpload: [{
                type: Output
            }], uploadResult: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBweS1hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3VwcHktYW5ndWxhci9zcmMvbGliL3VwcHktYW5ndWxhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy91cHB5LWFuZ3VsYXIvc3JjL2xpYi91cHB5LWFuZ3VsYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRL0UsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQjtRQUlVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFONUIsQ0FBQztJQVlqQixRQUFRO1FBRU4sTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5DLE1BQU0sSUFBSSxHQUFHO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDNUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztTQUNqQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWM7WUFDdkQsTUFBTSxFQUFFLElBQUk7WUFDWixtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQjtZQUNyRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0I7WUFDbEUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7WUFDL0QsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUM3RCxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQjtZQUN6RSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtZQUMvRCxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQzdELHVCQUF1QixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCO1lBQzdFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLDJCQUEyQjtZQUNqRixvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7U0FDOUQsQ0FBQyxDQUFDO1FBSUosVUFBVTtRQUNWLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSwyQkFBMkIsQ0FBQztRQUNyRixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUE7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNqQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUE7U0FDdkU7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNoQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUE7U0FDdEU7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUMvQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBO1NBQ3JFO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDOUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNyQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1NBQy9DO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLEtBQUssRUFBRTtZQUNuRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTzthQUNqRixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU87YUFDakYsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDcEQ7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQzs7b0lBbkhVLG9CQUFvQjt3SEFBcEIsb0JBQW9CLDhLQ1JqQyxzQ0FBa0M7MkZEUXJCLG9CQUFvQjtrQkFMaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzBFQUtVLE1BQU07c0JBQWQsS0FBSztnQkFFSSxTQUFTO3NCQUFsQixNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBweUNvbmZpZyB9IGZyb20gJy4vdXBweS1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy11cHB5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBweS1hbmd1bGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cHB5LWFuZ3VsYXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHB5QW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZzogVXBweUNvbmZpZ1xyXG5cclxuICBAT3V0cHV0KCkgb25GaWxlQWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkZpbGVVcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHVwbG9hZFJlc3VsdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIHVwcHlJbnN0YW5jZTogYW55XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBjb25zdCBVcHB5ID0gcmVxdWlyZSgnQHVwcHkvY29yZScpO1xyXG5cclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIGF1dG9Qcm9jZWVkOiB0aGlzLmNvbmZpZy5vcHRpb25zLmF1dG9Qcm9jZWVkLFxyXG4gICAgICByZXN0cmljdGlvbnM6IHRoaXMuY29uZmlnLnJlc3RyaWN0aW9ucyxcclxuICAgICAgZGVidWc6IHRoaXMuY29uZmlnLm9wdGlvbnMuZGVidWcsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5vcHRpb25zLmxvY2FsZSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKG9wdHMsIHsgbG9jYWxlOiB0aGlzLmNvbmZpZy5vcHRpb25zLmxvY2FsZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdXBweSA9IG5ldyBVcHB5KG9wdHMpO1xyXG5cclxuICAgIHRoaXMudXBweUluc3RhbmNlID0gdXBweTtcclxuXHJcbiAgICBjb25zdCBEYXNoYm9hcmQgPSByZXF1aXJlKCdAdXBweS9kYXNoYm9hcmQnKTtcclxuXHJcbiAgICB1cHB5LnVzZShEYXNoYm9hcmQsIHtcclxuICAgICAgdGFyZ2V0OiAnLmRyYWctZHJvcC1hcmVhJyxcclxuICAgICAgaWQ6IHRoaXMuY29uZmlnLm9wdGlvbnMuaWQsXHJcbiAgICAgIHRoZW1lOiB0aGlzLmNvbmZpZy51cGxvYWRlckxvb2sudGhlbWUsXHJcbiAgICAgIG5vdGU6IHRoaXMuY29uZmlnLnVwbG9hZGVyTG9vay5ub3RlLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLnVwbG9hZGVyTG9vay5oZWlnaHQsXHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy51cGxvYWRlckxvb2sud2lkdGgsXHJcbiAgICAgIHRodW1ibmFpbFdpZHRoOiB0aGlzLmNvbmZpZy51cGxvYWRlckxvb2sudGh1bWJuYWlsV2lkdGgsXHJcbiAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgc2hvd1Byb2dyZXNzRGV0YWlsczogdGhpcy5jb25maWcuc3RhdHVzQmFyT3B0aW9ucy5zaG93UHJvZ3Jlc3NEZXRhaWxzLFxyXG4gICAgICBicm93c2VyQmFja0J1dHRvbkNsb3NlOiB0aGlzLmNvbmZpZy5vcHRpb25zLmJyb3dzZXJCYWNrQnV0dG9uQ2xvc2UsXHJcbiAgICAgIGhpZGVVcGxvYWRCdXR0b246IHRoaXMuY29uZmlnLnN0YXR1c0Jhck9wdGlvbnMuaGlkZVVwbG9hZEJ1dHRvbixcclxuICAgICAgaGlkZVJldHJ5QnV0dG9uOiB0aGlzLmNvbmZpZy5zdGF0dXNCYXJPcHRpb25zLmhpZGVSZXRyeUJ1dHRvbixcclxuICAgICAgaGlkZVBhdXNlUmVzdW1lQnV0dG9uOiB0aGlzLmNvbmZpZy5zdGF0dXNCYXJPcHRpb25zLmhpZGVQYXVzZVJlc3VtZUJ1dHRvbixcclxuICAgICAgaGlkZUNhbmNlbEJ1dHRvbjogdGhpcy5jb25maWcuc3RhdHVzQmFyT3B0aW9ucy5oaWRlQ2FuY2VsQnV0dG9uLFxyXG4gICAgICBoaWRlQWZ0ZXJGaW5pc2g6IHRoaXMuY29uZmlnLnN0YXR1c0Jhck9wdGlvbnMuaGlkZUFmdGVyRmluaXNoLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NBZnRlckZpbmlzaDogdGhpcy5jb25maWcuc3RhdHVzQmFyT3B0aW9ucy5oaWRlUHJvZ3Jlc3NBZnRlckZpbmlzaCxcclxuICAgICAgcHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5OiB0aGlzLmNvbmZpZy51cGxvYWRlckxvb2sucHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5LFxyXG4gICAgICBhbGxvd011bHRpcGxlVXBsb2FkczogdGhpcy5jb25maWcub3B0aW9ucy5hbGxvd011bHRpcGxlVXBsb2Fkc1xyXG4gICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gUGx1Z2luc1xyXG4gICAgY29uc3QgY29tcGFuaW9uVXJsID0gdGhpcy5jb25maWcucGx1Z2lucy5jb21wYW5pb25VcmwgfHwgJ2h0dHBzOi8vY29tcGFuaW9uLnVwcHkuaW8nO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMuR29vZ2xlRHJpdmUpIHtcclxuICAgICAgY29uc3QgR29vZ2xlRHJpdmUgPSByZXF1aXJlKCdAdXBweS9nb29nbGUtZHJpdmUnKVxyXG4gICAgICB1cHB5LnVzZShHb29nbGVEcml2ZSwgeyB0YXJnZXQ6IERhc2hib2FyZCwgY29tcGFuaW9uVXJsOiBjb21wYW5pb25VcmwgfSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbHVnaW5zLkluc3RhZ3JhbSkge1xyXG4gICAgICBjb25zdCBJbnN0YWdyYW0gPSByZXF1aXJlKCdAdXBweS9pbnN0YWdyYW0nKVxyXG4gICAgICB1cHB5LnVzZShJbnN0YWdyYW0sIHsgdGFyZ2V0OiBEYXNoYm9hcmQsIGNvbXBhbmlvblVybDogY29tcGFuaW9uVXJsIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMuRmFjZWJvb2spIHtcclxuICAgICAgY29uc3QgRmFjZWJvb2sgPSByZXF1aXJlKCdAdXBweS9mYWNlYm9vaycpXHJcbiAgICAgIHVwcHkudXNlKEZhY2Vib29rLCB7IHRhcmdldDogRGFzaGJvYXJkLCBjb21wYW5pb25Vcmw6IGNvbXBhbmlvblVybCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbHVnaW5zLkRyb3Bib3gpIHtcclxuICAgICAgY29uc3QgRHJvcGJveCA9IHJlcXVpcmUoJ0B1cHB5L2Ryb3Bib3gnKVxyXG4gICAgICB1cHB5LnVzZShEcm9wYm94LCB7IHRhcmdldDogRGFzaGJvYXJkLCBjb21wYW5pb25Vcmw6IGNvbXBhbmlvblVybCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5wbHVnaW5zLldlYmNhbSkge1xyXG4gICAgICBjb25zdCBXZWJjYW0gPSByZXF1aXJlKCdAdXBweS93ZWJjYW0nKVxyXG4gICAgICB1cHB5LnVzZShXZWJjYW0sIHsgdGFyZ2V0OiBEYXNoYm9hcmQgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcucGx1Z2lucy5TY3JlZW5DYXB0dXJlKSB7XHJcbiAgICAgIGNvbnN0IFNjcmVlbkNhcHR1cmUgPSByZXF1aXJlKCdAdXBweS9zY3JlZW4tY2FwdHVyZScpXHJcbiAgICAgIHVwcHkudXNlKFNjcmVlbkNhcHR1cmUsIHsgdGFyZ2V0OiBEYXNoYm9hcmQgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcudXBsb2FkQVBJLmRlc3RpbmF0aW9uICYmIHRoaXMuY29uZmlnLnVwbG9hZEFQSS5kZXN0aW5hdGlvbiA9PSAndHVzJykge1xyXG4gICAgICBjb25zdCBUdXMgPSByZXF1aXJlKCdAdXBweS90dXMnKVxyXG4gICAgICB1cHB5LnVzZShUdXMsIHtcclxuICAgICAgICBlbmRwb2ludDogdGhpcy5jb25maWcudXBsb2FkQVBJLmVuZHBvaW50LCBoZWFkZXJzOiB0aGlzLmNvbmZpZy51cGxvYWRBUEkuaGVhZGVyc1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgWEhSVXBsb2FkID0gcmVxdWlyZSgnQHVwcHkveGhyLXVwbG9hZCcpXHJcbiAgICAgIHVwcHkudXNlKFhIUlVwbG9hZCwge1xyXG4gICAgICAgIGVuZHBvaW50OiB0aGlzLmNvbmZpZy51cGxvYWRBUEkuZW5kcG9pbnQsIGhlYWRlcnM6IHRoaXMuY29uZmlnLnVwbG9hZEFQSS5oZWFkZXJzXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBweS5vbignZmlsZS1hZGRlZCcsIChmaWxlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHRpb25zLm1ldGEpIHtcclxuICAgICAgICB1cHB5LnNldEZpbGVNZXRhKGZpbGUuaWQsIHRoaXMuY29uZmlnLm9wdGlvbnMubWV0YSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uRmlsZUFkZC5lbWl0KGZpbGUpXHJcbiAgICB9KTtcclxuXHJcbiAgICB1cHB5Lm9uKCd1cGxvYWQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLm9uRmlsZVVwbG9hZC5lbWl0KGRhdGEpXHJcbiAgICB9KVxyXG5cclxuICAgIHVwcHkub24oJ2NvbXBsZXRlJywgKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLnVwbG9hZFJlc3VsdC5lbWl0KHJlc3VsdClcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImRyYWctZHJvcC1hcmVhXCI+PC9kaXY+Il19