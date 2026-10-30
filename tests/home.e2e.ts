import { test } from '@e2e-dev/mobile';
import { expect } from 'e2e';

import { FIRST_LAUNCH } from './fixtures';

test('a plain launch opens your orders', async ({ app, screen }) => {
  await app.open();

  const orders = screen.getByTestId('orders');
  await expect(orders.getByText('Your orders')).toBeVisible(FIRST_LAUNCH);
  await expect(orders.getByTestId('row-41')).toBeVisible();
  await expect(orders.getByTestId('row-42')).toBeVisible();
  await expect(orders.getByTestId('row-43')).toBeVisible();
  await expect(screen.getByTestId('back')).toBeHidden();
});
