/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ShoeModelsContextProvider from 'presentation/context/store/getShoeModels';
import ShoeModels from 'presentation/components/ShoeModels';

const ListShoeModels: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 sm:w-full lg:w-2/3">
      <ShoeModelsContextProvider>
        <ShoeModels />
      </ShoeModelsContextProvider>
    </div>
  );
};

export default ListShoeModels;
