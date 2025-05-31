# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profileGetAPI**](#profilegetapi) | **GET** /users/profile | |
|[**profileUpdateAPI**](#profileupdateapi) | **PUT** /users/profile | |
|[**profileUpdateEmailAPI**](#profileupdateemailapi) | **PUT** /users/profile/email | |

# **profileGetAPI**
> ProfileGetOutputBody profileGetAPI()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.profileGetAPI(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ProfileGetOutputBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileUpdateAPI**
> ProfileUpdateOutputBody profileUpdateAPI(profileUpdateInputBody)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    ProfileUpdateInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let profileUpdateInputBody: ProfileUpdateInputBody; //
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.profileUpdateAPI(
    profileUpdateInputBody,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateInputBody** | **ProfileUpdateInputBody**|  | |
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ProfileUpdateOutputBody**

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

# **profileUpdateEmailAPI**
> ProfileUpdateEmailOutputBody profileUpdateEmailAPI(profileUpdateEmailInputBody)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    ProfileUpdateEmailInputBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let profileUpdateEmailInputBody: ProfileUpdateEmailInputBody; //
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.profileUpdateEmailAPI(
    profileUpdateEmailInputBody,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateEmailInputBody** | **ProfileUpdateEmailInputBody**|  | |
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ProfileUpdateEmailOutputBody**

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

