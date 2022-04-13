FactoryBot.define do
  factory :inventory do
    shoe_model
    store
    amount { rand(1..100) }
  end
end
