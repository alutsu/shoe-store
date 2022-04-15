import { StoreEventsContext } from 'presentation/context/store/getStoreEvent';
import React, { useContext } from 'react';
import StoreEventItem from '../StoreEventItem';

const StoreEvents: React.FC = () => {
  const { storeEvents } = useContext(StoreEventsContext);
  return (
    <div className="flex justify-center mt-10">
      <ul className="-mb-8">
        {storeEvents.map((event, eventIdx) => (
          <StoreEventItem
            key={event.id}
            store_event={event}
            eventIdx={eventIdx}
            numberOfEvents={storeEvents.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default StoreEvents;
