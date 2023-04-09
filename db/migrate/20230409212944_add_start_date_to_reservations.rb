class AddStartDateToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :start_date, :datetime, null: false
  end
end
