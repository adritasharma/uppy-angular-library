export interface UppyConfig {
    uploadAPI: {
        endpoint: string, // backend endpoint to upload files
        headers?: object // additional headers eg:Authorization Token
    },
    plugins?: {
        companionUrl?: string // null | string - URL to a Companion instance.
        GoogleDrive?: boolean // null | boolean - Allow Uploading Photo From GoogleDrive
        Instagram?: boolean // null | boolean - Allow Uploading Photo From Instagram
        Webcam?: boolean // null | boolean - Allow Taking Photo From Webcam
        Dropbox?: boolean // null | boolean - Allow Uploading Photo From Dropbox
        Facebook?: boolean // null | boolean - Allow Uploading Photo From Facebook
        ScreenCapture?: boolean // null | boolean - Allow Taking ScreenCast
    },
    restrictions?: {
        maxFileSize?: number, //null | number — maximum file size in bytes for each
        maxNumberOfFiles?: number,//null | number — total number of files that can be selected
        minNumberOfFiles?: number,//null | number — minimum number of files that must
        allowedFileTypes?: Array<string> // null | array of wildcards image/*, exact mime types image/jpeg, or file extensions .jpg: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
    },
    statusBarOptions: {
        hideAfterFinish?: boolean //Hide the Status Bar after the upload is complete
        showProgressDetails?: boolean, // By default, progress in Status Bar is shown as a simple percentage. If you would like to also display remaining upload size and time, set this to true.
        hideUploadButton?: boolean, // Hide the upload button. Use this if you are providing a custom upload button somewhere, and using the uppy.upload() API
        hideRetryButton?: boolean, // Hide the retry button in StatusBar
        hidePauseResumeButton?: boolean, // Hide the pause/resume button in StatusBar and on each individual file.
        hideCancelButton?: boolean, // Hide the cancel button in StatusBar and on each individual file.
        hideProgressAfterFinish?: boolean,// Hide Status Bar after the upload has finished
    },
    uploaderLook: {
        theme?: string, // light | dark | auto
        note?: string, // Optionally, specify a string of text that explains something about the upload for the user. This is a place to explain any restrictions that are put in place. 
        proudlyDisplayPoweredByUppy?: boolean, //Uppy is provided to the world for free by the team behind Transloadit. In return, we ask that you consider keeping a tiny Uppy logo at the bottom of the Dashboard, so that more people can discover and use Uppy. This is, of course, entirely optional. Just set this option to false if you do not wish to display the Uppy logo
        width?: number, //null | number — Width of the Dashboard in pixels.
        height?: number, //null | number — Height of the Dashboard in pixels.
        thumbnailWidth?: number, //null | number — Width of the Thumbnail in pixels.
    },
    options?: {
        id?: string, //A site-wide unique ID for the instance.
        debug?: boolean,
        browserBackButtonClose?: boolean
        autoProceed?: boolean, //Setting this to true will start uploading automatically after the first file is selected without waiting for upload button trigger.
        allowMultipleUploads?: boolean, //Setting this to true,  users can upload some files, and then add more files and upload those as well
        meta?: {} //Metadata object, used for passing things like public keys, usernames, tags and so on
        locale?: {} // Locale pack
    }
}