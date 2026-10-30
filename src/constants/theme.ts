import { StyleSheet } from 'react-native';

export const colors = {
  canvas: '#111111',
  panel: '#161616',
  hairline: 'rgba(255, 255, 255, 0.08)',
  hairlineStrong: 'rgba(255, 255, 255, 0.2)',
  textBright: '#ffffff',
  textPrimary: '#f9f8f7',
  textSoft: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textFaint: 'rgba(255, 255, 255, 0.5)',
  textGhost: 'rgba(255, 255, 255, 0.16)',
  outlineFill: 'rgba(22, 22, 22, 0.9)',
  outlineRing: 'rgba(255, 255, 255, 0.8)',
  accentOrange: '#ff8001',
};

export const terminal = {
  frame: 'rgb(30, 30, 30)',
  strip: 'rgb(26, 26, 26)',
  border: 'rgb(78, 78, 78)',
  dot: 'rgb(120, 120, 120)',
  scheme: 'rgb(139, 148, 158)',
  route: 'rgb(210, 168, 255)',
  id: 'rgb(165, 214, 255)',
};

// The family names inside the font files, which the expo-font plugin embeds.
export const fonts = {
  display: 'Stack Sans Notch',
  sans: 'Inter',
  mono: 'DM Mono',
};

export const type = StyleSheet.create({
  ghost: { fontFamily: fonts.display, fontSize: 88, lineHeight: 92 },
  hero: { fontFamily: fonts.display, fontSize: 44, lineHeight: 50 },
  display: { fontFamily: fonts.display, fontSize: 40, lineHeight: 46 },
  number: { fontFamily: fonts.display, fontSize: 32, lineHeight: 36 },
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 32 },
  body: { fontFamily: fonts.sans, fontSize: 16, lineHeight: 22 },
  bodyS: { fontFamily: fonts.sans, fontSize: 14, lineHeight: 21 },
  code: { fontFamily: fonts.mono, fontSize: 15, lineHeight: 22 },
  codeS: { fontFamily: fonts.mono, fontSize: 12, lineHeight: 18 },
  label: { fontFamily: fonts.mono, fontSize: 11, lineHeight: 16, letterSpacing: 1.1, textTransform: 'uppercase' },
  button: { fontFamily: fonts.mono, fontSize: 13, lineHeight: 20, fontWeight: '500', textTransform: 'uppercase' },
  brand: { fontFamily: fonts.display, fontSize: 22, lineHeight: 26, letterSpacing: -1.2 },
});
