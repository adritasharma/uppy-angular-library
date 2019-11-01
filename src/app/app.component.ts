import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UppyConfig } from 'uppy-angular/uppy-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UppyAngularDemo';

  settings: UppyConfig = {
    uploadAPI: {
      endpoint: environment.apiUrl + 'files/Upload',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    },

    options: {
      Webcam: true
    },
    restrictions: {
      // maxFileSize: 1000000,
      maxNumberOfFiles: 2,
      // minNumberOfFiles: 1,
      // allowedFileTypes: ['image/*','pdf/*', 'docs/*']
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
