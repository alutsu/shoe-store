class StoreEvent < ApplicationRecord
  belongs_to :store
  belongs_to :shoe_model, class_name: 'ShoeModel', foreign_key: 'shoe_models_id'
end
