import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, type } from '@/constants/theme';

const mark = require('../../assets/images/e2e-mark.png');

// A linked screen always has the list under it (`anchor` in the root layout), so Back needs no check.
export function AppHeader({ back = false }: { back?: boolean }) {
  return (
    <View style={styles.header}>
      {back ? (
        <Pressable testID="back" accessibilityRole="button" hitSlop={12} onPress={() => router.back()}>
          {({ pressed }) => <Text style={[type.button, pressed ? styles.bright : styles.soft]}>← Back</Text>}
        </Pressable>
      ) : (
        <View style={styles.brand}>
          <Image source={mark} style={styles.mark} />
          <Text style={[type.brand, styles.bright]}>e2e</Text>
          <Text style={[type.code, styles.faint]}>/ deep links</Text>
        </View>
      )}
      {back && <Image source={mark} style={styles.mark} />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  mark: { width: 24, height: 24 },
  bright: { color: colors.textPrimary },
  soft: { color: colors.textSoft },
  faint: { color: colors.textFaint },
});
