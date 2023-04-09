class AddColToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :total, :float, null: false
    add_column :reservations, :guests, :integer, null: false
  end
end
