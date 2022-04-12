class ShoeModel < ApplicationRecord
  has_many :inventories
  has_many :stores, through: :inventories
  has_many :store_events, dependent: :destroy

  validates :name, presence: true, uniqueness: { case_sensitive: false , message: 'is already in use' }
end
