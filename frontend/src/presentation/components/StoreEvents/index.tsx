import { StoreEventsContext } from 'presentation/context/store/getStoreEvent';
import React, { useContext } from 'react';
// import StoreEventItem from '../StoreEventItem';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StoreEvents: React.FC = () => {
  const { storeEvents } = useContext(StoreEventsContext);
  return (
    <div className="flex justify-center mt-10">
      <ul className="-mb-8">
        {storeEvents.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== storeEvents.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.event_color,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                    )}
                  >
                    {event.event_icon}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-semibold">
                      {event.store}
                    </p>
                    <div className="flex">
                      <p className="text-sm text-gray-500 mr-4">
                        {event.shoe_model}
                      </p>
                      <p className="text-sm text-gray-500">
                        {event.change > 0 ? 'Restocked' : 'Sold'}{' '}
                        {Math.abs(event.change)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time>{event.event_time}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreEvents;
