require 'rails_helper'

RSpec.describe Store do
  let(:store) { create(:store) }

  it 'validate uniqueness of name' do
    expect(build_stubbed(:store, name: store.name)).to_not be_valid
  end

  it 'validate presence of name' do
    expect(build_stubbed(:store, name: nil)).to_not be_valid
  end
end
