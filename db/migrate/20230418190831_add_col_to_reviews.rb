class AddColToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :reviewer_pic, :string
  end
end
