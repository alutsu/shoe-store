module Api
  module V1
    module Dashboard
      class StoreEventsController < ApplicationController
        def index
          @store_events = StoreEvent.last(100)
        end
      end
    end
  end
end
