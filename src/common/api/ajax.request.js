import { Platform } from 'react-native';
import queryString from 'query-string';
import RNFetchBlob from "rn-fetch-blob";
import config from '../config';
// import I18n from '../i18n';

const requestBodyTypes = ['POST', 'PUT', 'PATCH'];

function invoke(method, endpoint, payload, onUploadProgress, onDownloadProgress) {
    console.log("in Invoke")
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Accept-Language': localeToLanguageTag(I18n.locale)
    };
    const options = {
        method,
        withCredentials: true,
        responseType: 'json',
        headers: Object.assign({}, defaultHeaders, payload.headers),
        onUploadProgress,
        onDownloadProgress
    };
    if (requestBodyTypes.indexOf(method) !== -1) {
        options.body = options.headers['Content-Type'] === 'application/x-www-form-urlencoded'
            ? queryString.stringify(payload.body || {})
            : JSON.stringify(payload.body || {});
    }
    // console.log("${config.authServer.url}/${endpoint}",config.authServer.url,endpoint)
    return progressFetch(`${payload.isAuthCall ? `${config.authServer.url}/${endpoint}` : `${config.apiServer.url}/${endpoint}`}`, options)
        .then(validateResponse)
        .then(response => ({ response }))
        .catch(handleError);
}

function progressFetch(uri, options) {
    // console.log("uri, options:",uri, options)
    const { onUploadProgress, onDownloadProgress } = options;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method, uri);
        xhr.withCredentials = options.withCredentials;
        xhr.responseType = options.responseType;
        Object.entries(options.headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
        });
        xhr.onload = (e) => resolve(e.target);
        xhr.onerror = () => {
            console.log("api call error")
            // reject({ message: I18n.t('network_unavailable') });
        }
        if (onDownloadProgress) {
            xhr.onprogress = (e) => {
                if (e.lengthComputable) {
                    const downloadProgress = Math.floor((e.loaded / e.total) * 100) / 100;
                    onDownloadProgress(downloadProgress);
                } else {
                    onDownloadProgress(0);
                }
            }
        }
        if (xhr.upload && onUploadProgress)
            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const uploadProgress = Math.floor((e.loaded / e.total) * 100) / 100;
                    onUploadProgress(uploadProgress);
                } else {
                    onUploadProgress(0);
                }
            };
        xhr.send(options.body);
    });
}

export function get(endpoint, payload, onUploadProgress, onDownloadProgress) {
    // console.log("in Get: endpoint, payload, onUploadProgress, onDownloadProgress",endpoint, payload, onUploadProgress, onDownloadProgress)
    let endpointWithParams = undefined;
    if (endpoint !== undefined) {
        endpointWithParams = payload.params ? `${endpoint}?${queryString.stringify(payload.params, payload.options || {})}` : endpoint;
    }
    return invoke('GET', endpointWithParams, payload, onUploadProgress, onDownloadProgress);
}

export function post(endpoint, payload, onUploadProgress, onDownloadProgress) {
    return invoke('POST', endpoint, payload, onUploadProgress, onDownloadProgress);
}

export function patch(endpoint, payload, onUploadProgress, onDownloadProgress) {
    return invoke('PATCH', endpoint, payload, onUploadProgress, onDownloadProgress);
}

export function put(endpoint, payload, onUploadProgress, onDownloadProgress) {
    return invoke('PUT', endpoint, payload, onUploadProgress, onDownloadProgress);
}

export function del(endpoint, payload) {
    return invoke('DELETE', endpoint, payload);
}

export function file(endpoint, payload) {
    let endpointWithParams = endpoint;
    if (payload.params) {
        endpointWithParams = `${endpoint}?${queryString.stringify(payload.params, payload.options || {})}`;
    }
    const defaultHeaders = {
        'Content-Type': 'image/jpeg',
        'Accept': 'image/jpeg'
    };
    const headers = Object.assign({}, defaultHeaders, payload.headers);
    return RNFetchBlob.config({
        fileCache: true,
        appendExt: payload.ext || 'jpeg',
    })
        .fetch("GET", `${config.apiServer.url}/${endpointWithParams}`, headers)
        .then((result) => {
            if (result.respInfo.status === 200) {
                return Promise.resolve(result);
            } 
            // else {
            //     RNFetchBlob.fs.unlink(result.path());
            //     return Promise.reject({ message: I18n.t('file_download_failed') });
            // }
        })
        .then((result) => {
            const response = {
                uri: Platform.OS === "android"
                    ? "file://" + result.path()
                    : "" + result.path()
            };
            return { response };
        }).catch(handleError);
}

function validateResponse(response) {
    // console.log("response in validateResponse:",response)
    const { status, response: json = {} } = response;
    if (status === 200) {
        // return Promise.resolve(json);
        // if (json.access_token) {
        //     return Promise.resolve(json);
        // }
        // if (json.status_cd === 1) {
        //     return Promise.resolve(json.data);
        // }
        if (json.status_cd === 0) {
            return Promise.reject({ message: json.error.message });
        }else{
            return Promise.resolve(json);
        }
        // return Promise.reject({
        //     message: I18n.t('invalid_status_code', {
        //         statusCode: json.status_cd
        //     })
        // });
    }
    // if (status === 401) {
    //     // const rejectResponse = { message: json.error_description ? I18n.t('invalid_user_credentials') : json.error.message };
    //     if (json.error.error_cd) {
    //         rejectResponse.error_cd = json.error.error_cd;
    //     }
    //     return Promise.reject(rejectResponse);
    // }
    return Promise.reject({ message: json.error_description ? json.error_description : json.error.message });
}

function handleError(error) {
    if (error instanceof Promise) {
        return error
            .then(function (e) {
                return { error: e };
            }).
            catch(e => (
                console.log("")
                // { error: { message: I18n.t('unknown_error') } }
                ));
    } else {
        return { error };
    }
}

function localeToLanguageTag(locale) {
    return locale.replace('_', '-');
}
