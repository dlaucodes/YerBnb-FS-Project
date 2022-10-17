class AddLngToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :lng, :float
  end
end
