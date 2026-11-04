import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, space, type } from '@/constants/theme';
import { type Order, statusOf } from '@/lib/orders';

export function OrderRow({ order }: { order: Order }) {
  const status = statusOf(order);
  const delivered = status === 'delivered';
  return (
    <Pressable
      testID={`row-${order.id}`}
      accessibilityRole="button"
      onPress={() => router.push(`/order/${order.id}`)}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <Text style={[type.h3, styles.number]}>#{order.id}</Text>
      <View style={styles.body}>
        <Text style={[type.bodyM, styles.primary]}>{order.item}</Text>
        <View style={styles.status}>
          <View style={[styles.square, delivered && styles.squareDone]} />
          <Text style={[type.caption, delivered ? styles.muted : styles.positive]}>{status}</Text>
        </View>
      </View>
      <Text style={[type.monoM, styles.muted]}>→</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space(2),
    paddingVertical: space(2),
    borderTopWidth: 1,
    borderTopColor: colors.neutral800,
  },
  pressed: { opacity: 0.6 },
  number: { width: space(9), color: colors.offWhite },
  body: { flex: 1, gap: space(1) },
  status: { flexDirection: 'row', alignItems: 'center', gap: space(1) },
  square: { width: space(1), height: space(1), backgroundColor: colors.green },
  squareDone: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.neutral500 },
  primary: { color: colors.offWhite },
  positive: { color: colors.green },
  muted: { color: colors.neutral500 },
});
