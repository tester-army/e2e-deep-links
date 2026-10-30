export const STEPS = ['Placed', 'Packed', 'Out for delivery', 'Delivered'] as const;

export type Step = (typeof STEPS)[number];

export type Order = {
  id: string;
  item: string;
  detail: string;
  cents: number;
  times: string[];
};

export const orders: Order[] = [
  {
    id: '41',
    item: 'e2e T-shirt',
    detail: 'Black, size M',
    cents: 2000,
    times: ['Oct 22, 09:14', 'Oct 23, 16:40', 'Oct 24, 08:05', 'Oct 24, 13:52'],
  },
  {
    id: '42',
    item: 'e2e Hoodie',
    detail: 'Black, size L',
    cents: 4800,
    times: ['Oct 28, 11:02', 'Oct 29, 10:31', 'Oct 30, 07:48'],
  },
  { id: '43', item: 'e2e Cap', detail: 'One size', cents: 1800, times: ['Oct 29, 19:20', 'Oct 30, 12:15'] },
];

export function findOrder(id: string | undefined) {
  return orders.find((order) => order.id === id);
}

export function statusOf(order: Order): Step {
  return STEPS[order.times.length - 1];
}

export function formatUsd(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}
