class StoreEvent < ApplicationRecord
  EVENT_TYPES = {
    increase: 'increase',
    decrease: 'decrease'
  }.freeze

  belongs_to :store
  belongs_to :shoe_model

  validates :store, presence: true
  validates :shoe_model, presence: true
  validates :name, presence: true, inclusion: { in: EVENT_TYPES.keys }
  validates :change, numericality: { only_integer: true }
  validates :inventory, numericality: { only_integer: true }
end
