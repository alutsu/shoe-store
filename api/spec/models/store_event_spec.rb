require 'rails_helper'

RSpec.describe StoreEvent, type: :model do
  let(:store_event) { create(:store_event) }

  context 'validates numericality of amount' do
    it 'be invalid' do
      expect(build_stubbed(:store_event, inventory: -1)).to_not be_valid
    end
  end

  context 'validates event name' do
    it 'be invalid' do
      expect(build_stubbed(:store_event, name: 'invalid_name')).to_not be_valid
    end
  end
end
