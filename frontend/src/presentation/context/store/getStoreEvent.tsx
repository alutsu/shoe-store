import React, { createContext, useEffect, useState } from 'react';
import axios from 'main/config/axios';
import { StoreEvent } from 'presentation/components/StoreEventItem';
import { ReactComponent as Increase } from 'assets/increase.svg';
import { ReactComponent as Decrease } from 'assets/decrease.svg';

type PropsStoreEventsContext = {
  storeEvents: StoreEvent[];
};

const DEFAULT_VALUES = {
  storeEvents: [
    {
      id: 0,
      name: '',
      change: 0,
      inventory: 0,
      store: '',
      shoe_model: '',
      event_time: '',
      event_color: '',
      event_icon: '',
    },
  ],
};

const StoreEventsContext =
  createContext<PropsStoreEventsContext>(DEFAULT_VALUES);

const StoreEventsContextProvider: React.FC<any> = ({ children }: any) => {
  const [storeEvents, setStoreEvents] = useState<StoreEvent[]>(
    DEFAULT_VALUES.storeEvents,
  );

  const transformObject = (items) => {
    return items.map((item) => ({
      ...item,
      event_color: item.change > 0 ? 'bg-green-500' : 'bg-red-500',
      event_icon:
        item.change > 0 ? (
          <Increase className="h-5 w-5 text-white" aria-hidden="true" />
        ) : (
          <Decrease className="h-5 w-5 text-white" aria-hidden="true" />
        ),
    }));
  };

  useEffect(() => {
    async function loadStoreEvents() {
      const response = await axios.get('/store_events');
      setStoreEvents(transformObject(response.data));
    }
    loadStoreEvents();

    const interval = setInterval(() => loadStoreEvents(), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StoreEventsContext.Provider value={{ storeEvents }}>
      {children}
    </StoreEventsContext.Provider>
  );
};

export { StoreEventsContext };
export default StoreEventsContextProvider;
