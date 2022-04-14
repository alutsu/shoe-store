import React from 'react';
import { Link } from 'react-router-dom';

export type Store = {
  id: number;
  name: string;
  total_orders: number;
  inventories: number;
};

type Props = {
  store: Store;
};

const StoreItem: React.FC<Props> = ({ store }: Props) => (
  <tr key={store.id}>
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      {store.name}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {store.total_orders}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {store.inventories}
    </td>
    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <Link to="/" className="text-indigo-600 hover:text-indigo-900">
        Open
        <span className="sr-only">, {store.name}</span>
      </Link>
    </td>
  </tr>
);

export default StoreItem;
