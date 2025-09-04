# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**forgotPasswordPostAPI**](#forgotpasswordpostapi) | **POST** /auth/forgotpassword | |
|[**resetPasswordPostAPI**](#resetpasswordpostapi) | **POST** /auth/resetpassword | |
|[**signInAPI**](#signinapi) | **POST** /auth/signin | |
|[**signUpAPI**](#signupapi) | **POST** /auth/signup | |

# **forgotPasswordPostAPI**
> ForgotPasswordPostOutputBody forgotPasswordPostAPI(forgotPasswordPostInputBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ForgotPasswordPostInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let forgotPasswordPostInputBody: ForgotPasswordPostInputBody; //

const { status, data } = await apiInstance.forgotPasswordPostAPI(
    forgotPasswordPostInputBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotPasswordPostInputBody** | **ForgotPasswordPostInputBody**|  | |


### Return type

**ForgotPasswordPostOutputBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPasswordPostAPI**
> ResetPasswordPostOutputBody resetPasswordPostAPI(resetPasswordPostInputBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ResetPasswordPostInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let resetPasswordPostInputBody: ResetPasswordPostInputBody; //

const { status, data } = await apiInstance.resetPasswordPostAPI(
    resetPasswordPostInputBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordPostInputBody** | **ResetPasswordPostInputBody**|  | |


### Return type

**ResetPasswordPostOutputBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signInAPI**
> SignInOutputBody signInAPI(signInInputBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SignInInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signInInputBody: SignInInputBody; //

const { status, data } = await apiInstance.signInAPI(
    signInInputBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signInInputBody** | **SignInInputBody**|  | |


### Return type

**SignInOutputBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signUpAPI**
> SignUpOutputBody signUpAPI(signUpInputBody)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SignUpInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signUpInputBody: SignUpInputBody; //

const { status, data } = await apiInstance.signUpAPI(
    signUpInputBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signUpInputBody** | **SignUpInputBody**|  | |


### Return type

**SignUpOutputBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

