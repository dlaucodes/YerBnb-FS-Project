class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.float :price, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.timestamps
    end
    add_reference :listings, :owner, index: true, foreign_key: { to_table: :users }
  end
end