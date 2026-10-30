import { StyleSheet, Text, View } from 'react-native';

import { colors, type } from '@/constants/theme';
import { type Order, STEPS } from '@/lib/orders';

export function Tracking({ order }: { order: Order }) {
  const reached = order.times.length;
  return (
    <View>
      {STEPS.map((step, index) => {
        const done = index < reached;
        const current = done && index === reached - 1 && reached < STEPS.length;
        return (
          <View key={step} style={styles.row}>
            <View style={styles.rail}>
              <View style={[styles.node, current && styles.nodeCurrent]}>
                <View style={[styles.core, done ? styles.coreDone : styles.coreAhead, current && styles.coreCurrent]} />
              </View>
              {index < STEPS.length - 1 && <View style={[styles.line, index + 1 < reached && styles.lineDone]} />}
            </View>
            <View style={styles.text}>
              <Text style={[type.bodyS, done ? styles.primary : styles.faint]}>{step}</Text>
              <Text style={[type.codeS, styles.faint]}>{done ? order.times[index] : '—'}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 14, minHeight: 46 },
  rail: { width: 17, alignItems: 'center' },
  node: { width: 17, height: 17, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  nodeCurrent: { borderWidth: 1, borderColor: colors.textPrimary },
  core: { width: 11, height: 11 },
  coreDone: { backgroundColor: colors.textPrimary },
  coreAhead: { borderWidth: 1, borderColor: colors.hairlineStrong },
  coreCurrent: { width: 7, height: 7 },
  line: { flex: 1, width: 1, marginVertical: 4, backgroundColor: colors.hairlineStrong },
  lineDone: { backgroundColor: colors.textFaint },
  text: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: 12, paddingTop: 1 },
  primary: { color: colors.textPrimary },
  faint: { color: colors.textFaint },
});
