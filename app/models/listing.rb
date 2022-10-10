class Listing < ApplicationRecord
  validates :price, :title, :description, :location, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end