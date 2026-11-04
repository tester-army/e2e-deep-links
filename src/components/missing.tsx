import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { colors, space, type } from '@/constants/theme';

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
      <Text style={[type.caption, styles.eyebrow]}>{kicker}</Text>
      <Text testID={ghostTestID} numberOfLines={1} adjustsFontSizeToFit style={[type.display, styles.ghost]}>
        {ghost}
      </Text>
      <Text testID={titleTestID} accessibilityRole="header" style={[type.h3, styles.primary]}>
        {title}
      </Text>
      <Text style={[type.bodyM, styles.secondary]}>{body}</Text>
      <View style={styles.action}>
        <Button testID="see-orders" variant="outline" label="see your orders" onPress={() => router.dismissTo('/')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    gap: space(1.5),
    padding: space(3),
    borderWidth: 1,
    borderColor: colors.neutral800,
    backgroundColor: colors.panel,
  },
  eyebrow: { color: colors.mint },
  ghost: { color: colors.neutral700 },
  action: { marginTop: space(1.5) },
  primary: { color: colors.offWhite },
  secondary: { color: colors.neutral400 },
});
