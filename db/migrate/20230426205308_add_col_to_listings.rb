class AddColToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :guests, :integer
    add_column :listings, :bedrooms, :integer
    add_column :listings, :beds, :integer
    add_column  :listings, :baths, :integer
    add_column :listings, :city, :string
    add_column :listings, :state, :string
    add_column :listings, :wifi, :boolean, default: false
    add_column :listings, :kitchen, :boolean, default: false
    add_column :listings, :pets_allowed, :boolean, default: false
  end
end
