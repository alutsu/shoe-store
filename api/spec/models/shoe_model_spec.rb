require 'rails_helper'

RSpec.describe ShoeModel, type: :model do
  let(:shoe_model) { create(:shoe_model) }

  context 'validates uniqueness of name' do

    it 'be valid' do
      expect(build_stubbed(:shoe_model, name: shoe_model.name)).to_not be_valid
    end
  end

  context 'validates presence of name' do
    it 'be invalid' do
      expect(build_stubbed(:shoe_model, name: nil)).to_not be_valid
    end
  end
end
