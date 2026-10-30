import { StyleSheet, Text, View } from 'react-native';

import { Tracking } from '@/components/tracking';
import { colors, type } from '@/constants/theme';
import { formatUsd, type Order, statusOf } from '@/lib/orders';

export function OrderLabel({ order }: { order: Order }) {
  return (
    <View style={styles.label}>
      <View style={styles.top}>
        <Text style={[type.label, styles.faint]}>e2e Store</Text>
        <Text testID="order-status" style={[type.bodyS, styles.soft]}>
          {statusOf(order)}
        </Text>
      </View>
      <Text testID="order-title" accessibilityRole="header" style={[type.hero, styles.primary]}>
        Order #{order.id}
      </Text>
      <View style={styles.item}>
        <View style={styles.itemText}>
          <Text style={[type.body, styles.primary]}>{order.item}</Text>
          <Text style={[type.bodyS, styles.secondary]}>{order.detail}</Text>
        </View>
        <Text style={[type.code, styles.primary]}>{formatUsd(order.cents)}</Text>
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

const PADDING = 20;
const NOTCH = 18;

const styles = StyleSheet.create({
  label: {
    gap: 16,
    padding: PADDING,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    backgroundColor: colors.panel,
    overflow: 'hidden',
  },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  item: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 },
  itemText: { flex: 1, gap: 2 },
  perforation: { height: NOTCH, marginHorizontal: -PADDING, justifyContent: 'center' },
  dashes: { flexDirection: 'row', gap: 5, overflow: 'hidden', marginHorizontal: NOTCH / 2 + 6 },
  dash: { width: 6, height: 1, backgroundColor: colors.hairlineStrong },
  notch: {
    position: 'absolute',
    width: NOTCH,
    height: NOTCH,
    borderRadius: NOTCH / 2,
    borderWidth: 1,
    borderColor: colors.hairlineStrong,
    backgroundColor: colors.canvas,
  },
  notchLeft: { left: -NOTCH / 2 - 1 },
  notchRight: { right: -NOTCH / 2 - 1 },
  primary: { color: colors.textPrimary },
  soft: { color: colors.textSoft },
  secondary: { color: colors.textSecondary },
  faint: { color: colors.textFaint },
});
