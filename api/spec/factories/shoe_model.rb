FactoryBot.define do
  factory :shoe_model do
    sequence(:name) { |n| "Shoe Model #{n}" }
  end
end
