require 'rails_helper'

RSpec.describe Inventory, type: :model do
  let(:inventory) { create(:inventory) }

  it 'validate uniqueness of store_id and shoe_model_id' do
    expect(build_stubbed(:inventory, store_id: inventory.store_id, shoe_model_id: inventory.shoe_model_id)).to_not be_valid
  end

  it 'validate numericality of amount' do
    expect(build_stubbed(:inventory, amount: -1)).to_not be_valid
  end
end
