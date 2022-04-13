json.call(store, :id, :name)

json.inventories store.inventories.sum(:amount)
json.total_orders store.store_events.count
