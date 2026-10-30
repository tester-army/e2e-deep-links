import { test } from '@e2e-dev/mobile';
import { expect } from 'e2e';

test('a plain launch opens your orders', async ({ app, screen }) => {
  await app.open();
  const orders = screen.getByTestId('orders');
  // The first launch waits for Metro to bundle the app.
  await expect(orders.getByText('Your orders')).toBeVisible({ timeout: 60_000 });
  await expect(orders.getByTestId('row-41')).toBeVisible();
  await expect(orders.getByTestId('row-42')).toBeVisible();
  await expect(orders.getByTestId('row-43')).toBeVisible();
  await expect(screen.getByTestId('back')).toBeHidden();
});
