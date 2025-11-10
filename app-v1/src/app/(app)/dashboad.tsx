import { Stack } from 'expo-router';

import { DashboadScreen } from '~/src/screens/dashboard/dashboad';

const Dashboard = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <DashboadScreen></DashboadScreen>
    </>
  );
};

export default Dashboard;
