import { Component } from '@angular/core';
import { UppyConfig } from 'projects/uppy-angular/src/lib/uppy-config';
import { environment } from 'src/environments/environment';
// import { UppyConfig } from 'uppy-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uppy Angular Demo';

  settings: UppyConfig = {
    uploadAPI: {
      endpoint: "https://localhost:44315/api/Upload",
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
