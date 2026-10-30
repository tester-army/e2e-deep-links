// A plain launch arrives as the bare scheme, which stays as it is.
const ROOT = /^([a-z][a-z0-9+.-]*:\/\/)?\/*(\?.*)?$/i;

// Every link passes through here before it's routed: `initial` is true for the one that launched the app.
export function redirectSystemPath({ path, initial }: { path: string; initial: boolean }) {
  if (ROOT.test(path)) return path;
  return `${path}${path.includes('?') ? '&' : '?'}via=${initial ? 'launch' : 'running'}`;
}
