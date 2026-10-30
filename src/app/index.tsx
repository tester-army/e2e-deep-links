import { StyleSheet, Text, View } from 'react-native';

import { AddressBar } from '@/components/address-bar';
import { AppHeader } from '@/components/app-header';
import { OrderRow } from '@/components/order-row';
import { Screen } from '@/components/screen';
import { colors, type } from '@/constants/theme';
import { orders } from '@/lib/orders';

export default function OrdersScreen() {
  return (
    <Screen testID="orders">
      <AppHeader />
      <AddressBar parts={[{ text: 'e2edeeplinks://', tone: 'scheme' }]} />
      <View style={styles.intro}>
        <Text accessibilityRole="header" style={[type.display, styles.primary]}>
          Your orders
        </Text>
        <Text style={[type.bodyS, styles.secondary]}>
          Every order has its own link. A notification or an email opens it, even with the app closed.
        </Text>
      </View>
      <View style={styles.list}>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </View>
      <Text style={[type.codeS, styles.faint]}>e2edeeplinks://order/&lt;id&gt; opens an order.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { gap: 10, paddingTop: 12 },
  list: { borderBottomWidth: 1, borderBottomColor: colors.hairlineStrong },
  primary: { color: colors.textPrimary },
  secondary: { color: colors.textSecondary },
  faint: { color: colors.textFaint },
});
