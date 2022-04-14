/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useMemo } from 'react';
import Stores from 'presentation/components/Stores';
import { StoreContext } from 'presentation/context';
import { Store } from '@/domain/models/store';
import { StoresParams } from '@/domain/useCases/loadStores';

const getStoresAdapter = (params: StoresParams): Promise<Store[]> => {
  const { id } = params;
  return new Promise((resolve) => {
    setTimeout(() => {
      id.concat('1');
      resolve([]);
    }, 1000);
  });
};

const ListStores: React.FC = () => {
  const stores: Array<Store> = useMemo(
    () => [
      {
        id: '1',
        name: 'Store 1',
        total_orders: 10,
        inventories: 10,
      },
    ],
    [],
  );
  return (
    <div className="px-4 sm:px-6 lg:px-8 sm:w-full lg:w-2/3">
      <StoreContext.Provider value={{ stores, getStores: getStoresAdapter }}>
        <Stores />
      </StoreContext.Provider>
    </div>
  );
};

export default ListStores;
