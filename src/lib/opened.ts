export function openedBy(via?: string) {
  if (via === 'launch') return 'at launch';
  if (via === 'running') return 'while running';
  return 'from your orders';
}
