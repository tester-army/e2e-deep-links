import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { OutlineButton } from '@/components/outline-button';
import { colors, type } from '@/constants/theme';

type MissingProps = {
  kicker: string;
  ghost: string;
  ghostTestID?: string;
  title: string;
  titleTestID: string;
  body: string;
};

export function Missing({ kicker, ghost, ghostTestID, title, titleTestID, body }: MissingProps) {
  return (
    <View style={styles.box}>
      <Text style={[type.label, styles.faint]}>{kicker}</Text>
      <Text testID={ghostTestID} numberOfLines={1} adjustsFontSizeToFit style={[type.ghost, styles.ghost]}>
        {ghost}
      </Text>
      <Text testID={titleTestID} accessibilityRole="header" style={[type.title, styles.primary]}>
        {title}
      </Text>
      <Text style={[type.bodyS, styles.secondary]}>{body}</Text>
      <View style={styles.action}>
        <OutlineButton testID="see-orders" label="See your orders" onPress={() => router.dismissTo('/')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Android draws a dashed border only with a radius.
  box: {
    gap: 10,
    padding: 24,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: colors.hairlineStrong,
  },
  ghost: { color: colors.textGhost },
  action: { marginTop: 14 },
  primary: { color: colors.textPrimary },
  secondary: { color: colors.textSecondary },
  faint: { color: colors.textFaint },
});
