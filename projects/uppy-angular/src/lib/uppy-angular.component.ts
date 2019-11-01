import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Uppy from 'uppy';
import * as Dashboard from '@uppy/dashboard';
import * as GoogleDrive from '@uppy/google-drive';
import * as Instagram from '@uppy/instagram';
import * as Webcam from '@uppy/webcam';
import * as Tus from '@uppy/tus';
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
    var uppy = Uppy.Core(
      {
        autoProceed: false,
        restrictions: this.config.restrictions
      })
    this.uppyInstance = uppy
    uppy.use(Dashboard, { target: '.drag-drop-area', inline: true })

    // if (this.settings.options.GoogleDrive) {
    //   uppy.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    // }
    // if (this.settings.options.Instagram) {
    //   uppy.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    // }


    if (this.config.options.Webcam) {
      uppy.use(Webcam, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    }


    uppy.use(Uppy.XHRUpload, {
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
