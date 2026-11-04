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
        kicker="route"
        ghost={pathname}
        ghostTestID="not-found-path"
        title="this link goes nowhere"
        titleTestID="not-found"
        body="no screen in e2e deep links answers this path. the link may be old, or mistyped."
      />
      <Readout
        rows={[
          { label: 'screen', value: '+not-found' },
          { label: 'opened', value: openedBy(via), testID: 'opened' },
        ]}
      />
    </Screen>
  );
}
