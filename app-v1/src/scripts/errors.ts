export const errorGet = (error: any) => {

  let errorString = 'There was a server error.';

  if (error.detail) {
    errorString = error.detail
  }

  return errorString;
}
