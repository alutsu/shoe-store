import React from 'react';
import { Link } from 'react-router-dom';
import { ShoeModel } from '../ShoeModelItem';

export type Store = {
  id: number;
  name: string;
  total_orders: number;
  inventories: number;
  shoe_models?: ShoeModel[];
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
      <span
        className={`inline-flex rounded-full text-gray-600 px-2 text-xs font-semibold leading-5 ${
          store.inventories > 900 ? 'bg-green-100' : 'bg-red-100'
        } `}
      >
        {store.inventories}
      </span>
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {store.total_orders}
    </td>
    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <Link
        to={`${store.id}`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Open
        <span className="sr-only">, {store.name}</span>
      </Link>
    </td>
  </tr>
);

export default StoreItem;
