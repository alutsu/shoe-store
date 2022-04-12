class Inventory < ApplicationRecord
  belongs_to :shoe_model, class_name: 'ShoeModel', foreign_key: 'shoe_models_id'
  belongs_to :store
end
