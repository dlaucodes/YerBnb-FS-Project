class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.boolean :reserved, default: false, null: false
      t.timestamps
    end
    add_reference :reservations, :listing, index: true, foreign_key: true
    add_reference :reservations, :guest, index: true, foreign_key: { to_table: :users }
  end
end
