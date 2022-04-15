import React, { createContext, useEffect, useState } from 'react';
import axios from 'main/config/axios';
import { Store } from '@/presentation/components/StoreItem';

type PropsStoreContext = {
  stores: Store[];
};

const DEFAULT_VALUES = {
  stores: [
    {
      id: 0,
      name: '',
      total_orders: 0,
      inventories: 0,
    },
  ],
};

const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUES);

const StoreContextProvider: React.FC<any> = ({ children }: any) => {
  const [stores, setStores] = useState<Store[]>(DEFAULT_VALUES.stores);

  useEffect(() => {
    async function loadShoeModels() {
      const response = await axios.get('/stores');
      setStores(response.data);
    }
    loadShoeModels();

    const interval = setInterval(() => loadShoeModels(), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StoreContext.Provider value={{ stores }}>{children}</StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreContextProvider;
