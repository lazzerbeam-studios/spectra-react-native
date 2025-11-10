export const ErrorGet = (response: any) => {
  let errorString = 'There was a server error.';
  if (response.detail) {
    errorString = response.detail;
  }
  if (response.length >= 1) {
    errorString = '';
    errorString = (response[0].location) ? errorString.concat('', response[0].location) : errorString;
    errorString = (response[0].location && response[0].message) ? errorString.concat('', ': ') : errorString;
    errorString = (response[0].message) ? errorString.concat('', response[0].message) : errorString;
  }
  if (response.errors && response.errors.length >= 1) {
    errorString = response.errors[0].message;
  }
  return errorString;
}
