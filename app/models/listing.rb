class Listing < ApplicationRecord
  validates :price, :title, :description, :location, :lat, :lng, presence: true
  validates :price, numericality: { in: 0..10000}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_one_attached :photo
end