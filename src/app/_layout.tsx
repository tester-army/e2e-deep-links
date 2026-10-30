import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/constants/theme';

// A linked screen opens with the orders list under it, so Back works after a cold start.
export const unstable_settings = { anchor: 'index' };

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.canvas } }} />
    </>
  );
}
