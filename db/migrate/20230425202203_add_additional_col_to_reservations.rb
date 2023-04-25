class AddAdditionalColToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :listing_pic, :string
  end
end
