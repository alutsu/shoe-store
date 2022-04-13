class Store < ApplicationRecord
  has_many :inventories
  has_many :shoe_models, through: :inventories
  has_many :store_events, dependent: :destroy

  paginates_per 10

  def models_count
    shoe_models.count
  end
end
