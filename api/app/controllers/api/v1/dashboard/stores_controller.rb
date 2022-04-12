module Api
  module V1
    module Dashboard
      class StoresController < ApplicationController
        before_action :set_store, only: %i[show update destroy]

        # GET /stores
        def index
          @stores = Store.all

          render json: @stores
        end

        private

        def set_store
          @store = Store.find(params[:id])
        end

        def store_params
          params.require(:store).permit(:name)
        end
      end
    end
  end
end
