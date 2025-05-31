# ErrorModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**$schema** | **string** | A URL to the JSON Schema for this object. | [optional] [readonly] [default to undefined]
**detail** | **string** | A human-readable explanation specific to this occurrence of the problem. | [optional] [default to undefined]
**errors** | [**Array&lt;ErrorDetail&gt;**](ErrorDetail.md) | Optional list of individual error details | [optional] [default to undefined]
**instance** | **string** | A URI reference that identifies the specific occurrence of the problem. | [optional] [default to undefined]
**status** | **number** | HTTP status code | [optional] [default to undefined]
**title** | **string** | A short, human-readable summary of the problem type. This value should not change between occurrences of the error. | [optional] [default to undefined]
**type** | **string** | A URI reference to human-readable documentation for the error. | [optional] [default to 'about:blank']

## Example

```typescript
import { ErrorModel } from './api';

const instance: ErrorModel = {
    $schema,
    detail,
    errors,
    instance,
    status,
    title,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
