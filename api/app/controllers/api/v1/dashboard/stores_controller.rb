module Api
  module V1
    module Dashboard
      class StoresController < ApplicationController
        before_action :set_store, only: %i[show]

        # GET /stores
        def index
          @stores = Store.includes(:shoe_models).order(:name).page(params[:page])
        end

        def show
          @shoe_models = @store.shoe_models.order(:name)
        end

        private

        def set_store
          @store = Store.includes(:shoe_models).find(params[:id])
        end
      end
    end
  end
end
