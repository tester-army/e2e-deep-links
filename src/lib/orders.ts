export const STEPS = ['placed', 'packed', 'out for delivery', 'delivered'] as const;

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
    item: 'e2e t-shirt',
    detail: 'black, size M',
    cents: 2000,
    times: ['oct 22, 09:14', 'oct 23, 16:40', 'oct 24, 08:05', 'oct 24, 13:52'],
  },
  {
    id: '42',
    item: 'e2e hoodie',
    detail: 'black, size L',
    cents: 4800,
    times: ['oct 28, 11:02', 'oct 29, 10:31', 'oct 30, 07:48'],
  },
  { id: '43', item: 'e2e cap', detail: 'one size', cents: 1800, times: ['oct 29, 19:20', 'oct 30, 12:15'] },
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
