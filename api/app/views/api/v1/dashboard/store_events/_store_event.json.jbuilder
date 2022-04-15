json.call(store_event, :id, :name, :change, :inventory)
json.store store_event.store.name
json.shoe_model store_event.shoe_model.name
json.event_time store_event.created_at.strftime('%m/%d/%Y %H:%M:%S')
