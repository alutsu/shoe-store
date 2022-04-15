/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import StoreEvents from 'presentation/components/StoreEvents';
import StoreEventsContextProvider from 'presentation/context/store/getStoreEvent';

const ListStoreEvents: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 sm:w-full lg:w-2/3">
      <StoreEventsContextProvider>
        <StoreEvents />
      </StoreEventsContextProvider>
    </div>
  );
};

export default ListStoreEvents;
