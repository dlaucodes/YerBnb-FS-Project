class Listing < ApplicationRecord
  validates :price, :description, presence: true
  validates :title, presence: true, length: { maximum: 60}
  validates :price, :lat, :lng, numericality: { greater_than_or_equal_to: -1000, less_than_or_equal_to: 100000 }

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  
  has_many :reviews,
    dependent: :destroy

  has_many_attached :photos
end