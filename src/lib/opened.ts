// From the `via` tag that +native-intent puts on links.
export function openedBy(via: string | string[] | undefined) {
  if (via === 'launch') return 'At launch';
  if (via === 'running') return 'While running';
  return 'From your orders';
}
