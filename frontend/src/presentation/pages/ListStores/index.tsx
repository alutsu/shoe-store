/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Stores from 'presentation/components/Stores';
import StoreContextProvider from 'presentation/context/store/getStore';

const ListStores: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 sm:w-full lg:w-2/3">
      <StoreContextProvider>
        <Stores />
      </StoreContextProvider>
    </div>
  );
};

export default ListStores;
