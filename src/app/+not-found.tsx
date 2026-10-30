import { useLocalSearchParams, usePathname } from 'expo-router';

import { AddressBar } from '@/components/address-bar';
import { AppHeader } from '@/components/app-header';
import { Missing } from '@/components/missing';
import { Readout } from '@/components/readout';
import { Screen } from '@/components/screen';
import { openedBy } from '@/lib/opened';

export default function NotFoundScreen() {
  const pathname = usePathname();
  const { via } = useLocalSearchParams<{ via?: string }>();

  return (
    <Screen testID="not-found-screen">
      <AppHeader back />
      <AddressBar
        parts={[
          { text: 'e2edeeplinks://', tone: 'scheme' },
          { text: pathname.replace(/^\//, ''), tone: 'missing' },
        ]}
      />
      <Missing
        kicker="Route"
        ghost={pathname}
        ghostTestID="not-found-path"
        title="This link goes nowhere"
        titleTestID="not-found"
        body="No screen in e2e Deep Links answers this path. The link may be old, or mistyped."
      />
      <Readout
        rows={[
          { label: 'Screen', value: '+not-found' },
          { label: 'Opened', value: openedBy(via), testID: 'opened' },
        ]}
      />
    </Screen>
  );
}
