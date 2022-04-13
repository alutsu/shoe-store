json.call(shoe_model, :id, :name)
json.amount shoe_model.inventory_count(store.id)
json.total_orders shoe_model.total_orders(store.id)
