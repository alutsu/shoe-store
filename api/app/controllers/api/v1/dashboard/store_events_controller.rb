module Api
  module V1
    module Dashboard
      class StoreEventsController < ApplicationController
        def index
          @store_events = StoreEvent.last(100).reverse
        end

        def overview
          @overview = StoreEvent.select('count(*) as total')
                                .select(
                                  "to_timestamp(
                                    floor((extract('epoch' from created_at) / 1200))
                                    * 1200
                                  )
                                  AT TIME ZONE 'UTC' as interval"
                                ).group('interval')
                                .order('interval').map do |overview|
            {
              interval: overview.interval.strftime('%Y-%m-%d %H:%M:%S'),
              total: overview.total
            }
          end
        end
      end
    end
  end
end
