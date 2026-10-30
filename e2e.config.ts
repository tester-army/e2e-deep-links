import type { E2EConfig } from 'e2e';
import { mobile } from '@e2e-dev/mobile';

// e2e loads no .env file itself.
try {
  process.loadEnvFile(new URL('.env.local', import.meta.url));
} catch {}

// A link that launches the app on iOS carries no launch arguments, so Metro stays on 8081, the port the Debug build has
// compiled in.
const app = {
  bundleId: 'dev.e2e.deeplinks',
  command: {
    executable: 'npx',
    args: ['expo', 'start', '--port', '8081'],
    reuseExisting: true,
    log: '.e2e/logs/metro.log',
  },
  readyUrl: 'http://localhost:8081/status',
};

export default {
  targets: [
    {
      name: 'ios',
      engine: mobile({ platform: 'ios', device: process.env.IOS_DEVICE, session: 'e2e-deep-links-ios' }),
      app,
    },
    {
      name: 'android',
      engine: mobile({ platform: 'android', device: process.env.ANDROID_DEVICE, session: 'e2e-deep-links-android' }),
      app,
    },
  ],
  workers: 1,
} satisfies E2EConfig;
