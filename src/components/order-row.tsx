import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, type } from '@/constants/theme';
import { type Order, statusOf } from '@/lib/orders';

export function OrderRow({ order }: { order: Order }) {
  const status = statusOf(order);
  const delivered = status === 'Delivered';
  return (
    <Pressable
      testID={`row-${order.id}`}
      accessibilityRole="button"
      onPress={() => router.push(`/order/${order.id}`)}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Text style={[type.number, styles.number]}>#{order.id}</Text>
      <View style={styles.body}>
        <Text style={[type.body, styles.primary]}>{order.item}</Text>
        <View style={styles.status}>
          <View style={[styles.square, delivered && styles.squareDone]} />
          <Text style={[type.label, delivered ? styles.faint : styles.soft]}>{status}</Text>
        </View>
      </View>
      <Text style={[type.code, styles.faint]}>→</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: colors.hairlineStrong,
  },
  pressed: { backgroundColor: colors.panel },
  number: { width: 72, color: colors.textPrimary },
  body: { flex: 1, gap: 6 },
  status: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  square: { width: 7, height: 7, backgroundColor: colors.textPrimary },
  squareDone: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.textFaint },
  primary: { color: colors.textPrimary },
  soft: { color: colors.textSoft },
  faint: { color: colors.textFaint },
});
