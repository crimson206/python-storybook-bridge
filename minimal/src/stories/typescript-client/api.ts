/* tslint:disable */
/* eslint-disable */
/**
 * My Sample API
 * This is a sample API to demonstrate basic FastAPI functionality.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Arg4
 */
export interface Arg4 {
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    'loc': Array<ValidationErrorLocInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
/**
 * 
 * @export
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}
/**
 * 
 * @export
 * @interface WithTypehintInput
 */
export interface WithTypehintInput {
    /**
     * 
     * @type {string}
     * @memberof WithTypehintInput
     */
    'arg1': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WithTypehintInput
     */
    'arg2': Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof WithTypehintInput
     */
    'arg3': WithTypehintInputArg3Enum;
    /**
     * 
     * @type {Arg4}
     * @memberof WithTypehintInput
     */
    'arg4': Arg4;
}

export const WithTypehintInputArg3Enum = {
    A: 'A',
    B: 'B'
} as const;

export type WithTypehintInputArg3Enum = typeof WithTypehintInputArg3Enum[keyof typeof WithTypehintInputArg3Enum];

/**
 * 
 * @export
 * @interface WithTypehintOut
 */
export interface WithTypehintOut {
    /**
     * 
     * @type {object}
     * @memberof WithTypehintOut
     */
    'body': object;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Process Input
         * @param {WithTypehintInput} withTypehintInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processInputProcessInputPost: async (withTypehintInput: WithTypehintInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'withTypehintInput' is not null or undefined
            assertParamExists('processInputProcessInputPost', 'withTypehintInput', withTypehintInput)
            const localVarPath = `/process_input`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(withTypehintInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Process Input
         * @param {WithTypehintInput} withTypehintInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processInputProcessInputPost(withTypehintInput: WithTypehintInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WithTypehintOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.processInputProcessInputPost(withTypehintInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.processInputProcessInputPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Process Input
         * @param {WithTypehintInput} withTypehintInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processInputProcessInputPost(withTypehintInput: WithTypehintInput, options?: any): AxiosPromise<WithTypehintOut> {
            return localVarFp.processInputProcessInputPost(withTypehintInput, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Process Input
     * @param {WithTypehintInput} withTypehintInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public processInputProcessInputPost(withTypehintInput: WithTypehintInput, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).processInputProcessInputPost(withTypehintInput, options).then((request) => request(this.axios, this.basePath));
    }
}



