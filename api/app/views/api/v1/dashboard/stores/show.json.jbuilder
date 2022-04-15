json.partial! 'api/v1/dashboard/stores/store', store: @store
json.shoe_models @store.shoe_models.order(:name), partial: 'api/v1/dashboard/shoe_models/shoe_model', store: @store, as: :shoe_model
