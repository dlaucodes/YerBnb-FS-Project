class Reservation < ApplicationRecord
  validates :reserved, inclusion: { in: [true, false] }

  belongs_to :listing
  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User
end
