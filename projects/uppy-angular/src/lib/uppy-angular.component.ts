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

    var uppy = new Uppy({
      autoProceed: this.config.autoProceed,
      restrictions: this.config.restrictions,
      debug : this.config.debug
    })

    this.uppyInstance = uppy

    const Dashboard = require('@uppy/dashboard');

    uppy.use(Dashboard, { 
      target: '.drag-drop-area', 
      inline: true,
      showProgressDetails: this.config.showProgressDetails,
      note: this.config.note,
      height: this.config.height,
      width: this.config.width,
      browserBackButtonClose: this.config.browserBackButtonClose
     });



    // Plugins

    if (this.config.plugins.GoogleDrive) {
      const GoogleDrive = require('@uppy/google-drive')
      uppy.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    }
    if (this.config.plugins.Instagram) {
      const Instagram = require('@uppy/instagram')
      uppy.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    }

    if (this.config.plugins.Facebook) {
      const Facebook = require('@uppy/facebook')
      uppy.use(Facebook, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    }

    if (this.config.plugins.Dropbox) {
      const Dropbox = require('@uppy/dropbox')
      uppy.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    }

    if (this.config.plugins.Webcam) {
      const Webcam = require('@uppy/webcam')
      uppy.use(Webcam, { target: Dashboard })
    }


    const XHRUpload = require('@uppy/xhr-upload')
    uppy.use(XHRUpload, {
      endpoint: this.config.uploadAPI.endpoint, headers: this.config.uploadAPI.headers
    })

    uppy.on('file-added', (file) => {
      if (this.config.meta) {
        uppy.setFileMeta(file.id, this.config.meta)
      }
      this.onFileAdd.emit(file)
    });

    uppy.on('upload', (data) => {
      this.onFileUpload.emit(data)
    })

    uppy.on('complete', (result) => {
      this.uploadResult.emit(result)

      if (result.successful.length > 0) {
        var that = this
        setTimeout(function () {
          that.uppyInstance().close()
        }, 1000);
      }
    })

  }

}
