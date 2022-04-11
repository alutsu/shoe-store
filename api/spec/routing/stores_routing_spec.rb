require "rails_helper"

RSpec.describe StoresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/stores/dashboard").to route_to("stores#index")
    end
  end
end
