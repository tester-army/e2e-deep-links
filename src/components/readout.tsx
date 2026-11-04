import { StyleSheet, Text, View } from 'react-native';

import { colors, space, type } from '@/constants/theme';

type Row = { label: string; value: string; testID?: string };

export function Readout({ rows }: { rows: Row[] }) {
  return (
    <View style={styles.readout}>
      {rows.map((row) => (
        <View key={row.label} style={styles.row}>
          <Text style={[type.caption, styles.muted]}>{row.label}</Text>
          <Text testID={row.testID} style={[type.codeM, styles.primary]}>
            {row.value}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  readout: { borderTopWidth: 1, borderTopColor: colors.neutral800 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: space(2),
    paddingVertical: space(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral800,
  },
  primary: { color: colors.offWhite },
  muted: { color: colors.neutral500 },
});
