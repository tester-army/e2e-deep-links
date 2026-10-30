/// <reference types="node" />
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { test as base } from '@e2e-dev/mobile';

export const BUNDLE_ID = 'dev.e2e.deeplinks';

export function link(path: string) {
  return `e2edeeplinks://${path}`;
}

const run = promisify(execFile);

export const test = base.extend<{ schemeApproved: void }>({
  // iOS asks "Open in “e2e Deep Links”?" the first time a simulator opens the scheme, and device.openLink doesn't answer
  // it. The answer lives in the simulator's preferences, so each test sets it first.
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
        BUNDLE_ID,
      ]);
    }
    await use();
  },
});
