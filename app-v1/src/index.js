import { ExpoRoot } from 'expo-router';
import { registerRootComponent } from 'expo';

export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
