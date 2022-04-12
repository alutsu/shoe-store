class Inventory < ApplicationRecord
  belongs_to :shoe_models
  belongs_to :store
end
