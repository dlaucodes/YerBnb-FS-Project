class RemoveColFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :location, :string
  end
end
