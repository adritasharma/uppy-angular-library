# Uppy - Angular

Angular component wrapper around Uppy's officially maintained file uploader. It can be used to easily implement uppy in Angular Projects

Uppy is being developed by the folks at <a href="https://transloadit.com/">Transloadit</a>

Uppy's <a href="https://uppy.io/docs/"> Official Documentation

## NPM Package Link

<a href="https://www.npmjs.com/package/uppy-angular">uppy-angular</a>


## Installation

>npm i uppy@1.5.2

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
            endpoint: `${environment.apiUrl}/files/Upload`,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('userToken')
            }
        },
        options: {
            Webcam: true
        }
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
<td>Emits upload result irespective of backend success/failure</td>
</tr>
</table>

### UppyConfig Description

    settings: UppyConfig = {
        uploadAPI: {
            endpoint: `${environment.apiUrl}/files/Upload`,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('userToken')
            }
        },
        options: {
            Webcam: true
        }
    }
