import { StyleSheet, Text, View } from 'react-native';

import { colors, type } from '@/constants/theme';

type Row = { label: string; value: string; testID?: string };

export function Readout({ rows }: { rows: Row[] }) {
  return (
    <View style={styles.readout}>
      {rows.map((row) => (
        <View key={row.label} style={styles.row}>
          <Text style={[type.label, styles.faint]}>{row.label}</Text>
          <Text testID={row.testID} style={[type.code, styles.soft]}>
            {row.value}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  readout: { borderTopWidth: 1, borderTopColor: colors.hairline },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  soft: { color: colors.textSoft },
  faint: { color: colors.textFaint },
});
