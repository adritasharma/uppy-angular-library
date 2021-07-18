export interface UppyConfig {
    uploadAPI: {
        destination?: string;
        endpoint: string;
        headers?: object;
    };
    plugins?: {
        companionUrl?: string;
        GoogleDrive?: boolean;
        Instagram?: boolean;
        Webcam?: boolean;
        Dropbox?: boolean;
        Facebook?: boolean;
        ScreenCapture?: boolean;
    };
    restrictions?: {
        maxFileSize?: number;
        maxNumberOfFiles?: number;
        minNumberOfFiles?: number;
        allowedFileTypes?: Array<string>;
    };
    statusBarOptions: {
        hideAfterFinish?: boolean;
        showProgressDetails?: boolean;
        hideUploadButton?: boolean;
        hideRetryButton?: boolean;
        hidePauseResumeButton?: boolean;
        hideCancelButton?: boolean;
        hideProgressAfterFinish?: boolean;
    };
    uploaderLook: {
        theme?: string;
        note?: string;
        proudlyDisplayPoweredByUppy?: boolean;
        width?: number;
        height?: number;
        thumbnailWidth?: number;
    };
    options?: {
        id?: string;
        debug?: boolean;
        browserBackButtonClose?: boolean;
        autoProceed?: boolean;
        allowMultipleUploads?: boolean;
        meta?: {};
        locale?: {};
    };
}
