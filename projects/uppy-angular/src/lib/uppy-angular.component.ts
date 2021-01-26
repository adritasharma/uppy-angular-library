import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UppyConfig } from './uppy-config';

@Component({
  selector: 'ng-uppy',
  templateUrl: './uppy-angular.component.html',
  styleUrls: ['./uppy-angular.component.css']
})
export class UppyAngularComponent implements OnInit {

  constructor() { }

  @Input() config: UppyConfig

  @Output() onFileAdd = new EventEmitter();
  @Output() onFileUpload = new EventEmitter();
  @Output() uploadResult = new EventEmitter();


  uppyInstance: any


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
      const GoogleDrive = require('@uppy/google-drive')
      uppy.use(GoogleDrive, { target: Dashboard, companionUrl: companionUrl })
    }
    if (this.config.plugins.Instagram) {
      const Instagram = require('@uppy/instagram')
      uppy.use(Instagram, { target: Dashboard, companionUrl: companionUrl })
    }

    if (this.config.plugins.Facebook) {
      const Facebook = require('@uppy/facebook')
      uppy.use(Facebook, { target: Dashboard, companionUrl: companionUrl })
    }

    if (this.config.plugins.Dropbox) {
      const Dropbox = require('@uppy/dropbox')
      uppy.use(Dropbox, { target: Dashboard, companionUrl: companionUrl })
    }

    if (this.config.plugins.Webcam) {
      const Webcam = require('@uppy/webcam')
      uppy.use(Webcam, { target: Dashboard })
    }

    if (this.config.plugins.ScreenCapture) {
      const ScreenCapture = require('@uppy/screen-capture')
      uppy.use(ScreenCapture, { target: Dashboard })
    }



    const XHRUpload = require('@uppy/xhr-upload')
    uppy.use(XHRUpload, {
      endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
    })

    uppy.on('file-added', (file) => {
      if (this.config.options.meta) {
        uppy.setFileMeta(file.id, this.config.options.meta)
      }
      this.onFileAdd.emit(file)
    });

    uppy.on('upload', (data) => {
      this.onFileUpload.emit(data)
    })

    uppy.on('complete', (result) => {
      this.uploadResult.emit(result)
    })

  }

}
