class CreateStoreEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :store_events do |t|
      t.references :store, null: false, foreign_key: true
      t.references :shoe_models, null: false, foreign_key: true
      t.string :name
      t.integer :change
      t.integer :inventory

      t.timestamps
    end
  end
end
