module Api
  module V1
    module Dashboard
      class ShoeModelsController < ApplicationController
        def index
          @shoe_models = ShoeModel.all

          render json: @shoe_models
        end

        private

        def shoe_model_params
          params.require(:shoe_model).permit(:name)
        end
      end
    end
  end
end
