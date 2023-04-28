class AddPriceToReservation < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :listing_price, :float
    add_column :reservations, :listing_title, :string
  end
end
