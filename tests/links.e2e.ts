import { describe } from '@e2e-dev/mobile';
import { expect } from 'e2e';

import { FIRST_LAUNCH, link, test } from './fixtures';

describe('links', { retries: 2, timeout: 120_000 }, () => {
  test('a link opens the order from a cold start', async ({ device, screen }) => {
    await device.closeApp();
    await device.openLink(link('order/42'));

    const order = screen.getByTestId('order-42');
    await expect(order.getByTestId('order-title')).toHaveText('order #42', FIRST_LAUNCH);
    await expect(order.getByTestId('order-status')).toHaveText('out for delivery');
    await expect(order.getByTestId('opened')).toHaveText('at launch');

    await order.getByTestId('back').tap();
    await expect(screen.getByTestId('orders')).toBeVisible();
    await expect(order).toBeHidden();
  });

  test('a link opens the order while the app runs', async ({ app, device, screen }) => {
    await app.open();
    await screen.getByTestId('row-41').tap(FIRST_LAUNCH);
    const previous = screen.getByTestId('order-41');
    await expect(previous.getByTestId('opened')).toHaveText('from your orders');

    await device.openLink(link('order/42'));

    const order = screen.getByTestId('order-42');
    await expect(order.getByTestId('order-title')).toHaveText('order #42');
    await expect(order.getByTestId('opened')).toHaveText('while running');

    await order.getByTestId('back').tap();
    await expect(previous.getByTestId('order-title')).toHaveText('order #41');
    await expect(order).toBeHidden();
  });

  test('an unknown order shows the fallback', async ({ app, device, screen }) => {
    await app.open();
    await device.openLink(link('order/999'));

    const order = screen.getByTestId('order-999');
    await expect(order.getByTestId('order-missing')).toHaveText('no order #999', FIRST_LAUNCH);

    await order.getByTestId('see-orders').tap();
    await expect(screen.getByTestId('orders')).toBeVisible();
    await expect(order).toBeHidden();
  });

  test('a link to no screen shows that it goes nowhere', async ({ device, screen }) => {
    await device.closeApp();
    await device.openLink(link('track/42'));

    const notFound = screen.getByTestId('not-found-screen');
    await expect(notFound.getByTestId('not-found')).toHaveText('this link goes nowhere', FIRST_LAUNCH);
    await expect(notFound.getByTestId('not-found-path')).toHaveText('/track/42');

    await notFound.getByTestId('see-orders').tap();
    await expect(screen.getByTestId('orders')).toBeVisible();
    await expect(notFound).toBeHidden();
  });
});
