export const errorGet = (error: any) => {

  let errorString = 'There was a server error.';

  if (error.detail) {
    errorString = error.detail
  }

  if (error.length >= 1) {
    errorString = '';
    errorString = (error[0].location) ? errorString.concat('', error[0].location) : errorString;
    errorString = (error[0].location && error[0].message) ? errorString.concat('', ': ') : errorString;
    errorString = (error[0].message) ? errorString.concat('', error[0].message) : errorString;
  }

  if (error.errors && error.errors.length >= 1) {
    errorString = error.errors[0].message;
  }

  return errorString;
}
