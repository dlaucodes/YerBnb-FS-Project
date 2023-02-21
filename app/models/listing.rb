class Listing < ApplicationRecord
  validates :price, :title, :description, :location, presence: true
  validates :price, :lat, :lng, numericality: { in: 0..1000000}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many_attached :photos
end