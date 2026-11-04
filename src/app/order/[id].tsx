import { useLocalSearchParams } from 'expo-router';

import { AddressBar } from '@/components/address-bar';
import { AppHeader } from '@/components/app-header';
import { Missing } from '@/components/missing';
import { OrderLabel } from '@/components/order-label';
import { Readout } from '@/components/readout';
import { Screen } from '@/components/screen';
import { openedBy } from '@/lib/opened';
import { findOrder } from '@/lib/orders';

export default function OrderScreen() {
  const { id, via } = useLocalSearchParams<{ id: string; via?: string }>();
  const order = findOrder(id);

  return (
    <Screen testID={`order-${id}`}>
      <AppHeader back />
      <AddressBar
        parts={[
          { text: 'e2edeeplinks://', tone: 'scheme' },
          { text: 'order/', tone: 'route' },
          { text: id, tone: order ? 'id' : 'missing' },
        ]}
      />
      {order ? (
        <OrderLabel order={order} />
      ) : (
        <Missing
          kicker="order"
          ghost={`#${id}`}
          title={`no order #${id}`}
          titleTestID="order-missing"
          body="the link points to an order that isn't in your account. it may be an old link, or a mistyped one."
        />
      )}
      <Readout
        rows={[
          { label: 'screen', value: 'order/[id]' },
          { label: 'opened', value: openedBy(via), testID: 'opened' },
        ]}
      />
    </Screen>
  );
}
