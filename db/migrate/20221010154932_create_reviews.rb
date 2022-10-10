class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    add_reference :reviews, :user, index: true, foreign_key: true
    add_reference :reviews, :listing, index: true, foreign_key: true
  end
end
