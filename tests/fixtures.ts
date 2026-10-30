/// <reference types="node" />
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { test as base } from '@e2e-dev/mobile';

const run = promisify(execFile);

// The first launch waits for Metro to bundle the app.
export const FIRST_LAUNCH = { timeout: 60_000 };

export function link(path: string) {
  return `e2edeeplinks://${path}`;
}

export const test = base.extend<{ schemeApproved: void }>({
  // iOS asks "Open in “e2e Deep Links”?" the first time a simulator opens the scheme, and device.openLink doesn't
  // answer it, so each test saves the answer in the simulator's preferences first.
  schemeApproved: async ({ device, platform }, use) => {
    if (platform === 'ios') {
      await run('xcrun', [
        'simctl',
        'spawn',
        device.unstable_raw.deviceId,
        'defaults',
        'write',
        'com.apple.launchservices.schemeapproval',
        'com.apple.CoreSimulator.CoreSimulatorBridge-->e2edeeplinks',
        '-string',
        'dev.e2e.deeplinks',
      ]);
    }
    await use();
  },
});
