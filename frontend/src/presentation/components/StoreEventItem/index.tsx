import React from 'react';

export type StoreEvent = {
  id: number;
  name: string;
  change: number;
  inventory: number;
  store: string;
  shoe_model: string;
  event_time: string;
  event_color: string;
  event_icon: React.ReactNode;
};

type Props = {
  store_event: StoreEvent;
  eventIdx: number;
  numberOfEvents: number;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StoreEventItem: React.FC<Props> = ({
  store_event,
  eventIdx,
  numberOfEvents,
}: Props) => (
  <li key={store_event.id}>
    <div className="relative pb-8">
      {eventIdx !== numberOfEvents - 1 ? (
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative flex space-x-3">
        <div>
          <span
            className={classNames(
              store_event.event_color,
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
            )}
          >
            {store_event.event_icon}
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 font-semibold">
              {store_event.store}
            </p>
            <div className="flex">
              <p className="text-sm text-gray-500 mr-4">
                {store_event.shoe_model}
              </p>
              <p className="text-sm text-gray-500">
                {store_event.change > 0 ? 'Restocked' : 'Sold'}{' '}
                {Math.abs(store_event.change)}
              </p>
            </div>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <time>{store_event.event_time}</time>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default StoreEventItem;
