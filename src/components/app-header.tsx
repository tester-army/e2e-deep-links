import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Logo } from '@/components/logo';
import { colors, space, type } from '@/constants/theme';

export function AppHeader({ back = false }: { back?: boolean }) {
  return (
    <View style={styles.header}>
      {back ? (
        <Pressable
          testID="back"
          accessibilityRole="button"
          accessibilityLabel="back"
          hitSlop={12}
          onPress={() => router.back()}
          style={({ pressed }) => pressed && styles.pressed}>
          <Text style={[type.caption, styles.link]}>[ ← back ]</Text>
        </Pressable>
      ) : (
        <View style={styles.brand}>
          <Logo height={24} />
          <Text style={[type.caption, styles.muted]}>/ deep links</Text>
        </View>
      )}
      {back && <Logo height={24} />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: space(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: -space(3),
    paddingHorizontal: space(3),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral800,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: space(1.5) },
  pressed: { opacity: 0.6 },
  link: { color: colors.blue400 },
  muted: { color: colors.neutral500 },
});
