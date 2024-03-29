import { Component, OnInit } from '@angular/core';
import { UppyConfig } from 'projects/uppy-angular/src/public-api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Uppy Angular Demo';

  settings: UppyConfig = {
    uploadAPI: {
      endpoint: environment.apiUrl + 'Upload',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    },
    plugins: {
      Webcam: true,
      GoogleDrive: true,
      Instagram: true,
      Facebook: true,
      Dropbox: true,
      ScreenCapture: true
    },
    restrictions: {
      maxNumberOfFiles: 10,
    },
    options: {
      debug: true,
    },
    uploaderLook: {
      note: "",
      theme: 'auto',
      proudlyDisplayPoweredByUppy: true
    },
    statusBarOptions: {
      showProgressDetails: true,
      hideRetryButton: false,
      hideCancelButton: false,
      hideProgressAfterFinish: false
    }
  }

  onFileAdd(evt) {
    console.log("onFileAdd", evt)
  }

  onFileUpload(evt) {
    console.log("onFileUpload", evt)
  }

  uploadResult(evt) {
    console.log("uploadResult", evt)
  }

}
