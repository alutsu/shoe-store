module Events
  class Create
    def initialize(store_name:, shoe_model:, new_amount:)
      @store = Store.find_by(name: store_name)
      @shoe_model = ShoeModel.find_by(name: shoe_model)
      @new_amount = new_amount
      @updated_inventory = 0
    end

    def call
      inventory = Inventory.find_by(store: store, shoe_model: shoe_model)

      updated_inventory = new_amount - (inventory&.amount || 0)

      inventory.update(amount: new_amount) if updated_inventory.positive?

      # Stores the event
      StoreEvent.create!(
        store_id: store.id,
        shoe_models_id: shoe_model.id,
        name: event_name,
        change: updated_inventory,
        inventory: new_amount
      )
    end

    private

    attr_accessor :store, :shoe_model, :updated_inventory, :new_amount

    def event_name
      updated_inventory.positive? ? 'increase' : 'decrease'
    end
  end
end
