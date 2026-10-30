import { StyleSheet, Text, View } from 'react-native';

import { colors, terminal, type } from '@/constants/theme';

export type AddressPart = { text: string; tone: 'scheme' | 'route' | 'id' | 'missing' };

const tones = StyleSheet.create({
  scheme: { color: terminal.scheme },
  route: { color: terminal.route },
  id: { color: terminal.id },
  missing: { color: colors.accentOrange, textDecorationLine: 'underline' },
});

export function AddressBar({ parts }: { parts: AddressPart[] }) {
  return (
    <View style={styles.frame}>
      <View style={styles.strip}>
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <Text style={[type.label, styles.stripLabel]}>Link</Text>
      </View>
      <Text testID="address" numberOfLines={1} style={[type.code, styles.link]}>
        {parts.map((part, index) => (
          <Text key={index} style={tones[part.tone]}>
            {part.text}
          </Text>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { borderWidth: 1, borderColor: terminal.border, backgroundColor: terminal.frame },
  strip: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: terminal.border,
    backgroundColor: terminal.strip,
  },
  dots: { flexDirection: 'row', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 2, backgroundColor: terminal.dot },
  stripLabel: { color: terminal.dot },
  link: { paddingHorizontal: 14, paddingVertical: 14 },
});
