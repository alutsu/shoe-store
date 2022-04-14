import React, { createContext, useEffect, useState } from 'react';
import axios from 'main/config/axios';
import { useParams } from 'react-router-dom';
import { Store } from 'presentation/components/StoreItem';

type PropsShoeModelsContext = {
  store: Store;
};

const DEFAULT_VALUES = {
  store: {
    id: 0,
    name: '',
    total_orders: 0,
    inventories: 0,
    shoe_models: [
      {
        id: 0,
        name: '',
        total_orders: 0,
        amount: 0,
      },
    ],
  },
};

const ShoeModelsContext = createContext<PropsShoeModelsContext>(DEFAULT_VALUES);

const ShoeModelsContextProvider: React.FC<any> = ({ children }: any) => {
  const [store, setStore] = useState<Store>(DEFAULT_VALUES.store);
  const params = useParams();

  useEffect(() => {
    async function loadStores() {
      const response = await axios.get(`/stores/${params.store_id}`);
      setStore(response.data);
    }
    loadStores();
  }, []);

  return (
    <ShoeModelsContext.Provider value={{ store }}>
      {children}
    </ShoeModelsContext.Provider>
  );
};

export { ShoeModelsContext };
export default ShoeModelsContextProvider;
