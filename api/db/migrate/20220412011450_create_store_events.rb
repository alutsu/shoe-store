class CreateStoreEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :store_events do |t|
      t.integer :inventory
      t.references :store, null: false, foreign_key: true
      t.references :shoe_models, null: false, foreign_key: true

      t.timestamps
    end
  end
end
