export function openedBy(via?: string) {
  if (via === 'launch') return 'At launch';
  if (via === 'running') return 'While running';
  return 'From your orders';
}
