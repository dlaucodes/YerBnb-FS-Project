class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5), message: "To submit your review, please select a rating." } 
  validates :body, presence: { message: "To submit your review, please include an explanation of your rating." }

  belongs_to :user
  belongs_to :listing

  has_one_attached :photo
end
