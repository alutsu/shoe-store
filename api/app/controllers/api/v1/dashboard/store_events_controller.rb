module Api
  module V1
    module Dashboard
      class StoreEventsController < ApplicationController
        def index
          @store_events = StoreEvent.last(100).reverse
        end

        def overview
          @overview = StoreEvent.where(created_at: 2.hours.ago..Time.now)
                                .select("COUNT(*) FILTER (WHERE name = 'increase') AS increase")
                                .select("COUNT(*) FILTER (WHERE name = 'decrease') AS decrease")
                                .select(
                                  "to_timestamp(
                                    floor((extract('epoch' from created_at) / 600))
                                    * 600
                                  )
                                  AT TIME ZONE 'UTC+3' as interval"
                                ).group('interval')
                                .order('interval').map do |overview|
            {
              interval: overview.interval.strftime('%H:%M'),
              increase: overview.increase,
              decrease: overview.decrease
            }
          end
        end
      end
    end
  end
end
