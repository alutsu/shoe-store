FactoryBot.define do
  factory :store_event do
    store
    shoe_model
    name {  }
    change { rand(1..100) }
    inventory { rand(1..100) }
  end
end
