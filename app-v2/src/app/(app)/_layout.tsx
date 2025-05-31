import { Stack, Redirect } from 'expo-router';

import { AuthStore } from '~/src/stores/auth.store';

const AppLayout = () => {
  const { authBool } = AuthStore();
  if (!authBool) {
    return <Redirect href='/'></Redirect>;
  }

  return (
    <Stack></Stack>
  );
};

export default AppLayout;
