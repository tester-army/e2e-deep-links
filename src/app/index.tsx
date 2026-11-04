import { StyleSheet, Text, View } from 'react-native';

import { AddressBar } from '@/components/address-bar';
import { AppHeader } from '@/components/app-header';
import { OrderRow } from '@/components/order-row';
import { Screen } from '@/components/screen';
import { colors, space, type } from '@/constants/theme';
import { orders } from '@/lib/orders';

export default function OrdersScreen() {
  return (
    <Screen testID="orders">
      <AppHeader />
      <AddressBar parts={[{ text: 'e2edeeplinks://', tone: 'scheme' }]} />
      <View style={styles.intro}>
        <Text style={[type.caption, styles.eyebrow]}>deep links example</Text>
        <Text accessibilityRole="header" style={[type.h1, styles.primary]}>
          your orders
        </Text>
        <Text style={[type.bodyL, styles.secondary]}>
          every order has its own link. a notification or an email opens it, even with the app closed.
        </Text>
      </View>
      <View style={styles.list}>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </View>
      <Text style={[type.codeS, styles.muted]}>e2edeeplinks://order/&lt;id&gt; opens an order.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { gap: space(2), paddingTop: space(2) },
  list: { borderBottomWidth: 1, borderBottomColor: colors.neutral800 },
  eyebrow: { color: colors.mint },
  primary: { color: colors.offWhite },
  secondary: { color: colors.neutral400 },
  muted: { color: colors.neutral500 },
});
