import React from 'react';
import { Store } from '@/domain/models/store';
import StoreItem from '../StoreItem';

const stores: Array<Store> = [
  {
    id: '1',
    name: 'Store 1',
    total_orders: 10,
    inventories: 10,
  },
  {
    id: '1',
    name: 'Store 1',
    total_orders: 10,
    inventories: 10,
  },
  {
    id: '1',
    name: 'Store 1',
    total_orders: 10,
    inventories: 10,
  },
  {
    id: '1',
    name: 'Store 1',
    total_orders: 10,
    inventories: 10,
  },
];

const Stores: React.FC = () => (
  <div className="mt-8 flex flex-col">
    <div className="-my-2 -mx-4 overflow-x-auto lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Total Inventory
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Total Orders
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {stores.map((store) => (
                <StoreItem store={store} key={store.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Stores;
