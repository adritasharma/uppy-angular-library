import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UppyConfig } from 'projects/uppy-angular/src/public-api';
// import { UppyConfig } from 'uppy-angular/uppy-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uppy Angular Demo';

  settings: UppyConfig = {
    uploadAPI: {
      endpoint: environment.apiUrl + 'files/Upload',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    },
    plugins: {
      Webcam: true,
      GoogleDrive:true,
      Instagram:true,
      Facebook:true,
      Dropbox:true
    },
    restrictions: {
      // maxFileSize: 1000000,
      maxNumberOfFiles: 2,
      // minNumberOfFiles: 1,
      // allowedFileTypes: ['image/*','pdf/*', 'docs/*']
    },
    debug:true
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

  onImageEditorStart(evt) {
    console.log("onImageEditorStart", evt)
  }
  
  onImageEditorComplete(evt) {
    console.log("onFilonImageEditorCompleteeUpload", evt)
  }
}
