import { StyleSheet, Text, View } from 'react-native';

import { colors, space, type } from '@/constants/theme';
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
              <Text style={[type.bodyM, done ? styles.primary : styles.muted]}>{step}</Text>
              <Text style={[type.codeS, styles.muted]}>{done ? order.times[index] : '—'}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: space(2), minHeight: space(6) },
  rail: { width: 17, alignItems: 'center' },
  node: { width: 17, height: 17, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  nodeCurrent: { borderWidth: 1, borderColor: colors.green },
  core: { width: 11, height: 11 },
  coreDone: { backgroundColor: colors.offWhite },
  coreAhead: { borderWidth: 1, borderColor: colors.neutral700 },
  coreCurrent: { width: 7, height: 7, backgroundColor: colors.green },
  line: { flex: 1, width: 1, marginVertical: space(0.5), backgroundColor: colors.neutral800 },
  lineDone: { backgroundColor: colors.neutral500 },
  text: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: space(1.5), paddingTop: 1 },
  primary: { color: colors.offWhite },
  muted: { color: colors.neutral500 },
});
