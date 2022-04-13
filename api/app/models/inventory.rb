class Inventory < ApplicationRecord
  belongs_to :shoe_model
  belongs_to :store

  validates :store, uniqueness: { scope: :shoe_model }
  validates :amount, numericality: { greater_than_or_equal_to: 0, only_integer: true }
end
