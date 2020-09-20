export interface UppyConfig {
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
        ScreenCapture?: boolean // null | boolean - Allow Taking ScreenCapture
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