class ShoeModel < ApplicationRecord
  has_many :inventories
  has_many :stores, through: :inventories
  has_many :store_events, dependent: :destroy

  validates :name, presence: true, uniqueness: { case_sensitive: false, message: 'is already in use' }

  paginates_per 10

  def inventory_count(store_id)
    inventories.find_by(store_id: store_id).amount
  end

  def total_orders(store_id)
    store_events.where(store_id: store_id).count
  end
end
