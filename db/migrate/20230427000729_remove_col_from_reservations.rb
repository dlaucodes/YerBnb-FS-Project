class RemoveColFromReservations < ActiveRecord::Migration[7.0]
  def change
    remove_column :reservations, :total, :float
    remove_column :reservations, :days, :integer
  end
end
