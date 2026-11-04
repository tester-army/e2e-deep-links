import { StyleSheet, Text, View } from 'react-native';

import { Tracking } from '@/components/tracking';
import { colors, space, type } from '@/constants/theme';
import { formatUsd, type Order, statusOf } from '@/lib/orders';

export function OrderLabel({ order }: { order: Order }) {
  return (
    <View style={styles.label}>
      <View style={styles.top}>
        <Text style={[type.caption, styles.eyebrow]}>e2e store</Text>
        <Text testID="order-status" style={[type.caption, styles.secondary]}>
          {statusOf(order)}
        </Text>
      </View>
      <Text testID="order-title" accessibilityRole="header" style={[type.h1, styles.primary]}>
        order #{order.id}
      </Text>
      <View style={styles.item}>
        <View style={styles.itemText}>
          <Text style={[type.bodyL, styles.primary]}>{order.item}</Text>
          <Text style={[type.bodyS, styles.muted]}>{order.detail}</Text>
        </View>
        <Text style={[type.monoM, styles.primary]}>{formatUsd(order.cents)}</Text>
      </View>
      <Perforation />
      <Tracking order={order} />
    </View>
  );
}

function Perforation() {
  return (
    <View style={styles.perforation}>
      <View style={[styles.notch, styles.notchLeft]} />
      <View style={styles.dashes}>
        {Array.from({ length: 48 }, (_, index) => (
          <View key={index} style={styles.dash} />
        ))}
      </View>
      <View style={[styles.notch, styles.notchRight]} />
    </View>
  );
}

const PADDING = space(3);
const NOTCH = space(2);

const styles = StyleSheet.create({
  label: {
    gap: space(2),
    padding: PADDING,
    borderWidth: 1,
    borderColor: colors.neutral800,
    backgroundColor: colors.panel,
    overflow: 'hidden',
  },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  item: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: space(2) },
  itemText: { flex: 1, gap: space(0.5) },
  perforation: { height: NOTCH, marginHorizontal: -PADDING, justifyContent: 'center' },
  dashes: { flexDirection: 'row', gap: space(0.5), overflow: 'hidden', marginHorizontal: NOTCH / 2 + space(1) },
  dash: { width: space(1), height: 1, backgroundColor: colors.neutral700 },
  notch: {
    position: 'absolute',
    width: NOTCH,
    height: NOTCH,
    borderWidth: 1,
    borderColor: colors.neutral800,
    backgroundColor: colors.black,
  },
  notchLeft: { left: -NOTCH / 2 - 1 },
  notchRight: { right: -NOTCH / 2 - 1 },
  eyebrow: { color: colors.mint },
  primary: { color: colors.offWhite },
  secondary: { color: colors.neutral300 },
  muted: { color: colors.neutral500 },
});
