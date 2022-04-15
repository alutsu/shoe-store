import React from 'react';

export type StoreEvent = {
  id: number;
  name: string;
  change: number;
  inventory: number;
  store: string;
  shoe_model: string;
  event_time: string;
  event_color: string;
  event_icon: React.ReactNode;
};

type Props = {
  store_event: StoreEvent;
};

const StoreEventItem: React.FC<Props> = ({ store_event }: Props) => (
  <tr key={store_event.id}>
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      {store_event.name}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {store_event.change}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {store_event.inventory}
    </td>
  </tr>
);

export default StoreEventItem;
