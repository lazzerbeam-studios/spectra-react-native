import { Stack } from 'expo-router';

import { DashboardScreen } from '~/src/screens/dashboard/dashboard';

const Dashboard = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <DashboardScreen></DashboardScreen>
    </>
  );
};

export default Dashboard;
