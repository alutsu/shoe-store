class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.references :shoe_model, null: false, foreign_key: true
      t.references :store, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
