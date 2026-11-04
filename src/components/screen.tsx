import type { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, space } from '@/constants/theme';

export function Screen({ testID, children }: { testID: string; children: ReactNode }) {
  return (
    <SafeAreaView testID={testID} style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.black },
  content: { paddingHorizontal: space(3), paddingBottom: space(3), gap: space(3) },
});
