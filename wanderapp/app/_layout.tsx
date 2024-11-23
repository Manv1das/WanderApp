import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="scanner" options={{ title: 'Scanner' }} />
      <Tabs.Screen name="balance" options={{ title: 'Balance' }} />
      <Tabs.Screen name="merchant" options={{ title: 'Merchant' }} />
    </Tabs>
  );
}
