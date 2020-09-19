export interface UppyConfig {
    uploadAPI: {
        endpoint: string, // backend endpoint to upload files
        headers?: object // additional headers eg:Authorization Token
    }
    plugins?: {
        GoogleDrive?: boolean,
        Instagram?: boolean,
        Webcam?: boolean // Allow Taking Photo From Webcam
        Dropbox?: boolean
        Facebook?: boolean
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
    meta?: {} //Metadata object, used for passing things like public keys, usernames, tags and so on
}