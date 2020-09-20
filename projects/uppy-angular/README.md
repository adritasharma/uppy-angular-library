# Uppy - Angular

Angular component wrapper around Uppy's officially maintained file uploader. It can be used to easily intigrate uppy in Angular Projects

Uppy is being developed by the folks at <a href="https://transloadit.com/">Transloadit</a>

Uppy's <a href="https://uppy.io/docs/"> Official Documentation


## Installation

>npm i uppy

>npm i uppy-angular

# <a href="https://stackblitz.com/edit/uppy-angular-stackbiltz-demo?embed=1&file=src/app/app.component.ts"> Demo </a>

# Getting started

### app.module.ts

    import { UppyAngularModule } from 'uppy-angular';

    @NgModule({
        imports: [
            UppyAngularModule
            ...
        ],
        ...
    })

### Component Template

    <ng-uppy [config]="settings" (onFileUpload)="onFileUpload($event)"></ng-uppy>

### Component TS

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
      maxFileSize: 1000000,
      maxNumberOfFiles: 2,
      minNumberOfFiles: 1,
      allowedFileTypes: ['image/*','pdf/*', 'docs/*']
    },
    debug:true
  }

### Adding style

Add the cdn stylesheet and js script in either index.html or download and keep them in assets folder and add  the relative path angular.json

### index.html

    <link href="https://transloadit.edgly.net/releases/uppy/v1.5.2/uppy.min.css" rel="stylesheet">

    <script src="https://transloadit.edgly.net/releases/uppy/v1.5.2/uppy.min.js"></script>

or

### angular.json

Add the dependencies in the scripts and styles attributes:


    "ProjectName": {
        "architect": {
        "build": {
            "options": {
            "styles": [
                "src/assets/CSS/uppy.min.css"
            ],
            "scripts": [
                "src/assets/JS/uppy.min.js"
            ]
            },
        }
        }
    }

## Settings

### Input

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Description</td>
</tr>
<tr>
<td>config</td>
<td>UppyConfig (Custom Type)</td>
<td>Uploader Configuration</td>
</tr>
</table>

### Output

<table>
<tr>
<td>Name</td>
<td>Description</td>
</tr>
<tr>
<td>(onFileAdd)</td>
<td>Emits file data on each file add</td>
</tr>
<tr>
<td>(onFileUpload)</td>
<td>Emits uploaded data when Upload is succesfully completed in backend</td>
</tr>
<tr>
<td>(onFileAdd)</td>
<td>Emits upload result irrespective of backend success/failure</td>
</tr>
</table>

### UppyConfig Description

interface UppyConfig {
    uploadAPI: {
        endpoint: string, // backend endpoint to upload files
        headers?: object // additional headers eg:Authorization Token
    }
    plugins?: {
        GoogleDrive?: boolean // null | boolean - Allow Uploading Photo From GoogleDrive
        Instagram?: boolean // null | boolean - Allow Uploading Photo From Instagram
        Webcam?: boolean // null | boolean - Allow Taking Photo From Webcam
        Dropbox?: boolean // null | boolean - Allow Uploading Photo From Dropbox
        Facebook?: boolean // null | boolean - Allow Uploading Photo From Facebook
        ScreenCapture?: boolean // null | boolean - Allow Taking ScreenCast
    }
    id?: string, //A site-wide unique ID for the instance.
    autoProceed?: boolean, //Setting this to true will start uploading automatically after the first file is selected without waiting for upload button trigger.
    allowMultipleUploads?: boolean, //Setting this to true,  users can upload some files, and then add more files and upload those as well
    debug?: boolean,
    restrictions?: {
        maxFileSize?: number, //null | number — maximum file size in bytes for each
        maxNumberOfFiles?: number,//null | number — total number of files that can be selected
        minNumberOfFiles?: number,//null | number — minimum number of files that must
        allowedFileTypes?: Array<string> // null | array of wildcards image/*, exact mime types image/jpeg, or file extensions .jpg: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
    },
    showProgressDetails?: boolean, // By default, progress in Status Bar is shown as a simple percentage. If you would like to also display remaining upload size and time, set this to true.
    note?: string, // Optionally, specify a string of text that explains something about the upload for the user. This is a place to explain any restrictions that are put in place. 
    width?:number, //null | number — Width of the Dashboard in pixels.
    height?:number, //null | number — Height of the Dashboard in pixels.
    browserBackButtonClose?: true
    meta?: {} //Metadata object, used for passing things like public keys, usernames, tags and so on
}
