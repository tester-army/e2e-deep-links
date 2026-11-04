import { StyleSheet, Text, View } from 'react-native';

import { colors, space, type } from '@/constants/theme';

export type AddressPart = { text: string; tone: 'scheme' | 'route' | 'id' | 'missing' };

const tones = StyleSheet.create({
  scheme: { color: colors.neutral500 },
  route: { color: colors.blue400 },
  id: { color: colors.offWhite },
  missing: { color: colors.mint, textDecorationLine: 'underline' },
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
        <Text style={[type.caption, styles.stripLabel]}>link</Text>
      </View>
      <Text testID="address" numberOfLines={1} style={[type.codeM, styles.link]}>
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
  frame: { borderWidth: 1, borderColor: colors.neutral800, backgroundColor: colors.panel },
  strip: {
    height: space(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral800,
  },
  dots: { flexDirection: 'row', gap: space(0.5) },
  dot: { width: space(1), height: space(1), backgroundColor: colors.neutral700 },
  stripLabel: { color: colors.neutral500 },
  link: { paddingHorizontal: space(2), paddingVertical: space(1.5) },
});
