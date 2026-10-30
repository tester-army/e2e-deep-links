import type { NativeIntent } from 'expo-router';

const BARE_SCHEME = /^([a-z][a-z0-9+.-]*:\/\/)?\/*(\?.*)?$/i;

// Runs on every link before it's routed: `initial` is true for the one that launched the app.
export const redirectSystemPath: NativeIntent['redirectSystemPath'] = ({ path, initial }) => {
  if (!path || BARE_SCHEME.test(path)) return path;
  return `${path}${path.includes('?') ? '&' : '?'}via=${initial ? 'launch' : 'running'}`;
};
