require "rails_helper"

RSpec.describe ShoeModelsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/shoe_models").to route_to("shoe_models#index")
    end
  end
end
